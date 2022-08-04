import "./CurrencyTable.scss";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import CurrencyRows from "./table-rows/CurrencyRows";
import Pagination from "./pagination/Pagination";
import { useParams } from "react-router-dom";

export default function CurrencyTable(props) {
  const params = useParams();
  let currentPage = [
    params.num === undefined ? Number(props.currentPage) : params.num,
  ];

  const currencies = useSelector((state) => state.currencies.currencies);

  const currenciesPerPage = 10;
  const lastCurrencyIndex = currentPage * currenciesPerPage;
  const firstCurrencyIndex = lastCurrencyIndex - currenciesPerPage;
  const currentCurrencies = currencies.slice(
    firstCurrencyIndex,
    lastCurrencyIndex
  );

  return (
    <div className="container">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th className="table-head__btn"></th>
            <th className="table-head__rank">#</th>
            <th className="table-head__name">Name</th>
            <th className="table-head__price">Price</th>
            <th className="table-head__percent">24h %</th>
            <th className="table-head__avgprice">Avg Price (24h)</th>
            <th className="table-head__mcap">Market Cap</th>
            <th className="table-head__volume table__additional">Volume</th>
            <th className="table-head__supply table__additional">
              Circulating Supply
            </th>
            <th className="table-head__maxsupply table__additional">
              Max Supply
            </th>
          </tr>
        </thead>
        <tbody>
          <CurrencyRows currencies={currentCurrencies} />
        </tbody>
      </table>
      <Pagination
        currenciesPerPage={currenciesPerPage}
        totalCurrencies={currencies.length}
        currentPage={currentPage}
      />
    </div>
  );
}
