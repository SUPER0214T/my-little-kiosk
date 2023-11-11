import React from 'react';
import * as S from './Counter.styles';

interface CounterProps {
  handlePlusClick: () => void;
  handleMinusClick: () => void;
  qty: number;
}

function Counter({ qty, handleMinusClick, handlePlusClick }: CounterProps) {
  return (
    <S.Layout className="counter">
      <S.MinusBtn onClick={handleMinusClick}>-</S.MinusBtn>
      <div>{qty}</div>
      <S.PlusBtn onClick={handlePlusClick}>+</S.PlusBtn>
    </S.Layout>
  );
}

export default Counter;
