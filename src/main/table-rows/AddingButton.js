import "./AddingButton.scss";
import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { makeTemporaryChoiceAction } from "../../store/portfolioReducer";
import { updateAddingModalStateAction } from "../../store/modalsReducer";

export default function AddingButton(props) {
  const dispatch = useDispatch();

  function markCurrency(currencyId) {
    dispatch(makeTemporaryChoiceAction(currencyId));
    dispatch(updateAddingModalStateAction(true));
  }

  return (
    <button
      onClick={() => {
        markCurrency(props.currency.id);
      }}
      className="btn-add"
    >
      +
    </button>
  );
}
