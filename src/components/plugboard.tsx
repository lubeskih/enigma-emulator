// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store";

// CONSTANTS
import { ALPHABET } from "../constants";

// Components
import { Plug } from "./plug";

interface IProps {
  store: Store;
}

@observer
export class Plugboard extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    ALPHABET.map(letter => this.props.store.plugs.set(letter, false));
  }

  render() {
    return (
      <div className="plugboard noselect">
        <span
          title="Plugboard. Used for swapping one letter with another."
          className="title"
        >
          Steckerbrett
        </span>{" "}
        <span>
          {this.props.store.plugboard.excessPlug ? (
            <code className="note">
              A plug is wired but does not point to other plug. Keyboard
              disabled.
            </code>
          ) : null}
        </span>
        <hr />
        {ALPHABET.map(letter => (
          <Plug key={letter} store={this.props.store} letter={letter} />
        ))}
      </div>
    );
  }
}
