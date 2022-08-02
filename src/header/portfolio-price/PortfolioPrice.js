import "./PortfolioPrice.scss";
import React from "react";
import { useSelector } from "react-redux/es/exports";

export default function PortfolioPrice() {
  const allCurrencies = useSelector((state) => state.currencies.currencies);
  const addedCurrencies = useSelector(
    (state) => state.addedCurrencies.addedCurrencies
  );
  let totalPrice = 0;
  let firstPrice = 0;

  if (allCurrencies.length === 0) {
    return null;
  }

  for (let i = 0; i < addedCurrencies.length; i++) {
    totalPrice +=
      allCurrencies.find(
        (currencyObj) => currencyObj.id === addedCurrencies[i].id
      ).priceUsd * addedCurrencies[i].quantity;
    firstPrice += addedCurrencies[i].firstPrice * addedCurrencies[i].quantity;
  }

  const diff = totalPrice - firstPrice;
  const percent = Math.round((diff / firstPrice) * 10000) / 100;

  if (addedCurrencies.length !== 0) {
    return (
      <div
        className="portfolio"
        onClick={() =>
          document.getElementById("portfolio-modal").classList.add("active")
        }
      >
        <p className="portfolio__title">Your portfolio</p>
        <span className="portfolio__price">
          ${Math.round(totalPrice * 100) / 100}
        </span>
        <span
          className={
            diff >= 0
              ? "portfolio__diff portfolio__diff_plus"
              : "portfolio__diff portfolio__diff_minus"
          }
        >
          {diff >= 0
            ? `+${Math.round(diff * 100) / 100}`
            : `${Math.round(diff * 100) / 100}`}{" "}
          ({percent} %)
        </span>
      </div>
    );
  }
  return (
    <div
      className="portfolio"
      onClick={() =>
        document.getElementById("portfolio-modal").classList.add("active")
      }
    >
      <p className="portfolio__title">Your portfolio</p>
      <span className="portfolio__price portfolio__price_only">$0</span>
    </div>
  );
}
