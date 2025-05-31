import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function merge(...classNames: string[]) {
  return twMerge(clsx(classNames));
}

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}
