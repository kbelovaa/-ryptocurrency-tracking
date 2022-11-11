import { MAKE_TEMPORARY_CHOICE, ADD_CURRENCY, DELETE_CURRENCY } from '../../constants/actionsRedux';

export const makeTemporaryChoiceAction = (payload) => ({
  type: MAKE_TEMPORARY_CHOICE,
  payload,
});

export const addCurrencyAction = (payload) => ({ type: ADD_CURRENCY, payload });

export const deleteCurrencyAction = (payload) => ({
  type: DELETE_CURRENCY,
  payload,
});
