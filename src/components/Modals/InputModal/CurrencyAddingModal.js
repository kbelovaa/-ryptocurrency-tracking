import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrencyAction } from 'Store/actions/portfolioActions';
import { updateAddingModalStateAction } from 'Store/actions/modalsActions';
import './CurrencyAddingModal.scss';

const CurrencyAddingModal = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const selectedCurrencies = useSelector((state) => state.addedCurrencies.addedCurrencies);
  const temporaryChoice = useSelector((state) => state.addedCurrencies.temporaryChoice);
  const allCurrencies = useSelector((state) => state.currencies.currencies);

  const addCurrency = (e, number) => {
    e.preventDefault();
    if (number > 0) {
      const price = allCurrencies.find((currency) => currency.id === temporaryChoice).priceUsd;
      const day = new Date();
      dispatch(addCurrencyAction([temporaryChoice, number, price, day]));
      localStorage.setItem(
        'selectedCurrencies',
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
    setInputValue('');
    dispatch(updateAddingModalStateAction(false));
  };

  return (
    <form className="adding__form" onSubmit={(e) => addCurrency(e, Number(inputValue.replaceAll(',', '.')))}>
      <label className="adding__label" htmlFor="crypto-amount">
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
};

export default CurrencyAddingModal;
