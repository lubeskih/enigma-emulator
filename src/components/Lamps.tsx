// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store, alphabet } from "../store/Store";

interface IProps {
  store: Store;
}

@observer
export class Lamps extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  private lamps() {
    return alphabet.map(letter => (
      <div key={letter} id="letter" className="circle noselect">
        {letter}
      </div>
    ));
  }

  render() {
    return <div className="lamps">{this.lamps()}</div>;
  }
}
