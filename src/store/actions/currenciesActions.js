import { UPLOAD_CURRENCIES } from 'Constants/actionsRedux';

const uploadCurrenciesAction = (payload) => ({
  type: UPLOAD_CURRENCIES,
  payload,
});

export default uploadCurrenciesAction;
