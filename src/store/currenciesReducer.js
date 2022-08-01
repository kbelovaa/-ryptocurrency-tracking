const defaultState = {
    currencies: []
}

const UPLOAD_CURRENCIES = 'UPLOAD_CURRENCIES';

export const currenciesReducer = (state = defaultState, action) => {
switch(action.type) {
    case UPLOAD_CURRENCIES:
        return {...state, currencies: [...action.payload]};
    default:
        return state;
}
};

export const uploadCurrenciesAction = (payload) => ({type: UPLOAD_CURRENCIES, payload});