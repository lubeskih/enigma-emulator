// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store";
import { Button, Collapse } from "react-bootstrap";

interface IProps {
  store: Store;
}

interface IState {
  open: boolean;
}

@observer
export class CipherLog extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { open: false };
  }

  render() {
    const { open } = this.state;

    return (
      <>
        <Collapse in={this.props.store.lockSettings}>
          <div className="row mt-3">
            <div className="col-md-6">
              <h5>Input</h5>
              <hr />
              <div>
                <div className="card card-body mb-5">
                  {this.props.store.INPUT}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5>Output</h5>
              <hr />
              <div>
                <div className="card card-body mb-5 ">
                  {this.props.store.OUTPUT}
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </>
    );
  }
}
