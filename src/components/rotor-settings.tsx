// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import { /** ALPHABET */ NUMBERS } from "../constants";

// Store
import { Store } from "../store";

interface IProps {
  rotorId: number;
  rotorType: string;
  rotorInfo: string;
  store: Store;
}

interface IState {
  rotorId: number; // Can be 1, 2, 3 or 4 - used for stacked rotors
  rotorType: string; // Can be from I to VIII
}

const rotorOptions = [
  { value: "I", label: "Rotor I" },
  { value: "II", label: "Rotor II" },
  { value: "III", label: "Rotor III" },
  { value: "IV", label: "Rotor IV" },
  { value: "V", label: "Rotor V" }
];

function convertRomanToRotorOption(roman: string): number {
  switch (roman) {
    case "I":
      return 0;
    case "II":
      return 1;
    case "III":
      return 2;
    case "IV":
      return 3;
    case "V":
      return 4;
    case "VI":
      return 5;
    case "VII":
      return 6;
    case "VIII":
      return 7;
    default:
      return 0;
  }
}

@observer
export class RotorSetting extends Component<IProps, IState> {
  letterSettings = NUMBERS.map(letter => ({ value: letter, label: letter }));

  constructor(props: IProps) {
    super(props);

    this.state = {
      rotorId: this.props.rotorId,
      rotorType: this.props.rotorType
    };
  }

  onRotorTypeChange = (e: any) => {
    this.setState({ rotorType: e.value }, () => {
      this.props.store.stackAndReplaceRotor(
        this.state.rotorId,
        this.state.rotorType
      );
      console.log(
        `Rotor at position: ${this.state.rotorId}`,
        this.props.store.stackedRotors[this.state.rotorId]
      );
    });
  };

  render() {
    return (
      <div className="row mb-4">
        <div className="col-md-12 mb-3">
          <small>
            <code className="codeInfo">{this.props.rotorInfo}</code>
          </small>
          <Select
            isDisabled={this.props.store.lockSettings}
            className="enigma-type"
            defaultValue={
              rotorOptions[convertRomanToRotorOption(this.state.rotorType)]
            }
            options={rotorOptions}
            onChange={this.onRotorTypeChange}
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
    );
  }
}
