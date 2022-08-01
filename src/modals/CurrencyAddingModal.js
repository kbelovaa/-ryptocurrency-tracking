import './CurrencyAddingModal.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addQuantityAction, addCurrencyAction } from '../store/portfolioReducer';

export default function CurrencyAddingModal() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const quantityOfSelectedCurrencies = useSelector(state => state.addedCurrencies.currenciesQuantity);
  const selectedCurrencies = useSelector(state => state.addedCurrencies.addedCurrencies);
  const temporaryChoice = useSelector(state => state.addedCurrencies.temporaryChoice);

  function addCurrency(e, quantity) {
    e.preventDefault();
    if (quantity !== 0) {
      dispatch(addQuantityAction(quantity));
      localStorage.setItem('currenciesQuantity', JSON.stringify([...quantityOfSelectedCurrencies, quantity]));
      dispatch(addCurrencyAction(temporaryChoice));
      localStorage.setItem('selectedCurrencies', JSON.stringify([...selectedCurrencies, temporaryChoice]));
    }
    setInputValue('');
    document.getElementById('adding-modal').classList.remove('active');
  }

  return (
    <div id='adding-modal' className='adding-modal'>
        <div className='adding-modal__content'>
            <div className='adding-modal__close' onClick={() => document.getElementById('adding-modal').classList.remove('active')}></div>
            <form className='adding-modal__form' onSubmit={(e) => addCurrency(e, Number(inputValue.replaceAll(',','.')))}>
                <label className='adding-modal__label' for='crypto-amount'>Enter the amount of cryptocurrency</label>
                <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} className='adding-modal__input' type='text' id='crypto-amount' />
                <input className='adding-modal__btn' type='submit' value='Add to portfolio' />
            </form>
        </div>
    </div>
  )
}
