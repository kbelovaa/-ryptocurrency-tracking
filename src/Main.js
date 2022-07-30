import './Main.scss';
import React from 'react'
import CurrencyTable from './CurrencyTable'

export default function Main() {
  return (
    <div className='main'>
      <div className='container'>
        <CurrencyTable />
      </div>
    </div>
  )
}
