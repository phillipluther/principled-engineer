import classnames from 'classnames';
import * as React from 'react';

import { contained, padded } from '../style-utils.module.css';
import Footer from './footer';
import Header from './header';
import { SkipNavTarget } from './skip-nav';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />

      <main className={classnames(padded, contained)}>
        <SkipNavTarget />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
