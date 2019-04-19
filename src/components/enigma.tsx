// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store/store";

// Components
import { Keyboard } from "./enigma-parts/keyboard";
import { Plugboard } from "./enigma-parts/plugboard";
import { Lamps } from "./enigma-parts/lamps";

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
