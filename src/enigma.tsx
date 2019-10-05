// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

// Internal
import "./enigma.css";

// Style
import "bootstrap/dist/css/bootstrap.css";

// Components
import { Keyboard } from "./components/keyboard";
import { Plugboard } from "./components/enigma-plugboard/plugboard";
import { Lamps } from "./components/enigma-lamps/lamps";
import { EnigmaSettings } from "./components/settings";
import { CipherLog } from "./components/cipher-log";
import { ALPHABET } from "./constants";

// Store
import { Store } from "./store";
const store = new Store();

document.addEventListener("keypress", logKey);

function logKey(e: any) {
  const letter: string = e.key.toUpperCase();

  if (
    ALPHABET.includes(letter) &&
    store.settingsAreLocked &&
    !store.plugboard.excessPlug
  ) {
    store.cipher(letter);
  } else {
    return null;
  }
}

@observer
class Enigma extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <DndProvider backend={HTML5Backend}>
                <EnigmaSettings store={store} />
              </DndProvider>
            </div>
            <div className="col-md-8 mt-5 enigma">
              <Lamps store={store} />
              <Keyboard store={store} />
              <Plugboard store={store} />
              <CipherLog store={store} />

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
          </div>
          <hr className="mt-5"></hr>
          <div className="row"></div>
          <div
            className={store.settingsAreLocked ? "row mt-5 mb-2" : "row mb-2"}
            style={{ fontFamily: "monospace", textAlign: "center" }}
          >
            <div className="col-md-12">
              <a
                target="_blank"
                href="https://github.com/lubeskih/enigma-emulator/blob/master/docs/EOFM.md"
              >
                Enigma Operator's Field Manual
              </a>
              <br></br>
              <a
                target="_blank"
                href="https://github.com/lubeskih/enigma-emulator"
              >
                REPOSITORY
              </a>{" "}
              <a
                style={{
                  backgroundColor: "#2b303b",
                  color: "white",
                  padding: "1px 5px 1px 5px"
                }}
                target="_blank"
                href="https://lh.mk"
              >
                lh.mk
              </a>{" "}
              <br></br>
              <span
                style={{
                  padding: "3px 3px 3px 3px",
                  color: "#555"
                }}
              >
                Royal Flags Wave Kings Above
              </span>{" "}
              <br></br>
              <span
                style={{
                  padding: "3px 3px 3px 3px",
                  color: "#555"
                }}
              >
                build: b6d2376
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Enigma;
