import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/Order/Order';
import { ROUTES } from './constants/routes';
import { reset } from './styles/globalStyle';
import { Global, ThemeProvider } from '@emotion/react';
import { Wrapper } from './App.styles';
import Home from './pages/Home/Home';
import theme from './styles/theme';
import OrderDetail from './pages/OrderDetail/OrderDetail';
import Checkout from './pages/Checkout/Checkout';
import Confirmation from './pages/Confirmation/Confirmation';
import Payment from './pages/Payment/Payment';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Wrapper>
          <Global styles={reset} />
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ORDER} element={<Order />} />
            <Route path={ROUTES.ORDER_DETAIL} element={<OrderDetail />} />
            <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
            <Route path={ROUTES.PAYMENT} element={<Payment />} />
            <Route path={ROUTES.CONFIRMATION} element={<Confirmation />} />
          </Routes>
        </Wrapper>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
