// Libraries
import React, { Component } from "react";
import { DropTarget, DropTargetMonitor, DropTargetConnector } from "react-dnd";
import { observer } from "mobx-react";
import { IDraggableRotor } from "../types";

// Store
import { Store } from "../store";

// Interfaces
interface IProps {
  droppedItem: IDraggableRotor | null;
  store: Store;
  position: number;

  // react-dnd
  isOver: any;
  canDrop: any;
  connectDropTarget: any;
  onDrop: any;
}

@observer
class RotorPosition extends Component<IProps, {}> {
  onUnloadRotor = () => {
    this.props.store.unloadRotorByPosition(this.props.position);
  };

  render() {
    const {
      isOver,
      canDrop,
      connectDropTarget,
      droppedItem,
      position,
      store
    } = this.props;

    const isActive = canDrop && isOver;
    let backgroundColor = "#fff";

    if (isActive) {
      backgroundColor = "#e0e0e0";
    } else if (canDrop) {
      backgroundColor = "#fff";
    } else if (store.settingsAreLocked) {
      backgroundColor = "#fafafa";
    }

    let isLoaded = store.returnPositionByPositionNumber(position)
      ? true
      : false;

    return connectDropTarget(
      <div>
        <div
          className={isLoaded ? "positionLoaded" : "position"}
          style={{ backgroundColor }}
        >
          {isActive
            ? "Release to drop"
            : droppedItem
            ? droppedItem.name
            : "Drop a rotor"}
          {isLoaded && !store.settingsAreLocked ? (
            <button className="unloadButton" onClick={this.onUnloadRotor}>
              &times;
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default DropTarget(
  "DraggableRotor",
  {
    drop(props: any, monitor: DropTargetMonitor, component: any) {
      props.onDrop(monitor.getItem());
    }
  },
  (connect: DropTargetConnector, monitor: DropTargetMonitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType(),
    dropResult: monitor.getDropResult()
  })
)(RotorPosition);
