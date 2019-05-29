// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import { Form } from "react-bootstrap";

import { /** ALPHABET */ NUMBERS } from "../constants";

// Store
import { Store } from "../store";

interface IProps {
  store: Store;
}

const options = [{ value: "I", label: "Enigma I (Reichswehr / Wehrmacht)" }];

const rotorOptions = [
  { value: "I", label: "Rotor I" },
  { value: "II", label: "Rotor II" },
  { value: "III", label: "Rotor III" },
  { value: "IV", label: "Rotor IV" },
  { value: "V", label: "Rotor V" }
];

const UKWOptions = [
  { value: "UKW-B", label: "UKW-B" },
  { value: "UKW-C", label: "UKW-C" }
];

@observer
export class Settings extends Component<IProps, {}> {
  // letterSettings = ALPHABET.map(letter => ({ value: letter, label: letter }));
  letterSettings = NUMBERS.map(letter => ({ value: letter, label: letter }));

  constructor(props: IProps) {
    super(props);
  }

  onEnigmaTypeSelect = (event: any) => {
    console.log(event.value);
    this.props.store.enigmaType = event.value;
  };

  onSettingsLock = (event: any) => {
    this.props.store.lockSettings = !this.props.store.lockSettings;
  };

  render() {
    return (
      <div className="settings">
        <span className="codeInfo">Settings</span>
        <hr />
        <div className="row mb-3">
          <div className="col-md-12 mb-3">
            <small>
              <code className="codeInfo">Enigma model</code>
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
        {/* ############# FAST ROTOR START ############# */}
        <div className="row mb-4">
          <div className="col-md-12 mb-3">
            <small>
              <code className="codeInfo">FAST ROTOR (right-hand wheel)</code>
            </small>
            <Select
              isDisabled={this.props.store.lockSettings}
              className="enigma-type"
              defaultValue={rotorOptions[2]}
              options={rotorOptions}
            />
          </div>
          <div className="col-md-6">
            <small>
              <code className="codeInfo">Ringstellung</code>
            </small>
            <Select
              isDisabled={this.props.store.lockSettings}
              className="enigma-type"
              defaultValue={this.letterSettings[0]}
              options={this.letterSettings}
            />
          </div>
          <div className="col-md-6">
            <small>
              <code className="codeInfo">Grundstellung</code>
            </small>
            <Select
              isDisabled={this.props.store.lockSettings}
              className="enigma-type"
              defaultValue={this.letterSettings[0]}
              options={this.letterSettings}
            />
          </div>
        </div>
        {/* ############# FAST ROTOR END ############# */}
        {/* ########################################## */}
        {/* ############# MIDDLE ROTOR START ######### */}
        <div className="row mb-4">
          <div className="col-md-12 mb-3">
            <small>
              <code className="codeInfo">MIDDLE ROTOR</code>
            </small>
            <Select
              isDisabled={this.props.store.lockSettings}
              className="enigma-type"
              defaultValue={rotorOptions[1]}
              options={rotorOptions}
            />
          </div>
          <div className="col-md-6">
            <small>
              <code className="codeInfo">Ringstellung</code>
            </small>
            <Select
              isDisabled={this.props.store.lockSettings}
              className="enigma-type"
              defaultValue={this.letterSettings[0]}
              options={this.letterSettings}
            />
          </div>
          <div className="col-md-6">
            <small>
              <code className="codeInfo">Grundstellung</code>
            </small>
            <Select
              isDisabled={this.props.store.lockSettings}
              className="enigma-type"
              defaultValue={this.letterSettings[0]}
              options={this.letterSettings}
            />
          </div>
        </div>
        {/* ############# MIDDLE ROTOR END ########### */}
        {/* ########################################## */}
        {/* ############# SLOW ROTOR START ########### */}
        <div className="row mb-4">
          <div className="col-md-12 mb-3">
            <small>
              <code className="codeInfo">SLOW ROTOR (left-hand wheel)</code>
            </small>
            <Select
              isDisabled={this.props.store.lockSettings}
              className="enigma-type"
              defaultValue={rotorOptions[0]}
              options={rotorOptions}
            />
          </div>
          <div className="col-md-6">
            <small>
              <code className="codeInfo">Ringstellung</code>
            </small>
            <Select
              isDisabled={this.props.store.lockSettings}
              className="enigma-type"
              defaultValue={this.letterSettings[0]}
              options={this.letterSettings}
            />
          </div>
          <div className="col-md-6">
            <small>
              <code className="codeInfo">Grundstellung</code>
            </small>
            <Select
              isDisabled={this.props.store.lockSettings}
              className="enigma-type"
              defaultValue={this.letterSettings[0]}
              options={this.letterSettings}
            />
          </div>
        </div>
        {/* ############# SLOW ROTOR END ############# */}
        {/* ########################################## */}
        <small>
          <code className="codeInfo">Umkerwalze</code>
        </small>
        <Select
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
