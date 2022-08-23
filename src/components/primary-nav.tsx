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
  <ul
    className={classnames('flex', 'flex-wrap', 'text-lg', className)}
    {...props}
  >
    {primaryNavItems.map(({ label, href }) =>
      !showHome && href === '/' ? null : (
        <li
          className="flex justify-center items-center relative px-2 font-display"
          key={href}
        >
          <Link to={href} className="w-full text-center leading-[48px]">
            {label}
          </Link>
        </li>
      )
    )}
  </ul>
);

export default PrimaryNav;
