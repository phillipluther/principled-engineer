import React from 'react';
import { VisuallyHidden } from 'react-aria';

import Content from './content';
import PrimaryNav from './primary-nav';
import SocialMenu from './social-menu';

const Footer = () => (
  <footer className="p-4 bg-[url('/images/texture-tile.png')] color-brando-700 text-sm mt-8 pt-8 border-t-2 border-brando-200">
    <VisuallyHidden elementType="h2">Site Footer</VisuallyHidden>

    <section className="flex justify-center">
      <VisuallyHidden elementType="h3">Supplemental Navigation</VisuallyHidden>
      <nav>
        <PrimaryNav />
      </nav>
    </section>

    <section className="flex justify-center">
      <VisuallyHidden elementType="h3">Never Miss a Post!</VisuallyHidden>
      <SocialMenu />
    </section>

    <Content className="p-4 text-brando-600">
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
