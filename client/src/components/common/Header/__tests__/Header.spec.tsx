import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { goToOrderFlow, renderSimplify } from '../../../../utils/testUtils';

describe('Header 컴포넌트', () => {
  it('Home 버튼이 존재한다.', async () => {
    renderSimplify(['/order']);

    const homeBtn = await screen.findByText('Home');
    expect(homeBtn).toBeInTheDocument();
  });

  it('Home 버튼을 클릭하면 Home으로 이동한다.', async () => {
    renderSimplify(['/order']);

    const homeBtn = await screen.findByText('Home');
    userEvent.click(homeBtn);

    const orderBtn = await screen.findByText('주문하기');
    expect(orderBtn).toBeInTheDocument();
  });
});
