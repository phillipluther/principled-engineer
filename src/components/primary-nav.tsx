import classnames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

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
  <ul className={classnames('flex', 'flex-wrap', className)} {...props}>
    {primaryNavItems.map(({ label, href }) =>
      !showHome && href === '/' ? null : (
        <li
          className="flex justify-center align-middle relative px-2"
          key={href}
        >
          <Link to={href} className="text-lg w-full text-center leading-[48px]">
            {label}
          </Link>
        </li>
      )
    )}
  </ul>
);

export default PrimaryNav;