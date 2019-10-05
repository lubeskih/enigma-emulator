// Libraries
import { observer } from "mobx-react";
import React, { Component } from "react";

// Store
import { Collapse } from "react-bootstrap";
import { Store } from "../store";

// Internal
import "./cipher-log.css";

interface IProps {
  store: Store;
}

@observer
export class CipherLog extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  // Clears Output/Input cipher logs
  public onClearLogs = (_event: any) => {
    const store = this.props.store;
    store.INPUT = "";
    store.OUTPUT = "";
  };

  render() {
    return (
      <>
        <Collapse in={this.props.store.settingsAreLocked}>
          <div className="mt-3">
            <span title="Cipher Log." className="title">
              Cipher Log
            </span>{" "}
            <div onClick={this.onClearLogs} className="clear-logs">
              <a href="#">Clear Logs</a>
            </div>
            <hr></hr>
            <div id="cipher-log" className="row mt-3">
              <div className="col-md-6">
                <span className="gray">Input Log:</span>
                <div>
                  <div className="card card-body">{this.props.store.INPUT}</div>
                </div>
              </div>
              <div className="col-md-6">
                <span className="gray">Output Log</span>
                <div>
                  <div className="card card-body">
                    {this.props.store.OUTPUT}
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </Collapse>
      </>
    );
  }
}
