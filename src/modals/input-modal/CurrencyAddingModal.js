import "./CurrencyAddingModal.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addCurrencyAction } from "../../store/portfolioReducer";
import { updateAddingModalStateAction } from "../../store/modalsReducer";

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
      const day = new Date();
      dispatch(addCurrencyAction([temporaryChoice, number, price, day]));
      localStorage.setItem(
        "selectedCurrencies",
        JSON.stringify([
          ...selectedCurrencies,
          {
            id: temporaryChoice,
            quantity: number,
            firstPrice: price,
            date: day.getTime(),
          },
        ])
      );
    }
    setInputValue("");
    dispatch(updateAddingModalStateAction(false));
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
        autoComplete="off"
      />
      <input className="adding__btn" type="submit" value="Add to portfolio" />
    </form>
  );
}
