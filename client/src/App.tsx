import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from './components/pages/Order/Order';
import { ROUTES } from './constants/routes';
import { customAxios } from './services/axios';

function App() {
  useEffect(() => {
    customAxios.get('/master').then((res) => console.log(res.data));
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<div>임시 메인</div>} />
          <Route path={ROUTES.ORDER} element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
