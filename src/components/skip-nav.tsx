import React from 'react';
import { VisuallyHidden } from 'react-aria';

export const skipNavId = 'skip-nav';

const SkipNavLink = ({
  id = skipNavId,
  label,
}: {
  id?: string;
  label: string;
}) => (
  <VisuallyHidden
    isFocusable
    elementType="a"
    href={`#${id}`}
    className="absolute z-20 p-4 bg-brando-200"
  >
    {label}
  </VisuallyHidden>
);

const SkipNavTarget = ({ id = skipNavId }: { id?: string }) => <a id={id} />;

export { SkipNavLink, SkipNavTarget };
