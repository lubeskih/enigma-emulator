// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import {
  ENIGMA_M4_EXTRA_WHEEL_OPTIONS,
  LETTER_OPTIONS,
  ALPHABET
} from "../../constants";

// Store
import { Store } from "../../store";

// Component props
interface IProps {
  store: Store;
}

/**
 * EnigmaM4ExtraWheel
 */
@observer
export class EnigmaM4ExtraWheel extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  onExtraWheelChange = (event: any) => {
    const store = this.props.store;
    store.ENIGMA_M4_EW = store.getExtraWheelObjectByName(event.value);
  };

  // Handle ground settings change
  public onGroundSettingsChange = (event: any) => {
    const store = this.props.store;

    if (store.ENIGMA_M4_EW) {
      store.ENIGMA_M4_EW.setGroundSettings(ALPHABET.indexOf(event.value) + 1);
    }
  };

  // Handle ring settings change
  public onRingSettingsChange = (event: any) => {
    const store = this.props.store;

    if (store.ENIGMA_M4_EW) {
      store.ENIGMA_M4_EW.setRingSettings(ALPHABET.indexOf(event.value) + 1);
    }
  };

  render() {
    const store = this.props.store;

    return (
      <>
        <div className="row mt-2 line-on-side">
          <div className="col-md-12 mb-3">
            <small>
              <code className="info">EXTRA WHEEL (Zusatzwalze)</code>
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
              className="enigma-type"
              isDisabled={store.settingsAreLocked}
              defaultValue={ENIGMA_M4_EXTRA_WHEEL_OPTIONS[0]}
              options={ENIGMA_M4_EXTRA_WHEEL_OPTIONS}
              onChange={this.onExtraWheelChange}
            />
          </div>
          <>
            {" "}
            <div className="col-md-6 mb-3 mt-2">
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
                    value: store.ENIGMA_M4_EW
                      ? store.getLetterByNumber(store.ENIGMA_M4_EW.ringSettings)
                      : null,
                    label: store.ENIGMA_M4_EW
                      ? store.getLetterByNumber(store.ENIGMA_M4_EW.ringSettings)
                      : null
                  }
                ]}
                value={[
                  {
                    value: store.ENIGMA_M4_EW
                      ? store.getLetterByNumber(store.ENIGMA_M4_EW.ringSettings)
                      : null,
                    label: store.ENIGMA_M4_EW
                      ? store.getLetterByNumber(store.ENIGMA_M4_EW.ringSettings)
                      : null
                  }
                ]}
                options={LETTER_OPTIONS}
                onChange={this.onRingSettingsChange}
              />
            </div>
            <div className="col-md-6 mb-3 mt-2">
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
                    value: store.ENIGMA_M4_EW
                      ? store.getLetterByNumber(
                          store.ENIGMA_M4_EW.groundSettings
                        )
                      : null,
                    label: store.ENIGMA_M4_EW
                      ? store.getLetterByNumber(
                          store.ENIGMA_M4_EW.groundSettings
                        )
                      : null
                  }
                ]}
                value={[
                  {
                    value: store.ENIGMA_M4_EW
                      ? store.getLetterByNumber(
                          store.ENIGMA_M4_EW.groundSettings
                        )
                      : null,
                    label: store.ENIGMA_M4_EW
                      ? store.getLetterByNumber(
                          store.ENIGMA_M4_EW.groundSettings
                        )
                      : null
                  }
                ]}
                options={LETTER_OPTIONS}
                onChange={this.onGroundSettingsChange}
              />
            </div>
          </>
        </div>
      </>
    );
  }
}
