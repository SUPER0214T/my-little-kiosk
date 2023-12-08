import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import App from '../App';
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../redux/rootReducer';
import logger from 'redux-logger';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import theme from '../styles/theme';

// redux
export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware:
      process.env.NODE_ENV === 'development'
        ? (getDefaultMiddleware) =>
            getDefaultMiddleware({
              serializableCheck: false,
            }).concat(logger)
        : undefined,
    devTools: process.env.NODE_ENV === 'development',
  });

// utils
export const buyOneItem = async (itemName: string = '티셔츠 237') => {
  const orderItem = await screen.findByText(itemName);
  userEvent.click(orderItem);

  const confirmBtn = await screen.findByText('구매하기');
  userEvent.click(confirmBtn);
};

// flow
export const goToOrderFlow = async () => {
  const masterDownButton = await screen.findByText('마스터 수신');
  userEvent.click(masterDownButton);

  const orderBtn = await screen.findByText('주문하기');
  await waitFor(
    () => {
      expect(orderBtn).toHaveStyle({ backgroundColor: theme.primary });
    },
    {
      timeout: 1000,
      onTimeout: (error) => {
        console.error(error);
        return error;
      },
    },
  );
  userEvent.click(orderBtn);
};

// buyCallbck에는 buyOneItem이 여러 개 들어가는 콜백을 넣으면 됨.
export const goToCheckoutFlow = async (buyCallback?: () => Promise<void>) => {
  await goToOrderFlow();

  if (buyCallback) {
    await buyCallback();
  } else {
    await buyOneItem();
  }

  const checkoutBtn = await screen.findByText('결제하기');
  userEvent.click(checkoutBtn);
};

export const goToPaymentFlow = async (buyCallback?: () => Promise<void>) => {
  await goToCheckoutFlow(buyCallback);

  const goToPaymentBtn = await screen.findByText('결제하기');
  userEvent.click(goToPaymentBtn);
};
// render
/**
 * @desc mockStore를 사용하여 이전 테스트의 store에 접근하는 것을 방지
 */
export const renderSimplify = (initialEntries: string[] = ['/']) => {
  const mockStore = createStore();
  const queryClient = new QueryClient();
  const renderResult = render(
    <MemoryRouter initialEntries={initialEntries}>
      <Provider store={mockStore}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>,
  );

  return {
    mockStore,
    renderResult,
    queryClient,
  };
};

const insideRender = (initialEntries: string[] = ['/']) => {
  const mockStore = createStore();

  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Provider store={mockStore}>
        <App />
      </Provider>
    </MemoryRouter>
  );
};

// react-query
export const clearCache = () => {
  const queryCache = new QueryCache();
  queryCache.clear();
};
