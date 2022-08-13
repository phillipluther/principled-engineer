import React from 'react';
import { VisuallyHidden } from 'react-aria';
import classnames from 'classnames';
import PrimaryNav from '../primary-nav';
import SocialMenu from '../social-menu';

import * as styles from './footer.module.css';
import { contained, padded, textified } from '../../style-utils.module.css';

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

    <section className={classnames(textified, padded, styles.legal)}>
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
    </section>
  </footer>
);

export default Footer;
