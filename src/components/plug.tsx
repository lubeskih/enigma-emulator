// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store";
import { element } from "prop-types";

interface IProps {
  letter: string;
  store: Store;
  // clicked: false;
}

interface IState {
  clicked: boolean;
}

@observer
export class Plug extends Component<IProps, IState> {
  private letter: string;

  constructor(props: IProps) {
    super(props);

    this.letter = this.props.letter;
    this.state = { clicked: false };
  }

  onClick = (event: any) => {
    this.props.store.plugboard.flow(event.target.id);

    if (
      this.state.clicked &&
      this.props.store.plugboard.getPlug(event.target.id) === event.target.id
    ) {
      this.setState({ clicked: false });
      return null;
    }

    this.setState({ clicked: true });
  };

  render() {
    return (
      <div className="plug">
        {" "}
        <span>{this.letter}</span>
        <div
          title={"plug-" + this.letter}
          id={this.letter}
          onClick={this.onClick}
          className={
            this.state.clicked ? "oval noselect clicked" : "oval noselect"
          }
        />
        {/* <svg width="500" height="500">
          <line x1="50" y1="50" x2="350" y2="50" stroke="red" />
        </svg> */}
      </div>
    );
  }
}
