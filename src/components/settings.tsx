// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import { Form } from "react-bootstrap";

import { /** ALPHABET */ NUMBERS } from "../constants";
import { RotorSetting } from "./rotor-settings";
import { ExtraWheel } from "./extra-wheel";

// Store
import { Store } from "../store";

interface IProps {
  store: Store;
}

const options = [
  { value: "I", label: "Enigma I (Heer / Luftwaffe)" },
  { value: "M3", label: "Enigma M3 (Wehrmacht)" },
  { value: "M4", label: "Enigma M4 (Kriegsmarine)" }
];

const UKWOptions = [
  { value: "UKW-A", label: "UKW-A" },
  { value: "UKW-B", label: "UKW-B" },
  { value: "UKW-C", label: "UKW-C" }
];

const UKW_M4_Options = [
  { value: "UKW-b", label: "UKW-B (THIN)" },
  { value: "UKW-c", label: "UKW-C (THIN)" }
];

@observer
export class Settings extends Component<IProps, {}> {
  letterSettings = NUMBERS.map(letter => ({ value: letter, label: letter }));

  constructor(props: IProps) {
    super(props);
  }

  onEnigmaTypeSelect = (event: any) => {
    this.props.store.enigmaType = event.value;
  };

  onSettingsLock = (_e: any) => {
    this.props.store.lastLamp = "";
    this.props.store.INPUT = "";
    this.props.store.OUTPUT = "";

    this.props.store.lockSettings = !this.props.store.lockSettings;
  };

  onResetSettingsClick = (_e: any) => {
    this.props.store.resetSettings();
  };

  onEnigmaReflectorSelect = (event: any) => {
    let reflector = this.props.store.getReflectorObjectByName(event.value);

    if (reflector) {
      this.props.store.REFLECTOR = reflector;
    }

    console.log(reflector);
  };

  render() {
    return (
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
              isDisabled={this.props.store.lockSettings}
              onChange={this.onEnigmaTypeSelect}
              defaultValue={options[0]}
              className="enigma-type"
              options={options}
            />
          </div>
        </div>
        <RotorSetting
          rotorPositionFromRightToLeft={0} // FIRST ROTOR FROM RIGHT TO LEFT
          rotorType="I"
          rotorInfo="FAST ROTOR (right-hand wheel)"
          store={this.props.store}
        />
        <RotorSetting
          rotorPositionFromRightToLeft={1} // SECOND ROTOR FROM RIGHT TO LEFT
          rotorType="II"
          rotorInfo="MIDDLE ROTOR"
          store={this.props.store}
        />
        <RotorSetting
          rotorPositionFromRightToLeft={2} // THIRD ROTOR FROM RIGHT TO LEFT
          rotorType="III"
          rotorInfo="SLOW ROTOR (left-hand wheel)"
          store={this.props.store}
        />
        {this.props.store.enigmaType === "M4" ? (
          <>
            <ExtraWheel
              rotorInfo="Extra Wheel (Zusatwalze)"
              store={this.props.store}
            />
          </>
        ) : null}
        <small>
          <code className="info">Umkehrwalze</code>
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
          style={{ borderRadius: "0" }}
          isDisabled={this.props.store.lockSettings}
          onChange={this.onEnigmaReflectorSelect}
          className="enigma-type"
          defaultValue={
            this.props.store.enigmaType === "M4"
              ? UKW_M4_Options[0]
              : UKWOptions[0]
          }
          value={
            this.props.store.enigmaType === "M4"
              ? UKW_M4_Options[0]
              : UKWOptions[0]
          }
          options={
            this.props.store.enigmaType === "M4" ? UKW_M4_Options : UKWOptions
          }
        />
        <hr />
        <Form>
          <div key="custom-checkbox" className="lockSettings mb-3">
            <Form.Check
              custom
              checked={this.props.store.lockSettings}
              type="checkbox"
              id="custom-checkbox"
              label={
                this.props.store.lockSettings
                  ? "Unlock settings"
                  : "Lock settings"
              }
              onChange={this.onSettingsLock}
            />

            {this.props.store.lockSettings === false ? (
              <div
                onClick={this.onResetSettingsClick}
                className="resetSettings"
              >
                <a href="#">Reset settings</a>
              </div>
            ) : null}
          </div>
        </Form>
      </div>
    );
  }
}
