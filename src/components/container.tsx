import classnames from 'classnames';
import React from 'react';

export type ContainerProps = {
  as?: keyof JSX.IntrinsicElements;
  noX?: boolean;
  noY?: boolean;
  noTop?: boolean;
  noRight?: boolean;
  noBottom?: boolean;
  noLeft?: boolean;
  centered?: boolean;
  padless?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Container = ({
  as: Tag = 'div',
  noX = false,
  noY = false,
  noTop = false,
  noRight = false,
  noBottom = false,
  noLeft = false,
  padless = false,
  centered = true,
  children,
  className,
  ...props
}: ContainerProps) => {
  const paddingClasses: string[] = [];
  const sizings = {
    base: 5,
    sm: 8,
  };

  if (!padless) {
    if (!noY) {
      if (!noTop) {
        paddingClasses.push(`pt-${sizings.base}`);
        paddingClasses.push(`sm:pt-${sizings.sm}`);
      }

      if (!noBottom) {
        paddingClasses.push(`pb-${sizings.base}`);
        paddingClasses.push(`sm:pb-${sizings.sm}`);
      }
    }

    if (!noX) {
      if (!noLeft) {
        paddingClasses.push(`pl-${sizings.base}`);
        paddingClasses.push(`sm:pl-${sizings.sm}`);
      }

      if (!noRight) {
        paddingClasses.push(`pr-${sizings.base}`);
        paddingClasses.push(`sm:pr-${sizings.sm}`);
      }
    }
  }

  return (
    <Tag
      className={classnames(
        'max-w-screen-md',
        {
          'mx-auto': centered,
        },
        paddingClasses,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Container;
