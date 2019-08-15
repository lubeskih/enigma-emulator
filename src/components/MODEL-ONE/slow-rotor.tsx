// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

// Internal
import { NUMBER_OPTIONS } from "../../constants";
import { IDraggableRotor } from "../../types";

// Store
import { Store } from "../../store";

// Components
import RotorPosition from "../droppable-position";

// Component props
interface IProps {
  store: Store;
}

/**
 * EnigmaOneSlowRotor
 *
 * Specific select used for manipulating the
 * left-hand (also known as SLOW) rotor.
 *
 * This is rendered only when using the Enigma I.
 */
@observer
export class EnigmaOneSlowRotor extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  // Handle rotor drop
  onPositionThreeDrop = (item: IDraggableRotor) => {
    this.props.store.updatePositionThree(item);
  };

  // Handle changing the rotor type
  onRotorOptionChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_I_SR = store.getRotorObjectByRotorType(event.value);
  };

  // Handle the change in the ground settings
  onGroundSettingsChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_I_SR.setGroundSettings(event.value);
  };

  // Handle the change in the ring settings
  onRingSettingsChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_I_SR.setRingSettings(event.value);
  };

  render() {
    let store = this.props.store;

    return (
      <>
        <div className="row mb-3">
          <div className="col-md-12 mb-3">
            <small>
              <code className="info">SLOW ROTOR (left-hand)</code>
            </small>
            <RotorPosition
              droppedItem={store.positionThree}
              onDrop={this.onPositionThreeDrop}
              store={store}
              position={3}
            />
          </div>
          {store.positionThree ? (
            <>
              {" "}
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
                      value: store.ENIGMA_I_SR.ringSettings,
                      label: store.ENIGMA_I_SR.ringSettings
                    }
                  ]}
                  value={[
                    {
                      value: store.ENIGMA_I_SR.ringSettings,
                      label: store.ENIGMA_I_SR.ringSettings
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
                      value: store.ENIGMA_I_SR.groundSettings,
                      label: store.ENIGMA_I_SR.groundSettings
                    }
                  ]}
                  value={[
                    {
                      value: store.ENIGMA_I_SR.groundSettings,
                      label: store.ENIGMA_I_SR.groundSettings
                    }
                  ]}
                  options={NUMBER_OPTIONS}
                  onChange={this.onGroundSettingsChange}
                />
              </div>
            </>
          ) : null}
        </div>
      </>
    );
  }
}
