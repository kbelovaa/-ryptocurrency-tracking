import "./DeletingButton.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { deleteCurrencyAction } from "../../store/portfolioReducer";

export default function DeletingButton(props) {
  const dispatch = useDispatch();

  const selectedCurrencies = useSelector(
    (state) => state.addedCurrencies.addedCurrencies
  );

  function deleteCurrency(currencyId) {
    dispatch(deleteCurrencyAction(currencyId));
    localStorage.setItem(
      "selectedCurrencies",
      JSON.stringify(
        selectedCurrencies.filter(
          (oneOfCurrency) => oneOfCurrency.id !== currencyId
        )
      )
    );
  }

  return (
    <button
      onClick={() => deleteCurrency(props.currencyId)}
      className="btn-delete"
    >
      -
    </button>
  );
}
