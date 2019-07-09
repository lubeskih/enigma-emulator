// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import { Form } from "react-bootstrap";

import { /** ALPHABET */ NUMBERS } from "../constants";
import { RotorSetting } from "./rotor-settings";

// Store
import { Store } from "../store";

interface IProps {
  store: Store;
}

const options = [{ value: "I", label: "Enigma I (Reichswehr / Wehrmacht)" }];

const UKWOptions = [
  { value: "UKW-B", label: "UKW-B" },
  { value: "UKW-C", label: "UKW-C" }
];

@observer
export class Settings extends Component<IProps, {}> {
  letterSettings = NUMBERS.map(letter => ({ value: letter, label: letter }));

  constructor(props: IProps) {
    super(props);
  }

  onEnigmaTypeSelect = (event: any) => {
    console.log(event.value);
    this.props.store.enigmaType = event.value;
  };

  onSettingsLock = (_e: any) => {
    this.props.store.INPUT = "";
    this.props.store.OUTPUT = "";
    this.props.store.lockSettings = !this.props.store.lockSettings;
  };

  render() {
    return (
      <div className="settings">
        <span>Settings</span>
        <hr />
        <div className="row mb-3">
          <div className="col-md-12 mb-3">
            <small>
              <code className="info">Enigma model</code>
            </small>
            <Select
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
          <RotorSetting
            rotorPositionFromRightToLeft={3} // FORTH ROTOR FROM RIGHT TO LEFT
            rotorType="IV"
            rotorInfo="FORTH ROTOR (STATIC)"
            store={this.props.store}
          />
        ) : null}
        <small>
          <code className="info">Umkerwalze</code>
        </small>
        <Select
          style={{ borderRadius: "0" }}
          isDisabled={this.props.store.lockSettings}
          onChange={this.onEnigmaTypeSelect}
          className="enigma-type"
          defaultValue={UKWOptions[0]}
          options={UKWOptions}
        />
        <hr />
        <Form>
          <div key="custom-checkbox" className="lockSettings mb-3">
            <Form.Check
              custom
              checked={this.props.store.lockSettings}
              type="checkbox"
              id="custom-checkbox"
              label="Lock settings"
              onChange={this.onSettingsLock}
            />
          </div>
        </Form>
      </div>
    );
  }
}
