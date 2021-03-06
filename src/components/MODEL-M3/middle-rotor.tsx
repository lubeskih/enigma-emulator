// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

// Internal
import { ALPHABET, LETTER_OPTIONS } from "../../constants";
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
 * EnigmaM3MiddleRotor
 *
 * Specific select used for manipulating the
 * middle rotor.
 *
 * This is rendered only when using the Enigma M3.
 */
@observer
export class EnigmaM3MiddleRotor extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  // Handle rotor drop
  public onrotorDropPositionTwoDrop = (item: IDraggableRotor) => {
    this.props.store.updateRotorDropPositionTwo(item);
  };

  // Handle changing the rotor type
  public onRotorOptionChange = (event: any) => {
    const store = this.props.store;
    store.ENIGMA_ROTOR_POSITION_TWO = store.getRotorObjectByRotorType(
      event.value
    );
  };

  // Handle ring settings change
  public onRingSettingsChange = (event: any) => {
    const store = this.props.store;

    if (store.ENIGMA_ROTOR_POSITION_TWO) {
      store.ENIGMA_ROTOR_POSITION_TWO.setRingSettings(
        ALPHABET.indexOf(event.value) + 1
      );
    }
  };

  // Handle ground settings change
  public onGroundSettingsChange = (event: any) => {
    const store = this.props.store;

    if (store.ENIGMA_ROTOR_POSITION_TWO) {
      store.ENIGMA_ROTOR_POSITION_TWO.setGroundSettings(
        ALPHABET.indexOf(event.value) + 1
      );
    }
  };

  render() {
    const store = this.props.store;

    return (
      <>
        <div className="row mb-3 line-on-side">
          <div className="col-md-12 mb-3">
            <small>
              <code className="info">MIDDLE ROTOR</code>
            </small>
            <RotorPosition
              droppedItem={store.rotorDropPositionTwo}
              onDrop={this.onrotorDropPositionTwoDrop}
              store={store}
              position={2}
            />
          </div>
          {store.rotorDropPositionTwo ? (
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
                      value: store.ENIGMA_ROTOR_POSITION_TWO
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_TWO.ringSettings
                          )
                        : null,
                      label: store.ENIGMA_ROTOR_POSITION_TWO
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_TWO.ringSettings
                          )
                        : null
                    }
                  ]}
                  value={[
                    {
                      value: store.ENIGMA_ROTOR_POSITION_TWO
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_TWO.ringSettings
                          )
                        : null,
                      label: store.ENIGMA_ROTOR_POSITION_TWO
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_TWO.ringSettings
                          )
                        : null
                    }
                  ]}
                  options={LETTER_OPTIONS}
                  onChange={this.onRingSettingsChange}
                />
              </div>{" "}
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
                      value: store.ENIGMA_ROTOR_POSITION_TWO
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_TWO.groundSettings
                          )
                        : null,
                      label: store.ENIGMA_ROTOR_POSITION_TWO
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_TWO.groundSettings
                          )
                        : null
                    }
                  ]}
                  value={[
                    {
                      value: store.ENIGMA_ROTOR_POSITION_TWO
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_TWO.groundSettings
                          )
                        : null,
                      label: store.ENIGMA_ROTOR_POSITION_TWO
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_TWO.groundSettings
                          )
                        : null
                    }
                  ]}
                  options={LETTER_OPTIONS}
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
