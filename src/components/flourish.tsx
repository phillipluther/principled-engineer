import classnames from 'classnames';
import React from 'react';

import Bloom from '../images/flourish-bloom.inline.svg';
import Wheel from '../images/flourish-wheel.inline.svg';

export const flourishes = {
  bloom: {
    component: Bloom,
    width: 148,
    height: 16,
  },
  wheel: {
    component: Wheel,
    width: 518,
    height: 48,
  },
};

export type FlourishProps = {
  variant?: 'bloom' | 'wheel';
  className?: string;
  flipped?: boolean;
};

const Flourish = ({
  variant = 'wheel',
  className,
  flipped = false,
}: FlourishProps) => {
  const { component: Component } = flourishes[variant];

  return (
    <div
      className={classnames(
        { 'rotate-180': flipped },
        'mx-auto',
        'opacity-50',
        className
      )}
    >
      <Component alt="" aria-hidden />
    </div>
  );
};

export default Flourish;