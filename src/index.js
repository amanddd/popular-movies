import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './global.css';
import Details from './pages/details/details';
import Home from './pages/home';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

/*

      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />

      */