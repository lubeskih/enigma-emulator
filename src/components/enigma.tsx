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
export class Enigma extends Component<IProps, {}> {
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
        <p>
          Steckerbrett{" "}
          <span>
            {" "}
            {this.props.store.plugboard.orphanPlug ? (
              <code className="note">
                A plug is wired but does not point to other plug. Keyboard
                disabled.
              </code>
            ) : null}
          </span>
        </p>
        <hr />
        <Plugboard store={store} />
      </div>
    );
  }
}
