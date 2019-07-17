// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

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
    this.props.store.cipher(e.target.name);
  };

  render() {
    return (
      <div className="keyboard noselect">
        <p>
          <span
            title="Keyboard. Click the keys with your mouse or use your keyboard."
            className="title"
          >
            Tastatur
          </span>{" "}
          <span>
            {this.props.store.settingsAreLocked ? null : (
              <code className="note gray">
                Configure and lock the settings before using the keyboard.
              </code>
            )}
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
              disabled={
                this.props.store.plugboard.excessPlug ||
                !this.props.store.settingsAreLocked
                  ? true
                  : false
              }
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
              disabled={
                this.props.store.plugboard.excessPlug ||
                !this.props.store.settingsAreLocked
                  ? true
                  : false
              }
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
              disabled={
                this.props.store.plugboard.excessPlug ||
                !this.props.store.settingsAreLocked
                  ? true
                  : false
              }
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
