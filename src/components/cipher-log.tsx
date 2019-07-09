// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store";
import { Collapse } from "react-bootstrap";

interface IProps {
  store: Store;
}

@observer
export class CipherLog extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Collapse in={this.props.store.lockSettings}>
          <div id="cipher-log" className="row mt-3">
            <div className="col-md-6">
              <h5>Input</h5>
              {/* <hr /> */}
              <div>
                <div className="card card-body mb-5">
                  {this.props.store.INPUT}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5>Output</h5>
              {/* <hr /> */}
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
