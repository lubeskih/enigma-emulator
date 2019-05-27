// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import { ALPHABET } from "../constants";

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

@observer
export class Settings extends Component<IProps, {}> {
  letterSettings = ALPHABET.map(letter => ({ value: letter, label: letter }));

  constructor(props: IProps) {
    super(props);
  }

  onEnigmaTypeSelect = (event: any) => {
    console.log(event.value);
    this.props.store.enigmaType = event.value;
  };

  render() {
    return (
      <div className="settings">
        <p>Settings</p>
        <hr />
        <div className="row mb-3">
          <div className="col-md-12 mb-3">
            <Select
              onChange={this.onEnigmaTypeSelect}
              className="enigma-type"
              options={options}
              placeholder="Choose Enigma model ..."
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12 mb-3">
            <Select
              className="enigma-type"
              placeholder="Choose rotor ..."
              options={rotorOptions}
            />
          </div>
          <div className="col-md-6">
            <Select className="enigma-type" options={this.letterSettings} />
          </div>
          <div className="col-md-6">
            <Select className="enigma-type" options={this.letterSettings} />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12 mb-3">
            <Select
              placeholder="Choose rotor ..."
              className="enigma-type"
              options={rotorOptions}
            />
          </div>
          <div className="col-md-6">
            <Select className="enigma-type" options={this.letterSettings} />
          </div>
          <div className="col-md-6">
            <Select className="enigma-type" options={this.letterSettings} />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12 mb-3">
            <Select
              placeholder="Choose rotor ..."
              className="enigma-type"
              options={rotorOptions}
            />
          </div>
          <div className="col-md-6">
            <Select className="enigma-type" options={this.letterSettings} />
          </div>
          <div className="col-md-6">
            <Select className="enigma-type" options={this.letterSettings} />
          </div>
        </div>
        <div className="row mb-4">
          <div placeholder="Choose rotor ..." className="col-md-12 mb-3">
            <Select className="enigma-type" options={rotorOptions} />
          </div>
          <div className="col-md-6">
            <Select className="enigma-type" options={this.letterSettings} />
          </div>
          <div className="col-md-6">
            <Select className="enigma-type" options={this.letterSettings} />
          </div>
        </div>
        <Select
          onChange={this.onEnigmaTypeSelect}
          className="enigma-type"
          options={options}
          placeholder="
          Umkerwalze ..."
        />
      </div>
    );
  }
}

{
  /* <Select
isDisabled={this.props.store.enigmaType ? false : true}
className="enigma-rotor-type"
options={rotorOptions}
defaultValue={rotorOptions[0]}
/>
<Select
isDisabled={this.props.store.enigmaType ? false : true}
className="enigma-rotor-type"
options={rotorOptions}
defaultValue={rotorOptions[1]}
/>
<Select
isDisabled={this.props.store.enigmaType ? false : true}
className="enigma-rotor-type"
options={rotorOptions}
defaultValue={rotorOptions[2]}
/> */
}
