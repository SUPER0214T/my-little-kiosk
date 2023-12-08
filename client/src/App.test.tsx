import { renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import { customAxios } from './services/axios';
import { API_LIST } from './constants/apiList';
import { mockMasterItemData } from './mocks/handlers';
import { goToOrderFlow, renderSimplify } from './utils/testUtils';
import { useGetQueryData } from './hooks/useReactQuery';
import { ItemData, MasterData } from './types/master';
import { QueryClient, QueryClientProvider } from 'react-query';
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

  it('메인 페이지에는 주문하기 버튼이 존재한다.', async () => {
    renderSimplify();

    const orderButton = await screen.findByText('주문하기');
    expect(orderButton).toBeInTheDocument();
  });

  it('메인 페이지에는 마스터 수신 버튼이 존재한다.', async () => {
    renderSimplify();

    const masterDownButton = await screen.findByText('마스터 수신');
    expect(masterDownButton).toBeInTheDocument();
  });

  it('order 페이지에는 `티셔츠 237`이 존재한다.', async () => {
    renderSimplify();
    await goToOrderFlow();

    const orderText = await screen.findByText('티셔츠 237');
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

  it('master 수신 버튼을 클릭하면 react query의 cache에 데이터가 저장된다.', async () => {
    const { queryClient } = renderSimplify();
    const masterDownButton = await screen.findByText('마스터 수신');
    userEvent.click(masterDownButton);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useGetQueryData<{ data: MasterData }>(['home', 'getMasterAll']), {
      wrapper,
    });

    console.log('result: ', result.current?.data);
    await waitFor(() => expect(result.current?.data.ITEM_DATA).toHaveLength(4));
  });
});
