import "./CurrencyRows.scss";
import React from "react";
import AddingButton from "./AddingButton";
import { Link } from "react-router-dom";

export default function CurrencyRows(props) {
  const currencies = props.currencies;

  return currencies.map((currency) => (
    <tr className="table__row">
      <td>
        <AddingButton currency={currency} />
      </td>
      <td>
        <Link to={`/currency/${currency.id}`}>{currency.rank}</Link>
      </td>
      <td>
        <div className="table__cell">
          <Link to={`/currency/${currency.id}`}>
            <span className="table__currency-name">{currency.name}</span>
            <span className="table__currency-ticker">{currency.symbol}</span>
          </Link>
        </div>
      </td>
      <td>
        <Link to={`/currency/${currency.id}`}>
          ${Math.round(currency.priceUsd * 100) / 100}
        </Link>
      </td>
      <td>
        <Link
          to={`/currency/${currency.id}`}
          className={
            currency.changePercent24Hr.slice(0, 1) === "-"
              ? "table__percent_deleting"
              : "table__percent_adding"
          }
        >
          {Math.round(currency.changePercent24Hr * 100) / 100}%
        </Link>
      </td>
      <td>
        <Link to={`/currency/${currency.id}`}>
          ${Math.round(currency.vwap24Hr * 100) / 100}
        </Link>
      </td>
      <td>
        <Link to={`/currency/${currency.id}`}>
          ${Math.round(currency.marketCapUsd * 100) / 100}
        </Link>
      </td>
      <td>
        <Link to={`/currency/${currency.id}`}>
          ${Math.round(currency.volumeUsd24Hr * 100) / 100}
        </Link>
      </td>
      <td>
        <Link to={`/currency/${currency.id}`}>
          {Math.round(currency.supply)} {currency.symbol}
        </Link>
      </td>
      <td>
        <Link to={`/currency/${currency.id}`}>
          {Math.round(currency.maxSupply)} {currency.symbol}
        </Link>
      </td>
    </tr>
  ));
}
