// Libraries
import React, { Component } from "react";

// Style
import "./enigma.css";
import "bootstrap/dist/css/bootstrap.css";

// Components
import { Keyboard } from "./components/keyboard";
import { Plugboard } from "./components/plugboard";
import { Lamps } from "./components/lamps";
import { Settings } from "./components/settings";

// Store
import { Store } from "./store";
const store = new Store();

class Enigma extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5">
            <span>Settings</span>
            <hr />
            <Settings store={store} />
            <span>Lamps</span>
            <hr />
            <Lamps store={store} />
            <span>Keyboard</span>
            <hr />
            <Keyboard store={store} />
            <p>
              Steckerbrett{" "}
              <span>
                {" "}
                {store.plugboard.orphanPlug ? (
                  <code className="note">
                    A plug is wired but does not point to other plug. Keyboard
                    disabled.
                  </code>
                ) : null}
              </span>
            </p>
            <hr />
            <Plugboard store={store} />
          </div>
          <div className="col-md-4 mt-5">CURRENT FLOW GUI</div>
        </div>
      </div>
    );
  }
}

export default Enigma;
