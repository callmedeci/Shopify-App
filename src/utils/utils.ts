import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function merge(...classNames: string[]) {
  return twMerge(clsx(classNames));
}

export function getBaseUrl() {
  if (typeof window !== 'undefined') return '';

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;

  return 'http://localhost:3000';
}
