import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import portfolioReducer from 'Store/reducers/portfolioReducer';
import currenciesReducer from 'Store/reducers/currenciesReducer';
import modalsReducer from 'Store/reducers/modalsReducer';

const rootReducer = combineReducers({
  addedCurrencies: portfolioReducer,
  currencies: currenciesReducer,
  modals: modalsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
