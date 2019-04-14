// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store, alphabet } from "../store/Store";
// import { Button } from "react-bootstrap";

import { Plug } from "./Plug";

interface IProps {
  store: Store;
}

@observer
export class Plugboard extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    // this.props.store.plugboard.replaceLetter("A", "B");
  }

  private handleClick = (e: any) => {
    // console.log(this.props.store.plugboard.getLetter(e.target.name));
  };

  private plugs() {
    return alphabet.map(letter => (
      <Plug store={this.props.store} letter={letter}>
        {" "}
      </Plug>
    ));
  }

  render() {
    return <div className="plugboard">{this.plugs()}</div>;
  }
}
