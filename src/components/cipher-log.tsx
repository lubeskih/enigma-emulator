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
        <Collapse in={this.props.store.settingsAreLocked}>
          <div id="cipher-log" className="row mt-3">
            <div className="col-md-6">
              <h5>Input Log</h5>
              <div>
                <div className="card card-body mb-2">
                  {this.props.store.INPUT}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5>Output Log</h5>
              <div>
                <div className="card card-body mb-2">
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
