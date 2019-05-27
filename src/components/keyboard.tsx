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
  THIRD_ROW_LETTERS,
  EN_ETW,
  EN_R1_W,
  EN_R1_N,
  EN_R1_T
} from "../constants";

interface IProps {
  store: Store;
}

const ew = new Wheel(EN_ETW);
const r1 = new Rotor(EN_R1_W, EN_R1_N, EN_R1_T);

@observer
export class Keyboard extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  private handleClick = (e: any) => {
    const plugboardLetter = this.props.store.plugboard.getPlug(e.target.name); // after plugboard
    const entryLetter = ew.wiringIndexOf(plugboardLetter);

    console.log(`\n`);
    console.log("##########################################");
    console.log(
      "YOU PRESSED:",
      `>> ${plugboardLetter} <<`,
      "WHICH MAPS TO POSITION",
      `>> ${entryLetter} <<`
    );

    console.log("CURRENT OFFSET IS:", r1.offset);
    console.log(">>>>>>>>>>>>>>>> STEPPING <<<<<<<<<<<<<<<<");
    const contact = r1.step(entryLetter);
    console.log("NEW OFFSET:", r1.offset);

    console.log(
      "CURRENT FROM POSITION",
      `>> ${entryLetter} <<`,
      "ENTERS CONTACT",
      `>> ${contact} <<`
    );

    console.log(
      "CONTACT",
      `>> ${contact} <<`,
      "EXITS THE ROTOR AS:",
      `>> ${r1.getRotorWiring(contact)} <<`
    );
    console.log("##########################################");
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
