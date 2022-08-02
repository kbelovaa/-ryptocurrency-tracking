import "./Header.scss";
import React from "react";
import PortfolioPrice from "./portfolio-price/PortfolioPrice";
import TopCurrencies from "./top-three-currencies/TopCurrencies";

export default function Header() {
  return (
    <div className="top">
      <div className="container">
        <div className="header">
          <TopCurrencies />
          <PortfolioPrice />
        </div>
      </div>
    </div>
  );
}
