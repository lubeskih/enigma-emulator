// Libraries
import React, { Component } from "react";

// Style
import "./app.css";
import "bootstrap/dist/css/bootstrap.css";

// Components
import { Enigma } from "./components/enigma";

// Store
import { Store } from "./store/store";
const store = new Store();

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5">
            <Enigma store={store} />
          </div>
          <div className="col-md-4 mt-5">CURRENT FLOW GUI</div>
        </div>
      </div>
    );
  }
}

export default App;
