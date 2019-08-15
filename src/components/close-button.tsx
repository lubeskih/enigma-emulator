import React from "react";

export default function CloseButton(props: { onClose: () => void }) {
  return (
    <div className="buttonContainer">
      <a
        title="Close Help"
        href="/"
        target="_blank"
        className="close"
        onClick={e => {
          e.preventDefault();
          props.onClose();
        }}
      ></a>
    </div>
  );
}
