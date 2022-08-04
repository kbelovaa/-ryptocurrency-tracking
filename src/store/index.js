import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { portfolioReducer } from "./portfolioReducer";
import { currenciesReducer } from "./currenciesReducer";
import { modalsReducer } from "./modalsReducer";

const rootReducer = combineReducers({
  addedCurrencies: portfolioReducer,
  currencies: currenciesReducer,
  modals: modalsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
