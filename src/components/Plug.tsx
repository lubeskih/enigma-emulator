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

interface IState {
  mappedTo: string;
}

@observer
export class Plug extends Component<IProps, IState> {
  private letter: string;
  // private mappedTo: string | null = null;

  constructor(props: IProps) {
    super(props);

    this.letter = this.props.letter;
  }

  private selectPlug = (e: any) => {
    console.log(e.target.id);

    if (this.props.store.plugboard.getLetter(e.target.id) !== e.target.id) {
      let lt = this.props.store.plugboard.getLetter(e.target.id);
      this.props.store.plugboard.replaceLetter(lt, lt);
      this.props.store.plugboard.replaceLetter(e.target.id, e.target.id);

      return null;
    }

    if (this.props.store.selectedLetter) {
      this.props.store.plugboard.replaceLetter(
        this.props.store.selectedLetter,
        e.target.id
      );
      this.props.store.plugboard.replaceLetter(
        e.target.id,
        this.props.store.selectedLetter
      );

      this.props.store.selectedLetter = null;

      return null;
    }

    this.props.store.selectedLetter = e.target.id;
    return null;
  };

  render() {
    return (
      <div className="plug">
        {" "}
        {/* <div className="letter">| {this.letter} |</div> */}
        <span>{this.letter}</span>
        <div
          id={this.letter}
          onClick={this.selectPlug}
          className="circle noselect"
        />
      </div>
    );
  }
}
