import "./ModalWindow.scss";
import React from "react";

export default function ModalWindow(props) {
  return (
    <div id={props.id} className="modal">
      <div className="modal__content">
        <div
          className="modal__close"
          onClick={() =>
            document.getElementById(props.id).classList.remove("active")
          }
        ></div>
        {props.content}
      </div>
    </div>
  );
}
