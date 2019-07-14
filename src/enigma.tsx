// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Style
import "./enigma.css";
import "bootstrap/dist/css/bootstrap.css";

// Components
import { Keyboard } from "./components/keyboard";
import { Plugboard } from "./components/plugboard";
import { Lamps } from "./components/lamps";
import { Settings } from "./components/settings";
import { CipherLog } from "./components/cipher-log";
import { InfoPanel } from "./components/info-panel";

// Store
import { Store } from "./store";
const store = new Store();

@observer
class Enigma extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5 enigma">
            <Lamps store={store} />
            <Keyboard store={store} />
            <Plugboard store={store} />

            {store.enigmaType === "M4" ? (
              <div className="m4-note mt-5">
                NOTE: You are using the{" "}
                <span style={{ textDecoration: "underline" }}>
                  Enigma model M4
                </span>{" "}
                which introduces a forth rotor which is{" "}
                <span style={{ textDecoration: "underline" }}>static</span>.
              </div>
            ) : null}
          </div>
          <div className="col-md-4 mt-5">
            <Settings store={store} />
          </div>
        </div>
        <div>
          <CipherLog store={store} />
        </div>
        {store.lockSettings === false ? (
          <div className="col-12 info-modal mt-3">
            <InfoPanel />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Enigma;
