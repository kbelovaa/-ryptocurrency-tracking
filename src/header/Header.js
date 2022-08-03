import "./Header.scss";
import React from "react";
import PortfolioPrice from "./portfolio-price/PortfolioPrice";
import TopCurrencies from "./top-three-currencies/TopCurrencies";
import { Outlet } from "react-router-dom";
import ModalWindow from "../modals/ModalWindow";
import CurrencyAddingModal from "../modals/input-modal/CurrencyAddingModal";
import PortfolioModal from "../modals/portfolio-modal/PortfolioModal";

export default function Header() {
  return (
    <>
      <div className="top">
        <div className="container">
          <div className="header">
            <TopCurrencies />
            <PortfolioPrice />
          </div>
        </div>
      </div>
      <Outlet />
      <ModalWindow id="adding-modal" content={<CurrencyAddingModal />} />
      <ModalWindow id="portfolio-modal" content={<PortfolioModal />} />
    </>
  );
}
