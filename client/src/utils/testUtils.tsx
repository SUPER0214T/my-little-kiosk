import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import App from '../App';
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../redux/rootReducer';
import logger from 'redux-logger';

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

// flow
export const goToOrderFlow = async () => {
  const masterDownButton = await screen.findByText('마스터 수신');
  userEvent.click(masterDownButton);

  const orderBtn = await screen.findByText('주문하기');
  userEvent.click(orderBtn);
};

// render
/**
 * @desc mockStore를 사용하여 이전 테스트의 store에 접근하는 것을 방지
 */
export const renderSimplify = (initialEntries: string[] = ['/']) => {
  const mockStore = createStore();
  const renderResult = render(
    <MemoryRouter initialEntries={initialEntries}>
      <Provider store={mockStore}>
        <App />
      </Provider>
    </MemoryRouter>,
  );

  return {
    mockStore,
    renderResult,
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
