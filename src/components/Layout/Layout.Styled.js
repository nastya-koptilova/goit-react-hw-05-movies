import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  padding: 15px;
  color: black;
  &.active {
    color: green;
    border-bottom: 2px solid green;
  }
`;

export const Nav = styled.nav`
  padding-left: 20px;
`;

export const Header = styled.header`
  border-bottom: 1px solid black;
`;
