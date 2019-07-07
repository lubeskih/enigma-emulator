// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import { /** ALPHABET */ NUMBERS } from "../constants";

// Store
import { Store } from "../store";

interface IProps {
  rotorPositionFromRightToLeft: number;
  rotorType: string;
  rotorInfo: string;
  store: Store;
}

interface IState {
  rotorPositionFromRightToLeft: number; // Can be 1, 2, 3 or 4 - used for stacked rotors
  rotorType: string; // Can be from I to VIII
  ringSetting: number;
  groundSetting: number;
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
      rotorPositionFromRightToLeft: this.props.rotorPositionFromRightToLeft,
      rotorType: this.props.rotorType,
      ringSetting: this.props.store.stackedRotors[
        this.props.rotorPositionFromRightToLeft
      ].ringSettings,
      groundSetting: this.props.store.stackedRotors[
        this.props.rotorPositionFromRightToLeft
      ].groundSettings
    };

    this.props.store.stackedRotors[
      this.state.rotorPositionFromRightToLeft
    ].rotorPositionFromRightToLeft = this.state.rotorPositionFromRightToLeft;
  }

  onRotorTypeChange = (e: any) => {
    this.setState({ rotorType: e.value }, () => {
      this.props.store.changeStackedRotor(
        this.state.rotorPositionFromRightToLeft,
        this.state.rotorType
      );

      this.props.store.stackedRotors[
        this.state.rotorPositionFromRightToLeft
      ].rotorPositionFromRightToLeft = this.state.rotorPositionFromRightToLeft;
    });
  };

  onGroundSettingChange = (e: any) => {
    this.setState({ groundSetting: e.value }, () => {
      this.props.store.stackedRotors[
        this.state.rotorPositionFromRightToLeft
      ].setGroundSettings(e.value);
    });
  };

  onRingSettingChange = (e: any) => {
    this.setState({ ringSetting: e.value }, () => {
      this.props.store.stackedRotors[
        this.state.rotorPositionFromRightToLeft
      ].setRingSettings(e.value);
    });
  };

  render() {
    return (
      <div className="row mb-4">
        <div className="col-md-12 mb-3">
          <small>
            <code className="info">{this.props.rotorInfo}</code>
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
            <code className="info">Ringstellung</code>
          </small>
          <Select
            isDisabled={this.props.store.lockSettings}
            className="enigma-type"
            defaultValue={[
              {
                value: this.props.store.stackedRotors[
                  this.state.rotorPositionFromRightToLeft
                ].ringSettings,
                label: this.props.store.stackedRotors[
                  this.state.rotorPositionFromRightToLeft
                ].ringSettings
              }
            ]}
            options={this.letterSettings}
            onChange={this.onRingSettingChange}
          />
        </div>
        <div className="col-md-6">
          <small>
            <code className="info">Grundstellung</code>
          </small>
          <Select
            isDisabled={this.props.store.lockSettings}
            className="enigma-type"
            defaultValue={[
              {
                value: this.props.store.stackedRotors[
                  this.state.rotorPositionFromRightToLeft
                ].groundSettings,
                label: this.props.store.stackedRotors[
                  this.state.rotorPositionFromRightToLeft
                ].groundSettings
              }
            ]}
            value={[
              {
                value: this.props.store.stackedRotors[
                  this.state.rotorPositionFromRightToLeft
                ].groundSettings,
                label: this.props.store.stackedRotors[
                  this.state.rotorPositionFromRightToLeft
                ].groundSettings
              }
            ]}
            onChange={this.onGroundSettingChange}
            options={this.letterSettings}
          />
        </div>
      </div>
    );
  }
}
