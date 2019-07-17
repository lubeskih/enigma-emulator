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
 * EnigmaM4FastRotor
 *
 * Specific select used for manipulating the
 * right-hand (also known as FAST) rotor.
 *
 * This is rendered only when using the Enigma M4.
 */
@observer
export class EnigmaM4FastRotor extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  // Handle changing the rotor type
  onRotorOptionChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_M4_FR = store.getRotorObjectByRotorType(event.value);
  };

  // Handle ground settings change
  onGroundSettingsChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_M4_FR.setGroundSettings(ALPHABET.indexOf(event.value) + 1);
  };

  // Handle ring settings change
  onRingSettingsChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_M4_FR.setRingSettings(ALPHABET.indexOf(event.value) + 1);
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
              defaultValue={EIGHT_ROTOR_OPTIONS[0]}
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
                  value: store.getLetterByNumber(
                    store.ENIGMA_M4_FR.ringSettings
                  ),
                  label: store.getLetterByNumber(
                    store.ENIGMA_M4_FR.ringSettings
                  )
                }
              ]}
              value={[
                {
                  value: store.getLetterByNumber(
                    store.ENIGMA_M4_FR.ringSettings
                  ),
                  label: store.getLetterByNumber(
                    store.ENIGMA_M4_FR.ringSettings
                  )
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
                    store.ENIGMA_M4_FR.groundSettings
                  ),
                  label: store.getLetterByNumber(
                    store.ENIGMA_M4_FR.groundSettings
                  )
                }
              ]}
              value={[
                {
                  value: store.getLetterByNumber(
                    store.ENIGMA_M4_FR.groundSettings
                  ),
                  label: store.getLetterByNumber(
                    store.ENIGMA_M4_FR.groundSettings
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
