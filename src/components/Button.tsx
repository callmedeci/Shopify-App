import { merge } from '@/utils/utils';
import Link from 'next/link';
import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  type ReactElement,
  cloneElement,
} from 'react';

type BaseProps = {
  children?: ReactNode;
  icon?: ReactElement<{ className?: string }>;
  variant?: 'ghost' | 'default';
};

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  BaseProps & {
    href?: never;
  };
type ButtonLinkProps = ComponentPropsWithoutRef<'a'> &
  BaseProps & {
    href: string;
  };

function isLinkProps(
  props: ButtonLinkProps | ButtonProps
): props is ButtonLinkProps {
  return 'href' in props && props.href !== undefined;
}

function Button(props: ButtonProps | ButtonLinkProps) {
  const baseStyle =
    'text-zinc-300 px-2 py-2 rounded-lg transition-all shadow focus:outline-none duration-300 flex items-center gap-2 flex items-center justify-center disabled:cursor-not-allowed disabled:shadow-none disabled:opacity-70 cursor-pointer text-xs md:text-base md:px-3 font-medium';

  if (isLinkProps(props)) {
    const { href, className = '', children, icon, ...otherProps } = props;

    const linkStyle =
      'ring-2 ring-indigo-500 hover:shadow-md hover:ring-indigo-600 hover:text-zinc-100 hover:-translate-y-0.5';
    return (
      <Link
        href={href}
        className={merge(baseStyle, linkStyle, className)}
        {...otherProps}
      >
        {icon && cloneElement(icon, { className: 'size-5' })}
        {children}
      </Link>
    );
  }

  const {
    variant = 'default',
    className = '',
    children,
    icon,
    ...otherProps
  } = props;

  const buttonStyle = {
    default:
      'enabled:focus:ring-2 enabled:focus:ring-indigo-600 enabled:hover:text-zinc-100 bg-indigo-500 enabled:hover:bg-indigo-600 enabled:focus:bg-indigo-600',
    ghost:
      'bg-transparent ring-2 ring-indigo-500 text-indigo-500 enabled:hover:ring-zinc-600 enabled:hover:text-zinc-300 disabled:ring-zinc-500 disabled:text-zinc-500',
  };

  return (
    <button
      className={merge(baseStyle, buttonStyle[variant], className)}
      {...otherProps}
    >
      {icon && cloneElement(icon, { className: 'size-4 md:size-5' })}
      {children}
    </button>
  );
}

export default Button;
