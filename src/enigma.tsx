// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Style
import "./enigma.css";
import "bootstrap/dist/css/bootstrap.css";

// Components
import { Keyboard } from "./components/keyboard";
import { Plugboard } from "./components/enigma-plugboard/plugboard";
import { Lamps } from "./components/enigma-lamps/lamps";
import { EnigmaSettings } from "./components/settings";
import { CipherLog } from "./components/cipher-log";

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

            {store.enigmaModel === "M4" ? (
              <div className="m4-note mt-5">
                NOTE: You are using the{" "}
                <span style={{ textDecoration: "underline" }}>
                  Enigma model M4
                </span>{" "}
                which introduces an extra wheel which is{" "}
                <span style={{ textDecoration: "underline" }}>static</span>.
              </div>
            ) : null}
          </div>
          <div className="col-md-4 mt-5">
            <EnigmaSettings store={store} />
          </div>
        </div>
        <div>
          <CipherLog store={store} />
        </div>
      </div>
    );
  }
}

export default Enigma;
