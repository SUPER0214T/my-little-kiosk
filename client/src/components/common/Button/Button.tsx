import React from 'react';
import * as S from './Button.styles';

type ButtonProps = {
  children: React.ReactNode;
  handleBtnClick: () => void;
  style: React.CSSProperties;
};

function Button({ children, handleBtnClick, style = {} }: ButtonProps) {
  return (
    <S.Layout onClick={handleBtnClick} style={style}>
      {children}
    </S.Layout>
  );
}

export default Button;
