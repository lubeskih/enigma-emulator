// Libraries
import React, { Component } from "react";
// import { observer } from "mobx-react";

// Store
import { Store } from "../../store";

// Selects
import { EnigmaOneFastRotor } from "./fast-rotor";
import { EnigmaOneMiddleRotor } from "./middle-rotor";
import { EnigmaOneSlowRotor } from "./slow-rotor";
import { EnigmaOneReflector } from "./reflector";

interface IProps {
  store: Store;
}

export class EnigmaModelOneSettings extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    let store = this.props.store;

    return (
      <>
        <EnigmaOneFastRotor store={store} />
        <EnigmaOneMiddleRotor store={store} />
        <EnigmaOneSlowRotor store={store} />
        <EnigmaOneReflector store={store} />
      </>
    );
  }
}
