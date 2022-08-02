import "./CurrencyTable.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import CurrencyRows from "./table-rows/CurrencyRows";
import Pagination from "./pagination/Pagination";

export default function CurrencyTable() {
  const currencies = useSelector((state) => state.currencies.currencies);
  const [currentPage, setCurrentPage] = useState(1);

  const currenciesPerPage = 10;
  const lastCurrencyIndex = currentPage * currenciesPerPage;
  const firstCurrencyIndex = lastCurrencyIndex - currenciesPerPage;
  const currentCurrencies = currencies.slice(
    firstCurrencyIndex,
    lastCurrencyIndex
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
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
          <CurrencyRows currencies={currentCurrencies} />
        </tbody>
      </table>
      <Pagination
        currenciesPerPage={currenciesPerPage}
        totalCurrencies={currencies.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
