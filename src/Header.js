import './Header.scss';
import React from 'react'
import PortfolioPrice from './PortfolioPrice'
import TopCurrencies from './TopCurrencies'

export default function Header() {
  return (
    <div className='top'>
      <div className='container'>
        <div className='header'>
          <TopCurrencies />
          <PortfolioPrice />
        </div>
      </div>
    </div>
  )
}
