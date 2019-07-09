// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store";

interface IProps {
  letter: string;
  store: Store;
}

@observer
export class Lamp extends Component<IProps, {}> {
  private letter: string;

  constructor(props: IProps) {
    super(props);

    this.letter = this.props.letter;
  }

  render() {
    return (
      <>
        {this.props.store.lastLamp === this.letter ? (
          <div key={this.letter} id="letter" className="circle noselect light">
            {this.letter}
          </div>
        ) : (
          <div key={this.letter} id="letter" className="circle noselect">
            {this.letter}
          </div>
        )}
      </>
    );
  }
}
