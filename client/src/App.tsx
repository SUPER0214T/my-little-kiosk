import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from './components/pages/Order/Order';
import { ROUTES } from './constants/routes';
import { reset } from './styles/globalStyle';
import { Global } from '@emotion/react';

function App() {
  return (
    <div>
      <Global styles={reset} />
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
