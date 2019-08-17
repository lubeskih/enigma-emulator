// Libraries
import { observer } from "mobx-react";
import React, { Component } from "react";
import {
  ConnectDragSource,
  DragSource,
  DragSourceConnector,
  DragSourceMonitor
} from "react-dnd";

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
    const alreadyLoaded = store.checkIfAlreadyLoaded(id);
    const backgroundColor = store.settingsAreLocked ? "#fafafa" : "#fff";

    return connectDragSource(
      <div style={{ maxWidth: "150px" }}>
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
          <div className="rotorStyle" style={{ opacity, backgroundColor }}>
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
    canDrag: (props: IProps) =>
      !props.store.draggableRotors.get(props.id) &&
      !props.store.settingsAreLocked,
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
