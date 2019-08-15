// Libraries
import React, { Component } from "react";
import {
  ConnectDragSource,
  DragSourceConnector,
  DragSourceMonitor,
  DragSource
} from "react-dnd";
import { observer } from "mobx-react";

// Store
import { Store } from "../store";

// Interfaces
interface IProps {
  id: string;
  name: string;
  store: Store;

  // react-dnd
  connectDragSource: ConnectDragSource;
  isDragging: boolean;
  forbidDrag?: boolean;
}

@observer
class DraggableRotor extends Component<IProps, {}> {
  render() {
    const { name, connectDragSource, isDragging, store, id } = this.props;
    const opacity = isDragging ? 0.5 : 1;

    let alreadyLoaded = store.checkIfAlreadyLoaded(id);

    return connectDragSource(
      <div style={{ width: "100px" }}>
        {alreadyLoaded ? (
          <div
            className="rotorLoaded"
            style={{
              opacity
            }}
          >
            {name}
          </div>
        ) : (
          <div className="rotorStyle" style={{ opacity }}>
            {name}
          </div>
        )}
      </div>
    );
  }
}

export default DragSource(
  "DraggableRotor",
  {
    canDrag: (props: IProps) => !props.store.enigmaM3Map.get(props.id),
    beginDrag(props: any, monitor: DragSourceMonitor, component: any) {
      const item = { id: props.id, name: props.name };
      return item;
    }
  },
  (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(DraggableRotor);
