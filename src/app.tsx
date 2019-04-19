// Libraries
import React, { Component } from "react";

// Style
import "./app.css";
import "bootstrap/dist/css/bootstrap.css";

// Components
import { EnigmaSettings } from "./components/enigma";

// Store
import { Store } from "./store/store";
const store = new Store();

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 mt-5">
            <EnigmaSettings store={store} />
          </div>
          <div className="col-4 mt-5">2 of 2</div>
        </div>
      </div>
    );
  }
}

export default App;