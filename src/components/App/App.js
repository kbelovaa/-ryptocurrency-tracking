import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchCurrencies from 'Store/asyncActions/getCurrencies';
import Header from 'Components/Header/Header';
import CurrencyPage from 'Components/CurrencyInfoPage/CurrencyPage';
import CurrenciesTable from 'Components/CurrenciesTable/CurrenciesTable';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCurrencies()), []);

  return (
    <div className="content">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<CurrenciesTable />} />
            <Route path=":num" element={<CurrenciesTable />} />
            <Route path="currency/:id" element={<CurrencyPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
