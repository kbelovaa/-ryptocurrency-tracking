import "./CurrencyRows.scss";
import React from "react";
import AddingButton from "./AddingButton";

export default function CurrencyRows(props) {
  const currencies = props.currencies;

  return currencies.map((currency) => (
    <tr className="table__row">
      <td>
        <AddingButton currency={currency} />
      </td>
      <td>{currency.rank}</td>
      <td>
        <div className="table__cell">
          <span className="table__currency-name">{currency.name}</span>
          <span className="table__currency-ticker">{currency.symbol}</span>
        </div>
      </td>
      <td>${Math.round(currency.priceUsd * 100) / 100}</td>
      <td
        className={
          currency.changePercent24Hr.slice(0, 1) === "-"
            ? "table__percent_deleting"
            : "table__percent_adding"
        }
      >
        {Math.round(currency.changePercent24Hr * 100) / 100}%
      </td>
      <td>${Math.round(currency.vwap24Hr * 100) / 100}</td>
      <td>${Math.round(currency.marketCapUsd * 100) / 100}</td>
      <td>${Math.round(currency.volumeUsd24Hr * 100) / 100}</td>
      <td>
        {Math.round(currency.supply)} {currency.symbol}
      </td>
      <td>
        {Math.round(currency.maxSupply)} {currency.symbol}
      </td>
    </tr>
  ));
}
