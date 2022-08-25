import React from 'react';
import { VisuallyHidden } from 'react-aria';

import Content from './content';
import PrimaryNav from './primary-nav';
import SocialMenu from './social-menu';

const Footer = () => (
  <footer className="p-4 bg-texture color-brando-700 text-sm mt-8 pt-8 border-t-2 border-brando-200 md:p-6 lg:bg-none max-w-screen-xl mx-auto">
    <VisuallyHidden elementType="h2">Site Footer</VisuallyHidden>

    <section className="flex justify-center md:justify-start md:px-4">
      <VisuallyHidden elementType="h3">Supplemental Navigation</VisuallyHidden>
      <nav>
        <PrimaryNav />
      </nav>
    </section>

    <section className="flex justify-center md:justify-start md:px-2">
      <VisuallyHidden elementType="h3">Never Miss a Post!</VisuallyHidden>
      <SocialMenu />
    </section>

    <Content className="p-4 lg:p-6 text-brando-600 text-sm">
      <VisuallyHidden elementType="h3">
        Legal Information and Disclaimers
      </VisuallyHidden>
      <p>
        All Principled Engineer content is Copyright &copy;{' '}
        {new Date().getFullYear()} by Phillip Luther unless otherwise specified.
      </p>
      <p>
        The opinions expressed on the Principled Engineer belong to me, Phillip
        Luther, and do not necessarily reflect the views or opinions of any
        associated organizations or corporate entities.
      </p>
    </Content>
  </footer>
);

export default Footer;
