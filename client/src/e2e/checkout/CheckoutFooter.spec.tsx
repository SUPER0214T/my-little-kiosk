import { buyOneItem, goToCheckoutFlow, goToPaymentFlow, renderSimplify } from '../../utils/testUtils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('CheckoutFooter', () => {
  it('이전을 클릭하면 Order로 이동한다.', async () => {
    renderSimplify();
    await goToCheckoutFlow(async () => {
      await buyOneItem('티셔츠 237');
    });

    const isCheckoutPage = await screen.findByText('주문 확인');
    expect(isCheckoutPage).toBeInTheDocument();

    const prevBtn = await screen.findByText('이전');
    userEvent.click(prevBtn);

    const couponBtn = await screen.findByText('쿠폰');
    expect(couponBtn).toBeInTheDocument();
  });

  it('결제하기를 클릭하면 Payment로 이동한다.', async () => {
    renderSimplify();
    await goToPaymentFlow(async () => buyOneItem('티셔츠 237'));

    const paymentTitle = await screen.findByText('결제 방법을 선택해주세요.');
    expect(paymentTitle).toBeInTheDocument();
  });
});
