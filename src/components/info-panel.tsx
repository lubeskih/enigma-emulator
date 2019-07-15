// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import { Modal } from "react-bootstrap";

interface IState {
  show: boolean;
}

@observer
export class InfoPanel extends Component<{}, IState> {
  constructor() {
    super({});
    this.state = { show: false };
  }

  render() {
    return (
      <>
        <a onClick={() => this.setState({ show: true })} href="#">
          What am I looking at?
        </a>
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Enigma Machine Simulator - Info Panel
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
