// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store/Store";

// Components
import { Keyboard } from "./Keyboard";
import { Plugboard } from "./Plugboard";

interface IProps {
  store: Store;
}

@observer
export class EnigmaSettings extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    let store = this.props.store;

    return (
      <div className="preview">
        <hr />
        <span>Keyboard</span>
        <hr />
        <Keyboard store={store} />
        <hr />
        <span>Steckerbrett</span>
        <hr />
        <Plugboard store={store} />
        <hr />
        <hr />
      </div>
    );
  }
}
