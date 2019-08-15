// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

// Internal
import { NUMBER_OPTIONS } from "../../constants";
import { IDraggableRotor } from "../../types";

// Components
import RotorPosition from "../droppable-position";

// Store
import { Store } from "../../store";

// Component props
interface IProps {
  store: Store;
}

/**
 * EnigmaOneMiddleRotor
 *
 * Specific select used for manipulating the
 * middle rotor.
 *
 * This is rendered only when using the Enigma I.
 */
@observer
export class EnigmaOneMiddleRotor extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  // Handle rotor drop
  onPositionTwoDrop = (item: IDraggableRotor) => {
    this.props.store.updatePositionTwo(item);
  };

  // Handle changing the rotor type
  onRotorOptionChange = (event: any) => {
    let store = this.props.store;

    store.ENIGMA_I_MR = store.getRotorObjectByRotorType(event.value);
  };

  // Handle the change in the ground settings
  onGroundSettingsChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_I_MR.setGroundSettings(event.value);
  };

  // Handle the change in the ring settings
  onRingSettingsChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_I_MR.setRingSettings(event.value);
  };

  render() {
    let store = this.props.store;

    return (
      <>
        <div className="row mb-4">
          <div className="col-md-12 mb-3">
            <small>
              <code className="info">MIDDLE ROTOR</code>
            </small>
            <RotorPosition
              droppedItem={store.positionTwo}
              onDrop={this.onPositionTwoDrop}
              store={store}
              position={2}
            />
          </div>
          <div className="col-md-6">
            <small>
              <code className="info">Ringstellung</code>
            </small>
            <Select
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "lightgray",
                  primary: "#2b303b"
                }
              })}
              isDisabled={store.settingsAreLocked}
              className="enigma-type"
              defaultValue={[
                {
                  value: store.ENIGMA_I_MR.ringSettings,
                  label: store.ENIGMA_I_MR.ringSettings
                }
              ]}
              value={[
                {
                  value: store.ENIGMA_I_MR.ringSettings,
                  label: store.ENIGMA_I_MR.ringSettings
                }
              ]}
              options={NUMBER_OPTIONS}
              onChange={this.onRingSettingsChange}
            />
          </div>
          <div className="col-md-6">
            <small>
              <code className="info">Grundstellung</code>
            </small>
            <Select
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "lightgray",
                  primary: "#2b303b"
                }
              })}
              isDisabled={store.settingsAreLocked}
              className="enigma-type"
              defaultValue={[
                {
                  value: store.ENIGMA_I_MR.groundSettings,
                  label: store.ENIGMA_I_MR.groundSettings
                }
              ]}
              value={[
                {
                  value: store.ENIGMA_I_MR.groundSettings,
                  label: store.ENIGMA_I_MR.groundSettings
                }
              ]}
              options={NUMBER_OPTIONS}
              onChange={this.onGroundSettingsChange}
            />
          </div>
        </div>
      </>
    );
  }
}
