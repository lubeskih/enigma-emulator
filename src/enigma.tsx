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
import { CipherLog } from "./components/cipher-log";

// Store
import { Store } from "./store";
const store = new Store();

class Enigma extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5 enigma">
            <Lamps store={store} />
            <Keyboard store={store} />
            <Plugboard store={store} />
          </div>
          <div className="col-md-4 mt-5">
            <Settings store={store} />
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
