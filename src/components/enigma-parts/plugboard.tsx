// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store, alphabet } from "../../store/store";

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

  private plugs() {
    return alphabet.map(letter => (
      <Plug key={letter} store={this.props.store} letter={letter}>
        {" "}
      </Plug>
    ));
  }

  render() {
    return <div className="plugboard noselect">{this.plugs()}</div>;
  }
}
