// Libraries
import React, { Component } from "react";
// import { observer } from "mobx-react";

// Store
import { Store } from "../../store";

// Selects
// import { EnigmaM3FastRotor } from "./fast-rotor";

interface IProps {
  store: Store;
}

export class EnigmaModelM3Settings extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    let store = this.props.store;

    return <>rotors</>;
  }
}
