import * as React from 'react';

import Footer from './footer';
import Header from './header';
import { SkipNavTarget } from './skip-nav';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div data-is-root-path={isRootPath}>
      <Header />

      <main className="padded max-w-screen-xl mx-auto">
        <SkipNavTarget />
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
