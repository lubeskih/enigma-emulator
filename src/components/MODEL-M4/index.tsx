// Libraries
import React, { Component } from "react";

// Store
import { Store } from "../../store";

// Selects
import { EnigmaM4FastRotor } from "./fast-rotor";
import { EnigmaM4MiddleRotor } from "./middle-rotor";
import { EnigmaM4SlowRotor } from "./slow-rotor";
import { EnigmaM4ExtraWheel } from "./extra-wheel";
import { EnigmaM4Reflector } from "./reflector";

// Selects

interface IProps {
  store: Store;
}

export class EnigmaModelM4Settings extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    let store = this.props.store;

    return (
      <>
        <EnigmaM4FastRotor store={store} />
        <EnigmaM4MiddleRotor store={store} />
        <EnigmaM4SlowRotor store={store} />
        <EnigmaM4ExtraWheel store={store} />
        <EnigmaM4Reflector store={store} />
      </>
    );
  }
}
