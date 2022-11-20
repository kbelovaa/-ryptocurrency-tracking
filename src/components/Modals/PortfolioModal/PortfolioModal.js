import React from 'react';
import { useSelector } from 'react-redux';
import DeletingButton from 'Components/Modals/PortfolioModal/DeletingButton/DeletingButton';
import { round } from 'Utils/roundingFunctions';
import './PortfolioModal.scss';

const PortfolioModal = () => {
  const addedCurrencies = useSelector((state) => state.addedCurrencies.addedCurrencies);
  const allCurrencies = useSelector((state) => state.currencies.currencies);

  if (allCurrencies.length === 0) {
    return null;
  }

  return (
    <div className="portfolio__content">
      <h2 className="portfolio__name">Your portfolio</h2>
      {addedCurrencies.length !== 0 ? (
        <table className="portfolio-table">
          <thead className="portfolio-table__head">
            <tr>
              <th></th>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Old Price</th>
              <th>Current Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {addedCurrencies.map((currency, index) => (
              <tr key={currency.id} className="portfolio-table__row">
                <td>
                  <DeletingButton currency={currency} />
                </td>
                <td>{index + 1}</td>
                <td>
                  <div className="portfolio-table__cell">
                    <span className="portfolio-table__currency-name">
                      {allCurrencies.find((currencyObj) => currencyObj.id === currency.id).name}
                    </span>
                    <span className="portfolio-table__currency-ticker">
                      {allCurrencies.find((currencyObj) => currencyObj.id === currency.id).symbol}
                    </span>
                  </div>
                </td>
                <td>{currency.quantity}</td>
                <td>${round(currency.firstPrice)}</td>
                <td>${round(allCurrencies.find((currencyObj) => currencyObj.id === currency.id).priceUsd)}</td>
                <td>
                  $
                  {round(
                    round(allCurrencies.find((currencyObj) => currencyObj.id === currency.id).priceUsd) * currency.quantity
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="portfolio__empty">It's empty here!</p>
      )}
    </div>
  );
};

export default PortfolioModal;
