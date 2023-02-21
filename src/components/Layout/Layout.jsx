import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink, Nav, Header } from './Layout.Styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
