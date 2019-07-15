// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import Select from "react-select";

import { NUMBERS, ALPHABET } from "../constants";

// Store
import { Store } from "../store";

interface IProps {
  rotorInfo: string;
  store: Store;
}

interface IState {
  ringSetting: number;
  groundSetting: number;
}

const m4ExtraWheel = [
  { value: "BETA", label: "Beta (β)" },
  { value: "GAMMA", label: "Gamma (γ)" }
];

@observer
export class ExtraWheel extends Component<IProps, IState> {
  letterSettings = ALPHABET.map(letter => ({ value: letter, label: letter }));

  constructor(props: IProps) {
    super(props);

    this.state = {
      ringSetting: this.props.store.EXTRA_WHEEL.ringSettings,
      groundSetting: this.props.store.EXTRA_WHEEL.groundSettings
    };
  }

  onEnigmaExtraWheelSelect = (e: any) => {
    let extraWheel = this.props.store.getExtraWheelObjectByName(e.value);

    if (extraWheel) {
      this.props.store.EXTRA_WHEEL = extraWheel;
    }
  };

  onGroundSettingChange = (e: any) => {
    let val: number = 0;

    if (this.props.store.enigmaType === "I") {
      val = e.value;
    } else {
      val = ALPHABET.indexOf(e.value) + 1;
    }

    this.setState({ groundSetting: val }, () => {
      this.props.store.EXTRA_WHEEL.setGroundSettings(val);
    });
  };

  onRingSettingChange = (e: any) => {
    let val: number = 0;

    if (this.props.store.enigmaType === "I") {
      val = e.value;
    } else {
      val = ALPHABET.indexOf(e.value) + 1;
    }

    this.setState({ ringSetting: val }, () => {
      this.props.store.EXTRA_WHEEL.setRingSettings(val);
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
            className="enigma-type"
            defaultValue={m4ExtraWheel[0]}
            options={m4ExtraWheel}
            onChange={this.onEnigmaExtraWheelSelect}
          />
        </div>
        <div className="col-md-6">
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
            isDisabled={this.props.store.lockSettings}
            className="enigma-type"
            defaultValue={[
              {
                value: this.props.store.getLetterByNumber(
                  this.props.store.EXTRA_WHEEL.ringSettings
                ),
                label: this.props.store.getLetterByNumber(
                  this.props.store.EXTRA_WHEEL.ringSettings
                )
              }
            ]}
            value={[
              {
                value: this.props.store.getLetterByNumber(
                  this.props.store.EXTRA_WHEEL.ringSettings
                ),
                label: this.props.store.getLetterByNumber(
                  this.props.store.EXTRA_WHEEL.ringSettings
                )
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
            className="enigma-type"
            defaultValue={[
              {
                value: this.props.store.getLetterByNumber(
                  this.props.store.EXTRA_WHEEL.groundSettings
                ),
                label: this.props.store.getLetterByNumber(
                  this.props.store.EXTRA_WHEEL.groundSettings
                )
              }
            ]}
            value={[
              {
                value: this.props.store.getLetterByNumber(
                  this.props.store.EXTRA_WHEEL.groundSettings
                ),
                label: this.props.store.getLetterByNumber(
                  this.props.store.EXTRA_WHEEL.groundSettings
                )
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
