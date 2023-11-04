import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from '../redux/store';
import App from '../App';
import React from 'react';

// flow
export const goToOrderFlow = async () => {
  const masterDownButton = await screen.findByText('마스터 수신');
  userEvent.click(masterDownButton);

  const orderBtn = await screen.findByText('주문하기');
  userEvent.click(orderBtn);
};

// render
export const renderSimplify = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );
};

const insideRender = (initialEntries: string[] = ['/']) => {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
};
