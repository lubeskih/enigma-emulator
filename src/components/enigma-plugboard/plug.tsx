// Libraries
import { observer } from "mobx-react";
import React, { Component } from "react";

// Store
import { Store } from "../../store";

interface IProps {
  letter: string;
  store: Store;
}

@observer
export class Plug extends Component<IProps, {}> {
  private letter: string;

  constructor(props: IProps) {
    super(props);

    this.letter = this.props.letter;
  }

  public wiredWith = (letter: string) => {
    return this.props.store.plugboard.getPlug(letter);
  };

  public onClick = (event: any) => {
    this.props.store.plugboard.flow(event.target.id);

    if (
      this.props.store.plugs.get(this.letter) &&
      this.props.store.plugboard.getPlug(event.target.id) === event.target.id
    ) {
      this.props.store.plugs.set(this.letter, false);
      return null;
    }

    this.props.store.plugs.set(this.letter, true);
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
            this.props.store.plugs.get(this.letter)
              ? "oval noselect clicked"
              : "oval noselect"
          }
        />
        <small>
          <code
            className={`plugPointer ${
              this.props.store.plugboard.excessPlug === this.letter
                ? "excess"
                : null
            }`}
          >
            [{this.wiredWith(this.letter)}]
          </code>
        </small>
      </div>
    );
  }
}
