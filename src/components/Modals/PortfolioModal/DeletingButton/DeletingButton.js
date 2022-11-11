import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCurrencyAction } from 'Store/actions/portfolioActions';
import './DeletingButton.scss';

const DeletingButton = ({ currency }) => {
  const dispatch = useDispatch();

  const selectedCurrencies = useSelector((state) => state.addedCurrencies.addedCurrencies);

  const deleteCurrency = () => {
    dispatch(deleteCurrencyAction(currency));
    localStorage.setItem(
      'selectedCurrencies',
      JSON.stringify(selectedCurrencies.filter((oneOfCurrency) => oneOfCurrency.date !== currency.date))
    );
  };

  return (
    <button onClick={deleteCurrency} className="btn-delete">
      -
    </button>
  );
};

export default DeletingButton;
