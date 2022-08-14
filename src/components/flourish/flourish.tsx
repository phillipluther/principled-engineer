import React from 'react';
import classnames from 'classnames';
import Bloom from '../../images/flourish-bloom.inline.svg';
import Wheel from '../../images/flourish-wheel.inline.svg';

import * as styles from './flourish.module.css';

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
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'bloom' | 'wheel';
  className?: string;
};

const widthsBySize = {
  xs: 160,
  sm: 240,
  md: 560,
  lg: 800,
};

const Flourish = ({
  variant = 'wheel',
  size = 'md',
  className,
}: FlourishProps) => {
  const {
    component: Component,
    width: nativeWidth,
    height: nativeHeight,
  } = flourishes[variant];
  const width = widthsBySize[size];
  const height = (nativeHeight * width) / nativeWidth;

  return (
    <div className={classnames(styles.wrapper, styles[size], className)}>
      <Component alt="" width={width} height={height} aria-hidden />
    </div>
  );
};

export default Flourish;
