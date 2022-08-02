import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { portfolioReducer } from "./portfolioReducer";
import { currenciesReducer } from "./currenciesReducer";

const rootReducer = combineReducers({
  addedCurrencies: portfolioReducer,
  currencies: currenciesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
