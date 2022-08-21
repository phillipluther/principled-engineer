import classnames from 'classnames';
import React from 'react';

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
        'prose prose-headings:font-display prose-headings:font-medium',
        { 'prose-lg': !isCompact, 'prose-base': isCompact },
        'prose-brando',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Content;
