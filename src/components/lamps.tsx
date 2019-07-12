// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store";
import { Lamp } from "./lamp";

// CONSTANTS
import { ALPHABET } from "../constants";

interface IProps {
  store: Store;
}

@observer
export class Lamps extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="lamps noselect">
        <span
          title="Lamps. A lamp will light up depending on the ciphered output letter."
          className="title"
        >
          Lampen
        </span>{" "}
        <hr />
        {ALPHABET.map(letter => (
          <Lamp key={letter} store={this.props.store} letter={letter} />
        ))}
      </div>
    );
  }
}
