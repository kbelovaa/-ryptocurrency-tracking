import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { makeTemporaryChoiceAction } from 'Store/actions/portfolioActions';
import Context from 'Utils/Context';
import './AddingButton.scss';

const AddingButton = ({ currency }) => {
  const dispatch = useDispatch();

  const { setIsInputModalOpen } = useContext(Context);

  function markCurrency(currencyId) {
    dispatch(makeTemporaryChoiceAction(currencyId));
    setIsInputModalOpen(true);
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
