// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
// import { computed } from "mobx";
import Select from "react-select";

import { FIVE_ROTOR_OPTIONS, NUMBER_OPTIONS } from "../../constants";

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

  // Handle changing the rotor type
  onRotorOptionChange = (event: any) => {
    let store = this.props.store;

    store.MIDDLE_ROTOR = store.getRotorObjectByRotorType(event.value);
  };

  // Handle the change in the ground settings
  onGroundSettingsChange = (event: any) => {
    let store = this.props.store;
    store.MIDDLE_ROTOR.setGroundSettings(event.value);
  };

  // Handle the change in the ring settings
  onRingSettingsChange = (event: any) => {
    let store = this.props.store;
    store.MIDDLE_ROTOR.setRingSettings(event.value);
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

            <Select
              theme={theme => ({
                // NOTE: HOW DO I NOT REPEAT THIS?
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
              defaultValue={FIVE_ROTOR_OPTIONS[1]}
              options={FIVE_ROTOR_OPTIONS}
              onChange={this.onRotorOptionChange}
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
                  value: store.MIDDLE_ROTOR.ringSettings,
                  label: store.MIDDLE_ROTOR.ringSettings
                }
              ]}
              value={[
                {
                  value: store.MIDDLE_ROTOR.ringSettings,
                  label: store.MIDDLE_ROTOR.ringSettings
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
                  value: store.MIDDLE_ROTOR.groundSettings,
                  label: store.MIDDLE_ROTOR.groundSettings
                }
              ]}
              value={[
                {
                  value: store.MIDDLE_ROTOR.groundSettings,
                  label: store.MIDDLE_ROTOR.groundSettings
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
