import React from 'react';
import classnames from 'classnames';

import * as styles from './content.module.css';

export type ContentProps = {
  compact?: boolean;
  className?: string;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  [key: string]: unknown;
};

const Content = ({
  children,
  compact: isCompact = false,
  className,
  as: Tag = 'section',
  ...props
}: ContentProps) => {
  return (
    <Tag
      className={classnames(
        { [styles.compact]: isCompact, [styles.wrapper]: !isCompact },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Content;
