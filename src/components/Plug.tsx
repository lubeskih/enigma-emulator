// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store/Store";

interface IProps {
  letter: string;
  store: Store;
}

// interface IState {
//   mappedTo: string;
// }

@observer
export class Plug extends Component<IProps, {}> {
  private letter: string;

  constructor(props: IProps) {
    super(props);

    this.letter = this.props.letter;
  }

  private resetAndSwap(plugName: string) {
    const pb = this.props.store.plugboard;
    const sl = this.props.store.selectedLetter;

    if (sl) {
      pb.swapLetter(sl, plugName);
      pb.swapLetter(plugName, sl);

      console.log(`Swapping ${sl} with ${plugName}`);

      // reset the "selected letter" holder
      this.props.store.selectedLetter = null;

      return null;
    }

    return null;
  }

  private selectPlug = (e: any) => {
    const plugName = e.target.id;
    const pb = this.props.store.plugboard;
    const sl = this.props.store.selectedLetter;

    // If a plug was swapped, but is clicked again
    // Reset the swapped plugs to their initial value
    if (pb.getLetter(plugName) !== plugName) {
      pb.resetLetter(plugName);
      return this.resetAndSwap(plugName);
    }

    // If a plug was clicked, the next clicked
    // plug will be replaced with the first.
    if (sl) {
      // if a plug was already clicked, swap with the second plug
      pb.swapLetter(sl, plugName);
      pb.swapLetter(plugName, sl);

      console.log(`Swapping ${sl} with ${plugName}`);

      // reset the "selected letter" holder
      this.props.store.selectedLetter = null;

      return null;
    }

    this.resetAndSwap(plugName);

    // load the plugName to the "selected letter" holder
    // the next clicked plug will be swapped with the letter
    // from the "selected" plug
    console.log("Loading the plug", plugName);
    this.props.store.selectedLetter = plugName;
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
          className="oval noselect"
        />
      </div>
    );
  }
}
