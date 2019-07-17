// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import { computed } from "mobx";
import Select from "react-select";
import { Form } from "react-bootstrap";

import { ENIGMA_MODEL_OPTIONS } from "../constants";
import { EnigmaModelOneSettings } from "./MODEL-ONE";
import { EnigmaModelM3Settings } from "./MODEL-M3";
import { EnigmaModelM4Settings } from "./MODEL-M4";

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
  onEnigmaModelChange = (event: any) => {
    let store = this.props.store;
    store.enigmaModel = event.value;
    store.resetEnigmaSettings();
  };

  render() {
    let store = this.props.store;

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
          <div className="row mb-3">
            <div className="col-md-12 mb-3">
              <small>
                <code className="info">Enigma model</code>
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
        </div>
        <RenderEnigmaModel store={store} />
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
    let store = this.props.store;

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
    let store = this.props.store;

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
    let store = this.props.store;
    store.resetEnigmaSettings();
  };

  // Handle locking / unlocking the settings
  onSettingsLock = (_e: any) => {
    let store = this.props.store;

    store.lastLamp = "";
    store.INPUT = "";
    store.OUTPUT = "";

    store.settingsAreLocked = !this.props.store.settingsAreLocked;
  };

  render() {
    let store = this.props.store;

    return (
      <Form>
        <div key="custom-checkbox" className="settingsAreLocked mb-3">
          <Form.Check
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
            <div onClick={this.onResetSettingsClick} className="resetSettings">
              <a href="#">Reset settings</a>
            </div>
          ) : null}
        </div>
      </Form>
    );
  }
}
