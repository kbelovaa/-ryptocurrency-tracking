import "./CurrencyAddingModal.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addCurrencyAction } from "../../store/portfolioReducer";

export default function CurrencyAddingModal() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const selectedCurrencies = useSelector(
    (state) => state.addedCurrencies.addedCurrencies
  );
  const temporaryChoice = useSelector(
    (state) => state.addedCurrencies.temporaryChoice
  );
  const allCurrencies = useSelector((state) => state.currencies.currencies);

  function addCurrency(e, number) {
    e.preventDefault();
    if (number > 0) {
      const price = allCurrencies.find(
        (currency) => currency.id === temporaryChoice
      ).priceUsd;
      dispatch(addCurrencyAction([temporaryChoice, number, price]));
      localStorage.setItem(
        "selectedCurrencies",
        JSON.stringify([
          ...selectedCurrencies,
          { id: temporaryChoice, quantity: number, firstPrice: price },
        ])
      );
    }
    setInputValue("");
    document.getElementById("adding-modal").classList.remove("active");
  }

  return (
    <form
      className="adding__form"
      onSubmit={(e) => addCurrency(e, Number(inputValue.replaceAll(",", ".")))}
    >
      <label className="adding__label" for="crypto-amount">
        Enter the amount of cryptocurrency
      </label>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className="adding__input"
        type="text"
        id="crypto-amount"
      />
      <input className="adding__btn" type="submit" value="Add to portfolio" />
    </form>
  );
}
