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
  <VisuallyHidden id={id} isFocusable>
    {label}
  </VisuallyHidden>
);

const SkipNavTarget = ({ id = skipNavId }: { id?: string }) => <a id={id} />;

export { SkipNavLink, SkipNavTarget };
