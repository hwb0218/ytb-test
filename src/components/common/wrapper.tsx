import { forwardRef } from 'react';

import { PropsWithClasses } from '../types';

const Wrapper = forwardRef<HTMLDivElement, PropsWithClasses>(
  ({ className, children }, ref) => <div ref={ref} className={className}>{children}</div>,
);

Wrapper.displayName = 'Wrapper';

export default Wrapper;
