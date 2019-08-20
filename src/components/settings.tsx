// Libraries
import { computed } from "mobx";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";

// Internal
import {
  EIGHT_ROTOR_OPTIONS,
  ENIGMA_MODEL_OPTIONS,
  FIVE_ROTOR_OPTIONS
} from "../constants";
import DraggableRotor from "./draggable-rotor";

import { EnigmaModelM3Settings } from "./MODEL-M3";
import { EnigmaModelM4Settings } from "./MODEL-M4";
import { EnigmaModelOneSettings } from "./MODEL-ONE";

import "./settings.css";

// Store
import { Store } from "../store";

// Component properties
interface IProps {
  store: Store;
}

@observer
export class EnigmaSettings extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  // Handle change of the enigma model in use
  public onEnigmaModelChange = (event: any) => {
    const store = this.props.store;
    store.enigmaModel = event.value;
    store.resetEnigmaSettings();
  };

  render() {
    const store = this.props.store;

    return (
      <>
        <div className="settings">
          <span
            title="Machine Settings. Choose and setup an Enigma machine."
            className="noselect"
          >
            Maschineneinstellungen
          </span>
          <hr />
          <div className="row mb-2">
            <div className="col-md-12 mb-2">
              <small>
                <code className="setting-title">ENIGMA MODEL</code>
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
                defaultValue={ENIGMA_MODEL_OPTIONS[0]}
                options={ENIGMA_MODEL_OPTIONS}
                onChange={this.onEnigmaModelChange}
              />
            </div>
          </div>
          <RenderRotors store={store} />
          <RenderEnigmaModel store={store} />
        </div>
      </>
    );
  }
}

@observer
class RenderEnigmaModel extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  @computed get WhichEnigmaModel() {
    const store = this.props.store;

    switch (store.enigmaModel) {
      case "I":
        return <EnigmaModelOneSettings store={store} />;
      case "M3":
        return <EnigmaModelM3Settings store={store} />;
      case "M4":
        return <EnigmaModelM4Settings store={store} />;
      default:
        return null;
    }
  }

  render() {
    const store = this.props.store;

    return (
      <>
        {this.WhichEnigmaModel}
        <RenderLockCheckbox store={store} />
      </>
    );
  }
}

@observer
class RenderLockCheckbox extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  // Handle resetting the Enigma settings
  onResetSettingsClick = (_e: any) => {
    const store = this.props.store;
    store.resetEnigmaSettings();
  };

  // Handle locking / unlocking the settings
  onSettingsLock = (_e: any) => {
    const store = this.props.store;

    store.lastLamp = "";
    store.lastClickedLetter = "";

    store.settingsAreLocked = !this.props.store.settingsAreLocked;
  };

  render() {
    const store = this.props.store;

    return (
      <Form>
        <div key="custom-checkbox" className="settings-are-locked mb-3">
          <Form.Check
            disabled={
              !store.rotorDropPositionOne ||
              !store.rotorDropPositionTwo ||
              !store.rotorDropPositionThree
            }
            custom
            checked={store.settingsAreLocked}
            type="checkbox"
            id="custom-checkbox"
            label={
              store.settingsAreLocked ? "Unlock settings" : "Lock settings"
            }
            onChange={this.onSettingsLock}
          />

          {store.settingsAreLocked === false ? (
            <div onClick={this.onResetSettingsClick} className="reset-settings">
              <a href="#">Reset settings</a>
            </div>
          ) : null}
        </div>
      </Form>
    );
  }
}

interface IRenderRotors {
  store: Store;
}

@observer
class RenderRotors extends React.Component<IRenderRotors, {}> {
  constructor(props: IRenderRotors) {
    super(props);
  }

  render() {
    const store = this.props.store;

    return (
      <div className="row mb-2">
        <div className="col-md-12 mb-2">
          <small>
            <code className="setting-title">AVAILABLE ROTORS</code>
          </small>
          <div className="available-rotors">
            {store.enigmaModel === "I" ? (
              <>
                {FIVE_ROTOR_OPTIONS.map(rotor => (
                  <DraggableRotor
                    key={rotor.id}
                    store={store}
                    id={rotor.id}
                    name={rotor.name}
                  />
                ))}
              </>
            ) : (
              <>
                {EIGHT_ROTOR_OPTIONS.map(rotor => (
                  <DraggableRotor
                    key={rotor.id}
                    store={store}
                    id={rotor.id}
                    name={rotor.name}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
