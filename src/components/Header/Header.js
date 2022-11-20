import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PortfolioPrice from 'Components/Header/PortfolioPrice/PortfolioPrice';
import TopCurrencies from 'Components/Header/TopCurrencies/TopCurrencies';
import ModalWindow from 'Components/Modals/ModalWindow';
import CurrencyAddingModal from 'Components/Modals/CurrencyAddingModal/CurrencyAddingModal';
import PortfolioModal from 'Components/Modals/PortfolioModal/PortfolioModal';
import Context from 'Utils/Context';
import './Header.scss';

const Header = () => {
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);

  return (
    <Context.Provider value={{ setIsPortfolioModalOpen, setIsInputModalOpen }}>
      <div className="top">
        <div className="container">
          <div className="header">
            <TopCurrencies />
            <PortfolioPrice />
          </div>
        </div>
      </div>
      <Outlet />
      <ModalWindow id="adding-modal" isOpen={isInputModalOpen} setIsOpen={setIsInputModalOpen} content={<CurrencyAddingModal />} />
      <ModalWindow id="portfolio-modal" isOpen={isPortfolioModalOpen} setIsOpen={setIsPortfolioModalOpen} content={<PortfolioModal />} />
    </Context.Provider>
  );
};

export default Header;
