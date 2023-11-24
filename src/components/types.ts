import { PropsWithChildren } from 'react';

export type PropsWithClasses<T = unknown> = {
  className?: string
} & PropsWithChildren<T>
