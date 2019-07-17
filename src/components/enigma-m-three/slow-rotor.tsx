// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import { EIGHT_ROTOR_OPTIONS, LETTER_OPTIONS, ALPHABET } from "../../constants";

// Store
import { Store } from "../../store";

// Component props
interface IProps {
  store: Store;
}

/**
 * EnigmaM3SlowRotor
 *
 * Specific select used for manipulating the
 * right-hand (also known as SLOW) rotor.
 *
 * This is rendered only when using the Enigma M3.
 */
@observer
export class EnigmaM3SlowRotor extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  // Handle changing the rotor type
  onRotorOptionChange = (event: any) => {
    let store = this.props.store;
    store.SLOW_ROTOR = store.getRotorObjectByRotorType(event.value);
  };

  // Handle ring settings change
  onRingSettingsChange = (event: any) => {
    let store = this.props.store;
    store.SLOW_ROTOR.setRingSettings(ALPHABET.indexOf(event.value) + 1);
  };

  // Handle ground settings change
  onGroundSettingsChange = (event: any) => {
    let store = this.props.store;
    store.SLOW_ROTOR.setGroundSettings(ALPHABET.indexOf(event.value) + 1);
  };

  render() {
    let store = this.props.store;

    return (
      <>
        <div className="row mb-4">
          <div className="col-md-12 mb-3">
            <small>
              <code className="info">SLOW ROTOR (left-hand)</code>
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
              defaultValue={EIGHT_ROTOR_OPTIONS[2]}
              options={EIGHT_ROTOR_OPTIONS}
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
                  value: store.getLetterByNumber(store.SLOW_ROTOR.ringSettings),
                  label: store.getLetterByNumber(store.SLOW_ROTOR.ringSettings)
                }
              ]}
              value={[
                {
                  value: store.getLetterByNumber(store.SLOW_ROTOR.ringSettings),
                  label: store.getLetterByNumber(store.SLOW_ROTOR.ringSettings)
                }
              ]}
              options={LETTER_OPTIONS}
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
                  value: store.getLetterByNumber(
                    store.SLOW_ROTOR.groundSettings
                  ),
                  label: store.getLetterByNumber(
                    store.SLOW_ROTOR.groundSettings
                  )
                }
              ]}
              value={[
                {
                  value: store.getLetterByNumber(
                    store.SLOW_ROTOR.groundSettings
                  ),
                  label: store.getLetterByNumber(
                    store.SLOW_ROTOR.groundSettings
                  )
                }
              ]}
              options={LETTER_OPTIONS}
              onChange={this.onGroundSettingsChange}
            />
          </div>
        </div>
      </>
    );
  }
}
