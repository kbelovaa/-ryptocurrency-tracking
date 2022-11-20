import { UPLOAD_CURRENCIES } from 'Constants/actionsRedux';

const defaultState = {
  currencies: [],
};

const currenciesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPLOAD_CURRENCIES:
      return { ...state, currencies: [...action.payload] };
    default:
      return state;
  }
};

export default currenciesReducer;
