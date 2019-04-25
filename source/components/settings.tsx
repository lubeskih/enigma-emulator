// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

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
        <p>Enigma Type:</p>
        <Select
          onChange={this.onEnigmaTypeSelect}
          className="enigma-type"
          options={options}
        />
        <p>Rotors: </p>
        <Select
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
        />
      </div>
    );
  }
}
