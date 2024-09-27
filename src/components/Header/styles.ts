import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 87px;
  background-color: var(--header);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 60px;
`;
