const selectedCurrencies = (localStorage.getItem('selectedCurrencies') !== null) ? JSON.parse(localStorage.getItem('selectedCurrencies')) : []; 
const quantity = (localStorage.getItem('currenciesQuantity') !== null) ? JSON.parse(localStorage.getItem('currenciesQuantity')) : []; 

const defaultState = {
    addedCurrencies: [...selectedCurrencies],
    currenciesQuantity: [...quantity],
    temporaryChoice: {}
}

const MAKE_TEMPORARY_CHOICE = 'MAKE_TEMPORARY_CHOICE';
const ADD_CURRENCY = 'ADD_CURRENCY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const DELETE_CURRENCY = 'DELETE_CURRENCY';

export const portfolioReducer = (state = defaultState, action) => {
    switch(action.type) {
        case MAKE_TEMPORARY_CHOICE:
            return {...state, temporaryChoice: {...action.payload}};
        case ADD_CURRENCY:
            return {...state, addedCurrencies: [...state.addedCurrencies, action.payload]};
        case ADD_QUANTITY:
            return {...state, currenciesQuantity: [...state.currenciesQuantity, action.payload]};
        case DELETE_CURRENCY:
            return {...state, addedCurrencies: state.addedCurrencies.filter(currency => currency.id !== action.payload.id)};
        default:
            return state;
    }
};

export const makeTemporaryChoice = (payload) => ({type: MAKE_TEMPORARY_CHOICE, payload});
export const addCurrencyAction = (payload) => ({type: ADD_CURRENCY, payload});
export const addQuantityAction = (payload) => ({type: ADD_QUANTITY, payload});
export const deleteCurrencyAction = (payload) => ({type: DELETE_CURRENCY, payload});
