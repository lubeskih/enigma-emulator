// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../../store/store";
import { Button } from "react-bootstrap";

interface IProps {
  store: Store;
}

@observer
export class Keyboard extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  private handleClick = (e: any) => {
    console.log(
      "Keyboard clicked: ",
      this.props.store.plugboard.getPlug(e.target.name)
    );
  };

  render() {
    return (
      <div className="keyboard noselect">
        <div className="first-row-letters">
          {this.props.store.firstRowLetters.map(letter => (
            <Button
              onClick={(e: any) => this.handleClick(e)}
              variant="link"
              key={letter}
              name={letter}
              disabled={this.props.store.plugboard.orphanPlug ? true : false}
            >
              {" "}
              {letter}
            </Button>
          ))}
        </div>
        <div className="second-row-letters">
          {this.props.store.secondRowLetters.map(letter => (
            <Button
              id={letter}
              onClick={(e: any) => this.handleClick(e)}
              variant="link"
              key={letter}
              name={letter}
              disabled={this.props.store.plugboard.orphanPlug ? true : false}
            >
              {" "}
              {letter}
            </Button>
          ))}
        </div>
        <div className="third-row-letters">
          {this.props.store.thirdRowLetters.map(letter => (
            <Button
              id={letter}
              onClick={(e: any) => this.handleClick(e)}
              variant="link"
              key={letter}
              name={letter}
              className="button"
              disabled={this.props.store.plugboard.orphanPlug ? true : false}
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
