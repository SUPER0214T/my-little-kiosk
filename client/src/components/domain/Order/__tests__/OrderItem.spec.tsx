import MockAdapter from 'axios-mock-adapter';
import { customAxios } from '../../../../services/axios';
import { API_LIST } from '../../../../constants/apiList';
import { mockMasterItemData } from '../../../../mocks/handlers';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { goToOrderFlow, renderSimplify } from '../../../../utils/testUtils';
import { store } from '../../../../redux/store';

describe('OrderItem', () => {
  let mockAxios = new MockAdapter(customAxios);
  beforeAll(() => {
    mockAxios = new MockAdapter(customAxios);
    mockAxios.onGet(API_LIST.MASTER.ALL).reply(200, mockMasterItemData);
  });

  it('orderItem을 클릭하면 상세 페이지로 이동한다.', async () => {
    renderSimplify();
    await goToOrderFlow();

    const firstOrderItem = await screen.findByText('티셔츠 237');
    userEvent.click(firstOrderItem);

    const itemCd = await screen.findByText('37');
    expect(itemCd).toBeInTheDocument();
  });

  it('제품 상세 페이지에서 "취소"를 누르면 order로 이동한다.', async () => {
    renderSimplify();
    await goToOrderFlow();

    const firstOrderItem = await screen.findByText('티셔츠 237');
    userEvent.click(firstOrderItem);

    const itemCd = await screen.findByText('37');
    expect(itemCd).toBeInTheDocument();

    const cancelBtn = await screen.findByText('취소');
    userEvent.click(cancelBtn);

    const orderList = await screen.findByTestId('order-list');

    expect(orderList).toBeInTheDocument();
  });

  it('제품 상세 페이지에서 "구매하기"를 누르면 order로 이동하고 해당 상품을 store에 등록한다.', async () => {
    renderSimplify();
    await goToOrderFlow();

    const firstOrderItem = await screen.findByText('티셔츠 237');
    userEvent.click(firstOrderItem);

    const itemCd = await screen.findByText('37');
    expect(itemCd).toBeInTheDocument();

    const confirmBtn = await screen.findByText('구매하기');
    userEvent.click(confirmBtn);

    const orderList = await screen.findByTestId('order-list');
    expect(orderList).toBeInTheDocument();

    // @todo dispatch 잘 되었는지 확인해야 함.
    //   아래의 getState로 확인하는 방법 이외의 방법은 없을까?
    //   toHaveProperty 이외의 다른 괜찮은 방법이 없을까?
    expect(store.getState().basketReducer.basketList[0]).toHaveProperty('itemCd', '37');
  });
});
