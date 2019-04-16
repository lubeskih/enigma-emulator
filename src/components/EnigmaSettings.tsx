// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store/Store";

// Components
import { Keyboard } from "./Keyboard";
import { Plugboard } from "./Plugboard";
import { Lamps } from "./Lamps";

interface IProps {
  store: Store;
}

@observer
export class EnigmaSettings extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const store = this.props.store;
    return (
      <div className="preview">
        <span>Lamps</span>
        <hr />
        <Lamps store={store} />
        <span>Keyboard</span>
        <hr />
        <Keyboard store={store} />
        <span>Steckerbrett</span>
        <hr />
        <Plugboard store={store} />
      </div>
    );
  }
}
