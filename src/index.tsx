import React from "react";
import ReactDOM from "react-dom";
import Enigma from "./enigma";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Enigma />, document.getElementById("root"));

serviceWorker.unregister();
