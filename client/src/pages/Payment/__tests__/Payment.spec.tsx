import { buyOneItem, goToOrderFlow, renderSimplify } from '../../../utils/testUtils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Payment', () => {
  it('총 결제금액이 표시된다.', async () => {
    renderSimplify();
    await goToOrderFlow();
    await buyOneItem();

    const checkoutBtn = await screen.findByText('결제하기');
    userEvent.click(checkoutBtn);

    const prevBtnInCheckout = await screen.findByText('이전');
    expect(prevBtnInCheckout).toBeInTheDocument();

    // @todo 위의 expect가 없으면 아래 결제하기를 찾을 수 없음. -> 같은 문자라 충돌이 일어나는 듯 함.
    const goToPaymentBtn = await screen.findByText('결제하기');
    userEvent.click(goToPaymentBtn);

    const totalPaymentAmount = await screen.findByText('총 결제금액: 1542');
    expect(totalPaymentAmount).toBeInTheDocument();
  });

  // it('취소 버튼을 클릭하면 결제 정보를 삭제하고 order페이지로 이동한다.', async () => {});
  // it('결제 수단에는 카드, 네이버, 카카오가 존재한다.', async () => {});
});
