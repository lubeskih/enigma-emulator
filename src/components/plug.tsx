// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store";

interface IProps {
  letter: string;
  store: Store;
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

  wiredWith = (letter: string) => {
    return this.props.store.plugboard.getPlug(letter);
  };

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
          id={this.letter}
          onClick={this.onClick}
          className={
            this.state.clicked ? "oval noselect clicked" : "oval noselect"
          }
        />
        <small>
          <code className="info">{this.wiredWith(this.letter)}</code>
        </small>
      </div>
    );
  }
}
