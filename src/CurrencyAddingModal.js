import './CurrencyAddingModal.scss';
import React from 'react'

export default function CurrencyAddingModal() {
  return (
    <div className='adding-modal'>
        <div className='adding-modal__content'>
            <div className='adding-modal__close'></div>
            <form className='adding-modal__form'>
                <label className='adding-modal__label' for='crypto-amount'>Enter the amount of cryptocurrency</label>
                <input className='adding-modal__input' type='text' id='crypto-amount' />
                <input className='adding-modal__btn' type='submit' value='Add to portfolio' />
            </form>
        </div>
    </div>
  )
}
