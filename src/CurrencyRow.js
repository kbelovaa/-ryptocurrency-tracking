import React from 'react';
import ControlButton from './ControlButton'

export default function CurrencyRow(props) {
  const currency = props.currency;

  return (
    <tr className='table__row'>
      <td><ControlButton /></td>
      <td>{currency.rank}</td>
      <td>
        <div className='table__cell'>
          <span className='table__currency-name'>{currency.name}</span>
          <span className='table__currency-ticker'>{currency.symbol}</span>
        </div>
      </td>
      <td>${Math.round(currency.priceUsd * 100) / 100}</td>
      <td className='table__percent_deleting'>${Math.round(currency.changePercent24Hr * 100) / 100}</td>
      <td>${Math.round(currency.vwap24Hr * 100) / 100}</td>
      <td>${Math.round(currency.marketCapUsd * 100) / 100}</td>
      <td>${Math.round(currency.volumeUsd24Hr * 100) / 100}</td>
      <td>{Math.round(currency.supply)} {currency.symbol}</td>
      <td>{Math.round(currency.maxSupply)} {currency.symbol}</td>
  </tr>
  )
}
