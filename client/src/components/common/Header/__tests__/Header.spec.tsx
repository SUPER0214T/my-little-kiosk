import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from '../../../../redux/store';
import App from '../../../../App';

describe('Header 컴포넌트', () => {
  it('Home 버튼이 존재한다.', async () => {
    render(
      <MemoryRouter initialEntries={['/order']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );

    const homeBtn = await screen.findByText('Home');
    expect(homeBtn).toBeInTheDocument();
  });

  it('Home 버튼을 클릭하면 Home으로 이동한다.', async () => {
    render(
      <MemoryRouter initialEntries={['/order']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );

    const homeBtn = await screen.findByText('Home');
    userEvent.click(homeBtn);

    const orderBtn = await screen.findByText('주문하기');
    expect(orderBtn).toBeInTheDocument();
  });
});
