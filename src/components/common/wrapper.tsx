import { PropsWithClasses } from '../types';

export default function Wrapper({ children, className }: PropsWithClasses) {
  return <div className={className}>{children}</div>;
}
