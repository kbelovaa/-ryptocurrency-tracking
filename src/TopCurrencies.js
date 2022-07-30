import React from 'react'

export default function TopCurrencies() {
  return (
    <div className='top-currencies'>
      <ul className='top-currencies__list'>
        <li className='top-currencies__item'>
          <span className='top-currencies__ticker'>BTC</span>
          <span className='top-currencies__price'>$23,954.45</span>
        </li>
        <li className='top-currencies__item'>
          <span className='top-currencies__ticker'>ETH</span>
          <span className='top-currencies__price'>$1,698.56</span>
        </li>
        <li className='top-currencies__item'>
          <span className='top-currencies__ticker'>USDT</span>
          <span className='top-currencies__price'>$1.00</span>
        </li>
      </ul>
    </div>
  )
}
