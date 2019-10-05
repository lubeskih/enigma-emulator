import React from "react";
import ReactDOM from "react-dom";
import Enigma from "./enigma";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Enigma />, document.getElementById("root"));

function detectmob() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    if (
      !window.confirm(
        "My poor script has detected that you may be using a mobile device (sorry if not) to view this page. Keep in mind that the emulator does not work on mobile devices.\n\nCANCEL - will redirect you to to your previous visited page\nOK - will dismiss this message and let you view the site"
      )
    ) {
      history.back();
    }
  }
}

serviceWorker.unregister();
detectmob();
