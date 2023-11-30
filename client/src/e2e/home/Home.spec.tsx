import { buyOneItem, goToCheckoutFlow, renderSimplify } from '../../utils/testUtils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  it('Home에서는 장바구니가 비어있다.', async () => {
    const { mockStore } = renderSimplify();
    await goToCheckoutFlow(async () => {
      await buyOneItem('티셔츠 237');
    });

    const isCheckoutPage = await screen.findByText('주문 확인');
    expect(isCheckoutPage).toBeInTheDocument();

    const homeBtn = await screen.findByText('Home');
    userEvent.click(homeBtn);

    const masterDownBtn = await screen.findByText('마스터 수신');
    expect(masterDownBtn).toBeInTheDocument();

    const { basketList } = mockStore.getState().basketReducer;
    expect(basketList).toHaveLength(0);
  });
});
