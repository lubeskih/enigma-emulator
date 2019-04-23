// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../../store/store";
import { Form } from "react-bootstrap";

interface IProps {
  store: Store;
}

@observer
export class Settings extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  onEnigmaTypeSelect = (event: any) => {
    console.log(event.target.value);
    this.props.store.enigmaType = event.target.value;
  };

  render() {
    return (
      <div className="settings">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Enigma type:</Form.Label>
          <Form.Control
            defaultValue={this.props.store.enigmaType}
            onChange={this.onEnigmaTypeSelect}
            as="select"
          >
            <option value="M3">M3 (Navy / Army / Airforce)</option>
            <option value="M4">M4 (Navy)</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Walzenlage:</Form.Label>
          <Form.Control defaultValue={this.props.store.rotorOne} as="select">
            <option disabled={this.props.store.option1}>I</option>
            <option>II</option>
            <option>III</option>
            <option>IV</option>
            <option>V</option>
            <option>VI</option>
            <option>VII</option>
            <option>VIII</option>
          </Form.Control>
          <Form.Control defaultValue={this.props.store.rotorTwo} as="select">
            <option>I</option>
            <option>II</option>
            <option>III</option>
            <option>IV</option>
            <option>V</option>
            <option>VI</option>
            <option>VII</option>
            <option>VIII</option>
          </Form.Control>
          <Form.Control defaultValue={this.props.store.rotorThree} as="select">
            <option>I</option>
            <option>II</option>
            <option>III</option>
            <option>IV</option>
            <option>V</option>
            <option>VI</option>
            <option>VII</option>
            <option>VIII</option>
          </Form.Control>
          {this.props.store.enigmaType === "M4" ? (
            <Form.Control defaultValue={this.props.store.rotorFour} as="select">
              <option>I</option>
              <option>II</option>
              <option>III</option>
              <option>IV</option>
              <option>V</option>
              <option>VI</option>
              <option>VII</option>
              <option>VIII</option>
            </Form.Control>
          ) : null}
        </Form.Group>
      </div>
    );
  }
}
