import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  margin-bottom: 5rem;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #ffffff3b;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & img {
    width: 30px;
  }
`;

export const LinkContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: white;

  &.active {
    color: #f1c40f;
  }
`;
