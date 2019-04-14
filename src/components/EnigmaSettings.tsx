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
        <Plugboard store={store} />
        <hr />
        <Keyboard store={store} />
      </div>
    );
  }
}
