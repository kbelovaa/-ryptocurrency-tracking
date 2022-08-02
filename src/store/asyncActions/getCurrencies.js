import { uploadCurrenciesAction } from "../currenciesReducer";

export const fetchCurrencies = () => {
  return (dispatch) => {
    fetch("https://api.coincap.io/v2/assets")
      .then((responce) => responce.json())
      .then((json) => dispatch(uploadCurrenciesAction(json.data)));
  };
};
