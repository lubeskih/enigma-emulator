// Libraries
import React, { Component } from "react";

// Store
import { Store } from "../../store";

// Selects
import { EnigmaM3FastRotor } from "./fast-rotor";
import { EnigmaM3MiddleRotor } from "./middle-rotor";
import { EnigmaM3SlowRotor } from "./slow-rotor";
import { EnigmaM3Reflector } from "./reflector";

interface IProps {
  store: Store;
}

export class EnigmaModelM3Settings extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const store = this.props.store;

    return (
      <>
        <EnigmaM3FastRotor store={store} />
        <EnigmaM3MiddleRotor store={store} />
        <EnigmaM3SlowRotor store={store} />
        <EnigmaM3Reflector store={store} />
      </>
    );
  }
}
