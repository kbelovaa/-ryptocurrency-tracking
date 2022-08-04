import "./TopCurrencies.scss";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import { round } from "../../roundingFunctions";

export default function TopCurrencies() {
  const currencies = useSelector((state) =>
    state.currencies.currencies.slice(0, 3)
  );

  return (
    <div className="top-currencies">
      <ul className="top-currencies__list">
        {currencies.map((currency) => (
          <li className="top-currencies__item">
            <span className="top-currencies__ticker">{currency.symbol}</span>
            <span className="top-currencies__price">
              ${round(currency.priceUsd)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
