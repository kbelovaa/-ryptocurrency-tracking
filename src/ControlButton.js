import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { addCurrencyAction, deleteCurrencyAction } from './store/portfolioReducer';

export default function ControlButton(props) {
  const [action, setAction] = useState(true);
  const dispatch = useDispatch();

  function addCurrency(currency) {
    setAction(false);
    dispatch(addCurrencyAction(currency));
  }

  function deleteCurrency(currency) {
    setAction(true);
    dispatch(deleteCurrencyAction(currency));
  }

  return (
    action ?
    <button onClick={() => addCurrency(/*props.currency*/)} className='btn-control btn-control_add'>+</button>
    : <button onClick={() => deleteCurrency(/*props.currency*/)} className='btn-control btn-control_delete'>-</button>
  )
}
