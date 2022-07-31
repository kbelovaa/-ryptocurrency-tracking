const defaultState = {
    addedCurrencies: []
}

const ADD_CURRENCY = 'ADD_CURRENCY';
const DELETE_CURRENCY = 'DELETE_CURRENCY';

export const portfolioReducer = (state = defaultState, action) => {
switch(action.type) {
    case ADD_CURRENCY:
        return {...state, currencies: [...state.addedCurrencies, action.payload]};
    case DELETE_CURRENCY:
        return {...state, currencies: state.addedCurrencies.filter(currency => currency.id !== action.payload.id)};
    default:
        return state;
}
};

export const addCurrencyAction = (payload) => ({type: ADD_CURRENCY, payload});
export const deleteCurrencyAction = (payload) => ({type: DELETE_CURRENCY, payload});
