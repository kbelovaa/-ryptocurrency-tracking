import { MAKE_TEMPORARY_CHOICE, ADD_CURRENCY, DELETE_CURRENCY } from 'Constants/actionsRedux';

const selectedCurrencies = localStorage.getItem('selectedCurrencies') !== null ? JSON.parse(localStorage.getItem('selectedCurrencies')) : [];

const defaultState = {
  addedCurrencies: [...selectedCurrencies],
  temporaryChoice: '',
};

const portfolioReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MAKE_TEMPORARY_CHOICE:
      return { ...state, temporaryChoice: action.payload };
    case ADD_CURRENCY:
      return {
        ...state,
        addedCurrencies: [
          ...state.addedCurrencies,
          {
            id: action.payload[0],
            quantity: action.payload[1],
            firstPrice: action.payload[2],
            date: action.payload[3].getTime(),
          },
        ],
      };
    case DELETE_CURRENCY:
      return {
        ...state,
        addedCurrencies: state.addedCurrencies.filter((currency) => currency.date !== action.payload.date),
      };
    default:
      return state;
  }
};

export default portfolioReducer;
