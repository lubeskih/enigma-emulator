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
          <div className="row mt-3 mb-5">
            <div className="col">
              <h5>Input</h5>
              <hr />
              <div>
                <div className="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </div>
            <div className="col">
              <h5>Output</h5>
              <hr />
              <div>
                <div className="card card-body log">
                  {/* Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident. */}
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </>
    );
  }
}
