import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import { customAxios } from './services/axios';
import { API_LIST } from './constants/apiList';
import { mockMasterItemData } from './mocks/handlers';
/**
 * 근데 아래의 것들을 굳이 테스트해야 할까?
 * 그래도 일단 제대로 호출 되었는지는 알아야 하니까 체크를 해보자. 공부도 할 겸
 *
 * 1. / 페이지에는 주문하기 버튼이 존재한다.
 * 2. 마스터 수신 버튼을 클릭하면 redux에 정보가 저장된다.
 * 3.
 */

describe('setup', () => {
  let mockAxios = new MockAdapter(customAxios);
  beforeAll(() => {
    mockAxios = new MockAdapter(customAxios);
    mockAxios.onGet(API_LIST.MASTER.ALL).reply(200, mockMasterItemData);
  });

  afterEach(() => {
    mockAxios.resetHistory();
  });
  // const mockStore = configureStore();
  // const store = mockStore({
  //   master: { itemData: [] },
  // });

  it('메인 페이지에는 주문하기 버튼이 존재한다.', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );

    const orderButton = await screen.findByText('주문하기');
    expect(orderButton).toBeInTheDocument();
  });

  it('메인 페이지에는 마스터 수신 버튼이 존재한다.', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );

    const masterDownButton = await screen.findByText('마스터 수신');
    expect(masterDownButton).toBeInTheDocument();
  });

  it('order 페이지에는 `Order페이지라는` 문구가 존재한다.', async () => {
    render(
      <MemoryRouter initialEntries={['/order']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );

    const orderText = await screen.findByText('Order페이지');
    expect(orderText).toBeInTheDocument();
  });

  // it('master 수신 버튼을 클릭하면 setItemData 액션 타입이 반환된다.', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <Provider store={store}>
  //         <App />
  //       </Provider>
  //     </MemoryRouter>,
  //   );
  //
  //   const masterDownButton = await screen.findByText('마스터 수신');
  //   userEvent.click(masterDownButton);
  //
  //   await waitFor(() => expect(store.getActions()[0]).toHaveProperty('type', 'masterSlice/setItemData'));
  // });

  it('master 수신 버튼을 클릭하면 store에 데이터가 저장된다.', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );

    const masterDownButton = await screen.findByText('마스터 수신');
    userEvent.click(masterDownButton);

    await waitFor(() => expect(store.getState().masterReducer.itemData).toHaveLength(4));
    console.log(store.getState().masterReducer.itemData);
  });
});
