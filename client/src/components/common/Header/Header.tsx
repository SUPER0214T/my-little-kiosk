import React from 'react';
import { HomeBtn, Logo, Wrapper } from './Header.styles';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

function Header() {
  const navigate = useNavigate();

  const handleHomeBtnClick = () => {
    navigate(ROUTES.HOME);
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
