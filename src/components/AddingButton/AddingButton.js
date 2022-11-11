import React from 'react';
import { useDispatch } from 'react-redux';
import { makeTemporaryChoiceAction } from 'Store/actions/portfolioActions';
import { updateAddingModalStateAction } from 'Store/actions/modalsActions';
import './AddingButton.scss';

const AddingButton = ({ currency }) => {
  const dispatch = useDispatch();

  function markCurrency(currencyId) {
    dispatch(makeTemporaryChoiceAction(currencyId));
    dispatch(updateAddingModalStateAction(true));
  }

  return (
    <button
      onClick={() => {
        markCurrency(currency.id);
      }}
      className="btn-add"
    >
      +
    </button>
  );
};

export default AddingButton;
