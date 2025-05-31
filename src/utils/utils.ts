import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function merge(...classNames: string[]) {
  return twMerge(clsx(classNames));
}
