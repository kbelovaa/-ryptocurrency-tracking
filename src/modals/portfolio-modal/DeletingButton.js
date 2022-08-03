import "./DeletingButton.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { deleteCurrencyAction } from "../../store/portfolioReducer";

export default function DeletingButton(props) {
  const dispatch = useDispatch();

  const selectedCurrencies = useSelector(
    (state) => state.addedCurrencies.addedCurrencies
  );

  function deleteCurrency(currency) {
    console.log(currency.date);
    dispatch(deleteCurrencyAction(currency));
    localStorage.setItem(
      "selectedCurrencies",
      JSON.stringify(
        selectedCurrencies.filter(
          (oneOfCurrency) => oneOfCurrency.date !== currency.date
        )
      )
    );
  }

  return (
    <button
      onClick={() => deleteCurrency(props.currency)}
      className="btn-delete"
    >
      -
    </button>
  );
}
