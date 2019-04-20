// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../../store/store";

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
    this.props.store.plugboard.flow(
      event.target.id,
      event.clientX,
      event.clientY
    );

    if (
      this.state.clicked &&
      this.props.store.plugboard.getPlug(event.target.id) === event.target.id
    ) {
      this.setState({ clicked: false });
      return null;
    }

    this.setState({ clicked: true });

    console.log("COORDINATES X1:", event.clientX);
    console.log("COORDINATES Y1:", event.clientY);
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
      </div>
    );
  }
}
