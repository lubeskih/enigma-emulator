// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

// Internal
import { LETTER_OPTIONS, ALPHABET } from "../../constants";
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

  // Handle rotor drop
  onPositionOneDrop = (item: IDraggableRotor) => {
    this.props.store.updatePositionOne(item);
  };

  // Handle changing the rotor type
  onRotorOptionChange = (event: any) => {
    let store = this.props.store;
    store.ENIGMA_ROTOR_POSITION_ONE = store.getRotorObjectByRotorType(
      event.value
    );
  };

  // Handle ground settings change
  onGroundSettingsChange = (event: any) => {
    let store = this.props.store;

    if (store.ENIGMA_ROTOR_POSITION_ONE) {
      store.ENIGMA_ROTOR_POSITION_ONE.setGroundSettings(
        ALPHABET.indexOf(event.value) + 1
      );
    }
  };

  // Handle ring settings change
  onRingSettingsChange = (event: any) => {
    let store = this.props.store;

    if (store.ENIGMA_ROTOR_POSITION_ONE) {
      store.ENIGMA_ROTOR_POSITION_ONE.setRingSettings(
        ALPHABET.indexOf(event.value) + 1
      );
    }
  };

  render() {
    let store = this.props.store;

    return (
      <>
        <div className="row mb-3 encapsulate">
          <div className="col-md-12 mb-3">
            <small>
              <code className="info">FAST ROTOR (right-hand)</code>
            </small>
            <RotorPosition
              droppedItem={store.positionOne}
              onDrop={this.onPositionOneDrop}
              store={store}
              position={1}
            />
          </div>
          {store.positionOne ? (
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
                      value: store.ENIGMA_ROTOR_POSITION_ONE
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_ONE.ringSettings
                          )
                        : null,
                      label: store.ENIGMA_ROTOR_POSITION_ONE
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_ONE.ringSettings
                          )
                        : null
                    }
                  ]}
                  value={[
                    {
                      value: store.ENIGMA_ROTOR_POSITION_ONE
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_ONE.ringSettings
                          )
                        : null,
                      label: store.ENIGMA_ROTOR_POSITION_ONE
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_ONE.ringSettings
                          )
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
                      value: store.ENIGMA_ROTOR_POSITION_ONE
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_ONE.groundSettings
                          )
                        : null,
                      label: store.ENIGMA_ROTOR_POSITION_ONE
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_ONE.groundSettings
                          )
                        : null
                    }
                  ]}
                  value={[
                    {
                      value: store.ENIGMA_ROTOR_POSITION_ONE
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_ONE.groundSettings
                          )
                        : null,
                      label: store.ENIGMA_ROTOR_POSITION_ONE
                        ? store.getLetterByNumber(
                            store.ENIGMA_ROTOR_POSITION_ONE.groundSettings
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
