// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import { Wheel, Rotor } from "../enigma-parts/wheel";

// Store
import { Store } from "../store";
import { Button } from "react-bootstrap";

// CONSTANTS
import {
  FIRST_ROW_LETTERS,
  SECOND_ROW_LETTERS,
  THIRD_ROW_LETTERS
} from "../constants";

interface IProps {
  store: Store;
}

@observer
export class Keyboard extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  private handleClick = (e: any) => {
    // console.log(
    //   "Keyboard clicked: ",
    //   this.props.store.plugboard.getPlug(e.target.name)
    // );

    const phase1 = this.props.store.plugboard.getPlug(e.target.name);

    const ew = new Wheel("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    const currentEntersAtPosition = ew.wiringIndexOf(phase1);
    console.log(
      "Current enters the ENTRY WHEEL and exits from position:",
      currentEntersAtPosition,
      ew.wiring[currentEntersAtPosition]
    );

    const r1 = new Rotor("EKMFLGDQVZNTOWYHXUSPAIBRCJ", "Y", "Q");

    console.log(
      "Current enters ROTOR 1 at position:",
      r1.getRotorWiring(currentEntersAtPosition)
    );
    console.log(
      "Current exits ROTOR 1 at position:",
      r1.wiring[currentEntersAtPosition]
    );

    // console.log(
    //   "Enters rotor 1 at: ",
    //   r1.getRotorWiring(currentEntersAtPosition),
    //   "Exits rotor 1 at:",
    //   r1.wiring[currentEntersAtPosition]
    // );

    let p = r1.wiring[currentEntersAtPosition];

    // const r2 = new Rotor("AJDKSIRUXBLHWTMCQGZNPYFVOE", "M", "E");
    // const r3 = new Rotor("BDFHJLCPRTXVZNYEIWGAKMUSQO", "D", "V");
  };

  render() {
    return (
      <div className="keyboard noselect">
        <p>
          Keyboard{" "}
          <span>
            {this.props.store.plugboard.excessPlug ? (
              <code className="note">
                A plug is wired but does not point to other plug. Keyboard
                disabled.
              </code>
            ) : null}
          </span>
        </p>
        <hr />

        <div className="first-row-letters">
          {FIRST_ROW_LETTERS.map(letter => (
            <Button
              id={"keyboard-" + letter}
              onClick={(e: any) => this.handleClick(e)}
              variant="link"
              key={letter}
              name={letter}
              disabled={this.props.store.plugboard.excessPlug ? true : false}
            >
              {" "}
              {letter}
            </Button>
          ))}
        </div>
        <div className="second-row-letters">
          {SECOND_ROW_LETTERS.map(letter => (
            <Button
              id={"keyboard-" + letter}
              onClick={(e: any) => this.handleClick(e)}
              variant="link"
              key={letter}
              name={letter}
              disabled={this.props.store.plugboard.excessPlug ? true : false}
            >
              {" "}
              {letter}
            </Button>
          ))}
        </div>
        <div className="third-row-letters">
          {THIRD_ROW_LETTERS.map(letter => (
            <Button
              id={"keyboard-" + letter}
              onClick={(e: any) => this.handleClick(e)}
              variant="link"
              key={letter}
              name={letter}
              className="button"
              disabled={this.props.store.plugboard.excessPlug ? true : false}
            >
              {" "}
              {letter}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}
