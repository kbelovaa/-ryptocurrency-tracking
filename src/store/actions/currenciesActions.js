import { UPLOAD_CURRENCIES } from '../../constants/actionsRedux';

const uploadCurrenciesAction = (payload) => ({
  type: UPLOAD_CURRENCIES,
  payload,
});

export default uploadCurrenciesAction;
