// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store/Store";
// import { Button } from "react-bootstrap";

interface IProps {
  letter: string;
  store: Store;
}

@observer
export class Plug extends Component<IProps, {}> {
  private letter: string;
  // private mappedTo: string | null = null;

  constructor(props: IProps) {
    super(props);

    this.letter = this.props.letter;
  }

  // private handleClick = (e: any) => {
  //   // console.log(this.props.store.plugboard.getLetter(e.target.name));
  // };

  private selectPlug = (e: any) => {
    console.log(e.target.id);
  };

  render() {
    return (
      <div className="plug">
        {" "}
        {/* <div className="letter">| {this.letter} |</div> */}
        <div
          id={this.letter}
          onClick={this.selectPlug}
          className="circle noselect"
        >
          {this.letter}
        </div>
      </div>
    );
  }
}
