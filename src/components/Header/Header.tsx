import React from 'react';
import logoTechbiz from '../../assets/logo-techbiz.png';
import { HeaderContainer, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logoTechbiz} alt="Logo Techbiz" />
    </HeaderContainer>
  );
};

export default Header;
