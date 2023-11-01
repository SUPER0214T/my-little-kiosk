import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/Order/Order';
import { ROUTES } from './constants/routes';
import { reset } from './styles/globalStyle';
import { Global, ThemeProvider } from '@emotion/react';
import { Wrapper } from './App.styles';
import Home from './pages/Home/Home';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Global styles={reset} />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ORDER} element={<Order />} />
        </Routes>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
