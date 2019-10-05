// Libraries
import { observer } from "mobx-react";
import React, { Component } from "react";

// Store
import { Button } from "react-bootstrap";
import { Store } from "../store";

// Internal
import "./keyboard.css";

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
            {this.props.store.settingsAreLocked ? (
              <code className="note gray">
                Hint: you can click the buttons or use your keyboard.
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
              style={{
                backgroundColor:
                  this.props.store.lastClickedLetter === letter
                    ? "#2b303b"
                    : "white",
                color:
                  this.props.store.lastClickedLetter === letter
                    ? "white"
                    : "black"
              }}
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
              style={{
                backgroundColor:
                  this.props.store.lastClickedLetter === letter
                    ? "#2b303b"
                    : "white",
                color:
                  this.props.store.lastClickedLetter === letter
                    ? "white"
                    : "black"
              }}
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
              style={{
                backgroundColor:
                  this.props.store.lastClickedLetter === letter
                    ? "#2b303b"
                    : "white",
                color:
                  this.props.store.lastClickedLetter === letter
                    ? "white"
                    : "black"
              }}
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
