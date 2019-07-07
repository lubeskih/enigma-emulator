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
  }

  render() {
    return (
      <div className="plugboard noselect">
        <span>Steckerbrett</span> <hr />
        {ALPHABET.map(letter => (
          <Plug key={letter} store={this.props.store} letter={letter} />
        ))}
      </div>
    );
  }
}
