import { goToOrderFlow, renderSimplify } from '../../utils/testUtils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('OrderFooter', () => {
  it('장바구니에 1개 이상의 상품이 있을 경우 결제하기를 클릭하면 checkout 페이지로 이동한다.', async () => {
    renderSimplify();
    await goToOrderFlow();

    const orderItem = await screen.findByText('티셔츠 237');
    userEvent.click(orderItem);

    const confirmBtn = await screen.findByText('구매하기');
    userEvent.click(confirmBtn);

    const checkoutBtn = await screen.findByText('결제하기');
    userEvent.click(checkoutBtn);

    const couponBtn = await screen.findByText('쿠폰');
    expect(couponBtn).not.toBeInTheDocument();
  });

  it('장바구니에 아무런 상품도 없을 경우 checkout 페이지로 이동하지 않는다.', async () => {
    const { mockStore } = renderSimplify();
    await goToOrderFlow();

    console.log(mockStore.getState().basketReducer);

    const checkoutBtn = await screen.findByText('결제하기');
    userEvent.click(checkoutBtn);

    const couponBtn = await screen.findByText('쿠폰');
    expect(couponBtn).toBeInTheDocument();
  });
});
