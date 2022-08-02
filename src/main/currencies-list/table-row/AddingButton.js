import "./AddingButton.scss";
import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { makeTemporaryChoiceAction } from "../../../store/portfolioReducer";

export default function AddingButton(props) {
  const dispatch = useDispatch();

  function markCurrency(currencyId) {
    dispatch(makeTemporaryChoiceAction(currencyId));
  }

  return (
    <button
      onClick={() => {
        markCurrency(props.currency.id);
        document.getElementById("adding-modal").classList.add("active");
      }}
      className="btn-add"
    >
      +
    </button>
  );
}
