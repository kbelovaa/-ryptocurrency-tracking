import "./CurrencyPage.scss";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import AddingButton from "../main/table-rows/AddingButton";
import CurrencyChart from "./chart/CurrencyChart";

export default function CurrencyPage() {
  const params = useParams();
  const currencyId = params.id;
  const navigate = useNavigate();

  const allCurrencies = useSelector((state) => state.currencies.currencies);

  const currency = allCurrencies.find(
    (currencyObj) => currencyObj.id === currencyId
  );

  if (allCurrencies.length === 0) {
    return null;
  }

  return (
    <div>
      <button className="btn-back" onClick={() => navigate("/")}>
        To main page
      </button>
      <div className="container">
        <table className="table">
          <thead className="table__head">
            <tr>
              <th></th>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
              <th>Avg Price (24h)</th>
              <th>Market Cap</th>
              <th>Volume</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table__row">
              <td>
                <AddingButton currency={currency} />
              </td>
              <td>{currency.rank}</td>
              <td>
                <div className="table__cell">
                  <span className="table__currency-name">{currency.name}</span>
                  <span className="table__currency-ticker">
                    {currency.symbol}
                  </span>
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
          </tbody>
        </table>
        <CurrencyChart currencyId={currencyId} />
      </div>
    </div>
  );
}
