import NextImage from 'next/image';
import classnames from 'classnames';
import styles from './flourish.module.css';

export const flourishes = {
  bloom: {
    src: '/images/divider-flourish-alt.svg',
    width: 148,
    height: 16,
  },
  wheel: {
    src: '/images/divider-flourish.svg',
    width: 518,
    height: 48,
  },
};

export type FlourishProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'bloom' | 'wheel';
  className?: string;
};

const widthsBySize = {
  sm: 240,
  md: 560,
  lg: 800,
};

const Flourish = ({ variant = 'wheel', size = 'md', className }: FlourishProps) => {
  const { src, width: nativeWidth, height: nativeHeight } = flourishes[variant];
  const width = widthsBySize[size];
  const height = (nativeHeight * width) / nativeWidth;

  return (
    <div className={classnames(styles.wrapper, styles[size], className)}>
      <NextImage src={src} alt="" width={width} height={height} />
    </div>
  );
};

export default Flourish;
