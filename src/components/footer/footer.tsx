import classnames from 'classnames';
import React from 'react';
import { VisuallyHidden } from 'react-aria';

import { contained, padded } from '../../style-utils.module.css';
import Content from '../content';
import PrimaryNav from '../primary-nav';
import SocialMenu from '../social-menu';
import * as styles from './footer.module.css';

const Footer = () => (
  <footer className={classnames(padded, contained, styles.footer)}>
    <VisuallyHidden elementType="h2">Site Footer</VisuallyHidden>

    <section className={classnames(styles.centered, styles.nav)}>
      <VisuallyHidden elementType="h3">Supplemental Navigation</VisuallyHidden>
      <nav>
        <PrimaryNav />
      </nav>
    </section>

    <section className={classnames(styles.centered)}>
      <VisuallyHidden elementType="h3">Never Miss a Post!</VisuallyHidden>
      <SocialMenu />
    </section>

    <Content className={classnames(padded, styles.legal)}>
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
