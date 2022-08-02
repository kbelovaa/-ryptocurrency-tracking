import "./App.scss";
import React, { useEffect } from "react";
import { fetchCurrencies } from "./store/asyncActions/getCurrencies";
import { useDispatch } from "react-redux/es/exports";
import ModalWindow from "./modals/ModalWindow";
import CurrencyAddingModal from "./modals/input-modal/CurrencyAddingModal";
import PortfolioModal from "./modals/portfolio-modal/PortfolioModal";
import Header from "./header/Header";
import Main from "./main/Main";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCurrencies()), [dispatch]);

  return (
    <div>
      <Header />
      <Main />
      <ModalWindow id="adding-modal" content={<CurrencyAddingModal />} />
      <ModalWindow id="portfolio-modal" content={<PortfolioModal />} />
    </div>
  );
}

export default App;
