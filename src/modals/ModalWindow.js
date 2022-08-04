import "./ModalWindow.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateAddingModalStateAction,
  updatePortfolioModalStateAction,
} from "../store/modalsReducer";

export default function ModalWindow(props) {
  const modalState = useSelector((state) =>
    props.id === "adding-modal"
      ? state.modals.addingModalIsOpen
      : state.modals.portfolioModalIsOpen
  );

  const dispatch = useDispatch();

  function closeModal() {
    const func =
      props.id === "adding-modal"
        ? updateAddingModalStateAction
        : updatePortfolioModalStateAction;
    dispatch(func(false));
  }

  return (
    <div id={props.id} className={modalState ? "modal active" : "modal"}>
      <div className="modal__content">
        <div
          className="modal__close"
          onClick={() => closeModal(props.id)}
        ></div>
        {props.content}
      </div>
    </div>
  );
}
