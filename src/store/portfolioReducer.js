const selectedCurrencies =
  localStorage.getItem("selectedCurrencies") !== null
    ? JSON.parse(localStorage.getItem("selectedCurrencies"))
    : [];

const defaultState = {
  addedCurrencies: [...selectedCurrencies],
  temporaryChoice: "",
};

const MAKE_TEMPORARY_CHOICE = "MAKE_TEMPORARY_CHOICE";
const ADD_CURRENCY = "ADD_CURRENCY";
const DELETE_CURRENCY = "DELETE_CURRENCY";

export const portfolioReducer = (state = defaultState, action) => {
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
        addedCurrencies: state.addedCurrencies.filter(
          (currency) => currency.date !== action.payload.date
        ),
      };
    default:
      return state;
  }
};

export const makeTemporaryChoiceAction = (payload) => ({
  type: MAKE_TEMPORARY_CHOICE,
  payload,
});
export const addCurrencyAction = (payload) => ({ type: ADD_CURRENCY, payload });
export const deleteCurrencyAction = (payload) => ({
  type: DELETE_CURRENCY,
  payload,
});
