import React, { useEffect } from 'react';
import { fetchCurrencies } from './asyncActions/currencies';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import CurrencyRow from './CurrencyRow';

export default function CurrencyTable() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchCurrencies()));

  const currencies = useSelector(state => state.currencies.currencies);

  return (
    <div>
      <table className='table'>
        <thead className='table__head'>
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
            {currencies.map(currency => <CurrencyRow currency={currency} />)}
        </tbody>
      </table>
    </div>
  )
}
