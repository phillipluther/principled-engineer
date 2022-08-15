import React from 'react';
import classnames from 'classnames';

import * as styles from './content.module.css';

export type ContentProps = {
  isBlogPost?: boolean;
  className?: string;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  [key: string]: unknown;
};

const Content = ({
  children,
  isBlogPost = false,
  className,
  as: Tag = 'section',
  ...props
}: ContentProps) => {
  return (
    <Tag
      className={classnames(
        { [styles.post]: isBlogPost, [styles.wrapper]: !isBlogPost },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Content;
