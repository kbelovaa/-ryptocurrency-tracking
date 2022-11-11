import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePortfolioModalStateAction } from 'Store/actions/modalsActions';
import { round } from 'Utils/roundingFunctions';
import './PortfolioPrice.scss';

const PortfolioPrice = () => {
  const dispatch = useDispatch();

  const openPortfolioModal = () => {
    dispatch(updatePortfolioModalStateAction(true));
  };

  const allCurrencies = useSelector((state) => state.currencies.currencies);
  const addedCurrencies = useSelector((state) => state.addedCurrencies.addedCurrencies);
  let totalPrice = 0;
  let firstPrice = 0;

  if (allCurrencies.length === 0) {
    return null;
  }

  for (let i = 0; i < addedCurrencies.length; i += 1) {
    totalPrice
    += allCurrencies.find((currencyObj) => currencyObj.id === addedCurrencies[i].id).priceUsd
    * addedCurrencies[i].quantity;
    firstPrice += addedCurrencies[i].firstPrice * addedCurrencies[i].quantity;
  }

  const diff = totalPrice - firstPrice;
  const percent = round((diff / firstPrice) * 100);

  return (
    <div className="portfolio" onClick={openPortfolioModal}>
      {addedCurrencies.length !== 0 && (
        <>
          <p className="portfolio__title">Your portfolio</p>
          <span className="portfolio__price">${round(totalPrice)}</span>
          <span
            className={diff >= 0 ? 'portfolio__diff portfolio__diff_plus' : 'portfolio__diff portfolio__diff_minus'}
          >
            {diff >= 0 ? `+${round(diff)}` : `${round(diff)}`} ({percent} %)
          </span>
        </>
      )}
      {addedCurrencies.length === 0 && (
        <>
          <p className="portfolio__title">Your portfolio</p>
          <span className="portfolio__price portfolio__price_only">$0</span>
        </>
      )}
    </div>
  );
};

export default PortfolioPrice;
