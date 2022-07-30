import React from 'react'
import CurrencyRow from './CurrencyRow'

export default function CurrencyTable() {
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
            <CurrencyRow />
            rows
        </tbody>
      </table>
    </div>
  )
}
