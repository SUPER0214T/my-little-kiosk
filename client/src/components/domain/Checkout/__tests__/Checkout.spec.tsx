import { goToOrderFlow, renderSimplify } from '../../../../utils/testUtils.spec';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Checkout', () => {
  it('티셔츠 237 상품을 구매하면 1542원이 표시된다.', async () => {
    renderSimplify();
    await goToOrderFlow();

    const orderItem = await screen.findByText('티셔츠 237');
    userEvent.click(orderItem);

    const confirmBtn = await screen.findByText('구매하기');
    userEvent.click(confirmBtn);

    const checkoutBtn = await screen.findByText('결제하기');
    userEvent.click(checkoutBtn);

    const totalBasketAmount = await screen.findByText('총 주문 금액: 1542원');
    expect(totalBasketAmount).toBeInTheDocument();
  });

  it('세 개를 구매하면 9,908원이 표시된다.', async () => {
    renderSimplify();
    await goToOrderFlow();

    const orderItem = await screen.findByText('티셔츠 237');
    userEvent.click(orderItem);

    const confirmBtn = await screen.findByText('구매하기');
    userEvent.click(confirmBtn);

    const orderItem02 = await screen.findByText('바지 495');
    userEvent.click(orderItem02);

    const confirmBtn02 = await screen.findByText('구매하기');
    userEvent.click(confirmBtn02);

    const orderItem03 = await screen.findByText('원피스 196');
    userEvent.click(orderItem03);

    const confirmBtn03 = await screen.findByText('구매하기');
    userEvent.click(confirmBtn03);

    const checkoutBtn = await screen.findByText('결제하기');
    userEvent.click(checkoutBtn);

    const totalBasketAmount = await screen.findByText('총 주문 금액: 9908원');
    expect(totalBasketAmount).toBeInTheDocument();
  });

  it('checkout 페이지에서 구매한 0번째의 개수를 1개 늘리면 가격이 2배가 된다.', async () => {
    renderSimplify();
    await goToOrderFlow();

    const orderItem = await screen.findByText('티셔츠 237');
    userEvent.click(orderItem);

    const confirmBtn = await screen.findByText('구매하기');
    userEvent.click(confirmBtn);

    const checkoutBtn = await screen.findByText('결제하기');
    userEvent.click(checkoutBtn);

    const totalBasketAmount = await screen.findByText('총 주문 금액: 1542원');
    expect(totalBasketAmount).toBeInTheDocument();

    const plusBtn = await screen.findByText('+');
    userEvent.click(plusBtn);

    const totalBasketAmountAfterBtnClick = await screen.findByText('총 주문 금액: 3084원');
    expect(totalBasketAmountAfterBtnClick).toBeInTheDocument();
  });

  /*@todo 아래 고쳐야 함.*/
  it('checkout 페이지에서 counter가 여러 개 존재해도 구매한 0번째의 개수를 1개 늘리면 가격이 2배가 된다.', async () => {
    renderSimplify();
    await goToOrderFlow();

    const orderItem = await screen.findByText('티셔츠 237');
    userEvent.click(orderItem);

    const confirmBtn = await screen.findByText('구매하기');
    userEvent.click(confirmBtn);

    const orderItem03 = await screen.findByText('원피스 196');
    userEvent.click(orderItem03);

    const confirmBtn03 = await screen.findByText('구매하기');
    userEvent.click(confirmBtn03);

    const checkoutBtn = await screen.findByText('결제하기');
    userEvent.click(checkoutBtn);

    const plusBtn = await screen.findAllByText('+');
    expect(plusBtn[0]).toBeInTheDocument();
    userEvent.click(plusBtn[0]);

    const totalBasketAmount = await screen.findByText('총 주문 금액: 7682원');
    expect(totalBasketAmount).toBeInTheDocument();
  });
});
