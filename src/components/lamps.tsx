// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store";

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
        <p>Lamps</p>
        <hr />
        {ALPHABET.map(letter => (
          <div key={letter} id="letter" className="circle noselect">
            {letter}
          </div>
        ))}
      </div>
    );
  }
}
