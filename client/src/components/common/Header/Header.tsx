import React from 'react';
import { HomeBtn, Logo, Wrapper } from './Header.styles';
import { useGoTo } from '../../../hooks/useGoTo';

function Header() {
  const { goToHome } = useGoTo();

  const handleHomeBtnClick = () => {
    goToHome();
  };

  return (
    <Wrapper>
      <HomeBtn onClick={handleHomeBtnClick}>
        <span className="text">Home</span>
      </HomeBtn>
      <Logo>Logo</Logo>
    </Wrapper>
  );
}

export default Header;
