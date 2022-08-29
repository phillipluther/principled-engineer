import * as React from 'react';

import Container from './container';
import Footer from './footer';
import Header from './header';
import { SkipNavTarget } from './skip-nav';

const Layout = ({ location, children }) => {
  /* @ts-ignore */
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div data-is-root-path={isRootPath}>
      <Header />

      <Container as="main">
        <SkipNavTarget />
        {children}
      </Container>

      <Footer />
    </div>
  );
};

export default Layout;
