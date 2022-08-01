import './ControlButton.scss';
import React from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { makeTemporaryChoice } from '../store/portfolioReducer';

export default function ControlButton(props) {
  const dispatch = useDispatch();

  function markCurrency(currency) {
    dispatch(makeTemporaryChoice(currency));
  }

  return (
    <button onClick={() => {
      markCurrency(props.currency);
      document.getElementById('adding-modal').classList.add('active');
    }} className='btn-control'>+</button>
  )
}
