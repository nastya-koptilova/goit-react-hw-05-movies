import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink, Nav, Header } from './Layout.Styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
      <main>
        <Outlet />
      </main>
      </Suspense>
    </>
  );
};

export default Layout;
