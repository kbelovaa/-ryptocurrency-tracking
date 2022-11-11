import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CurrenciesRows from 'Components/CurrenciesTable/CurrenciesRows/CurrenciesRows';
import Pagination from 'Components/Pagination/Pagination';
import './CurrenciesTable.scss';

const CurrenciesTable = () => {
  const params = useParams();
  const currentPage = Number.isNaN(Number(params.num)) ? 1 : params.num;

  const currencies = useSelector((state) => state.currencies.currencies);

  const currenciesPerPage = 10;
  const lastCurrencyIndex = currentPage * currenciesPerPage;
  const firstCurrencyIndex = lastCurrencyIndex - currenciesPerPage;
  const currentCurrencies = currencies.slice(firstCurrencyIndex, lastCurrencyIndex);

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
            <th className="table-head__supply table__additional">Circulating Supply</th>
            <th className="table-head__maxsupply table__additional">Max Supply</th>
          </tr>
        </thead>
        <tbody>
          <CurrenciesRows currencies={currentCurrencies} />
        </tbody>
      </table>
      <Pagination currenciesPerPage={currenciesPerPage} totalCurrencies={currencies.length} currentPage={currentPage} />
    </div>
  );
};

export default CurrenciesTable;
