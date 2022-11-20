import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import portfolioReducer from 'Store/reducers/portfolioReducer';
import currenciesReducer from 'Store/reducers/currenciesReducer';

const rootReducer = combineReducers({
  addedCurrencies: portfolioReducer,
  currencies: currenciesReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
