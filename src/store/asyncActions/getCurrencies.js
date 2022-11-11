import { getCurrencies } from 'Services/requests';
import uploadCurrenciesAction from 'Store/actions/currenciesActions';

const fetchCurrencies = () => ((dispatch) => {
  getCurrencies()
    .then((responce) => responce.json())
    .then((json) => dispatch(uploadCurrenciesAction(json.data)));
});

export default fetchCurrencies;
