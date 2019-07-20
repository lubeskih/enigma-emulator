// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import { FIVE_ROTOR_OPTIONS, NUMBER_OPTIONS } from "../../constants";

// Store
import { Store } from "../../store";

// Component props
interface IProps {
  store: Store;
}

/**
 * EnigmaOneFastRotor
 *
 * Specific select used for manipulating the
 * right-hand (also known as FAST) rotor.
 *
 * This is rendered only when using the Enigma I.
 */
@observer
export class EnigmaOneFastRotor extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  // Handle changing the rotor type
  onRotorOptionChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_I_FR = store.getRotorObjectByRotorType(event.value);
  };

  // Handle the change in the ground settings
  onGroundSettingsChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_I_FR.setGroundSettings(event.value);
  };

  // Handle the change in the ring settings
  onRingSettingsChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_I_FR.setRingSettings(event.value);
  };

  render() {
    let store = this.props.store;

    return (
      <>
        <div className="row mb-4">
          <div className="col-md-12 mb-3">
            <small>
              <code className="info">FAST ROTOR (right-hand)</code>
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
              defaultValue={FIVE_ROTOR_OPTIONS[0]}
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
                  value: store.ENIGMA_I_FR.ringSettings,
                  label: store.ENIGMA_I_FR.ringSettings
                }
              ]}
              value={[
                {
                  value: store.ENIGMA_I_FR.ringSettings,
                  label: store.ENIGMA_I_FR.ringSettings
                }
              ]}
              options={NUMBER_OPTIONS}
              onChange={this.onRingSettingsChange}
            />
          </div>{" "}
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
                  value: store.ENIGMA_I_FR.groundSettings,
                  label: store.ENIGMA_I_FR.groundSettings
                }
              ]}
              value={[
                {
                  value: store.ENIGMA_I_FR.groundSettings,
                  label: store.ENIGMA_I_FR.groundSettings
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
