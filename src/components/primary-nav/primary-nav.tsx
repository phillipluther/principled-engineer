import classnames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import * as styles from './primary-nav.module.css';

export type PrimaryNavProps = {
  showHome?: boolean;
  className?: string;
  [key: string]: unknown;
};

export type PrimaryNavItemProps = {
  label: string;
  href: string;
};

export const primaryNavItems: PrimaryNavItemProps[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const PrimaryNav = ({
  showHome = true,
  className,
  ...props
}: PrimaryNavProps) => (
  <ul className={classnames(styles.wrapper, className)} {...props}>
    {primaryNavItems.map(({ label, href }) =>
      !showHome && href === '/' ? null : (
        <li className={styles.item} key={href}>
          <Link to={href} className={styles.link}>
            {label}
          </Link>
        </li>
      )
    )}
  </ul>
);

export default PrimaryNav;
