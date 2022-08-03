import "./App.scss";
import React, { useEffect } from "react";
import { fetchCurrencies } from "./store/asyncActions/getCurrencies";
import { useDispatch } from "react-redux/es/exports";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CurrencyPage from "./currency-info-page/CurrencyPage";
import Header from "./header/Header";
import CurrencyTable from "./main/CurrencyTable";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCurrencies()), [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<CurrencyTable />} />
            <Route path="currency/:id" element={<CurrencyPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
