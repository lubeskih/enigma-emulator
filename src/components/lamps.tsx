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
      <div className="lamps">
        <span>Lamps</span> <hr />
        {ALPHABET.map(letter => (
          <Lamp key={letter} store={this.props.store} letter={letter} />
        ))}
      </div>
    );
  }
}
