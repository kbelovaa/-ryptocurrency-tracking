import React from 'react';
import { Outlet } from 'react-router-dom';
import PortfolioPrice from 'Components/Header/PortfolioPrice/PortfolioPrice';
import TopCurrencies from 'Components/Header/TopThreeCurrencies/TopCurrencies';
import ModalWindow from 'Components/Modals/ModalWindow';
import CurrencyAddingModal from 'Components/Modals/InputModal/CurrencyAddingModal';
import PortfolioModal from 'Components/Modals/PortfolioModal/PortfolioModal';
import './Header.scss';

const Header = () => (
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

export default Header;
