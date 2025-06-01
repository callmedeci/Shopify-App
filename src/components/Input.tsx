import { merge } from '@/utils/utils';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
};

function Input({
  variant = 'primary',
  className = '',
  icon,
  ...props
}: InputProps) {
  const inputStyle = {
    primary:
      'bg-zinc-700/70 text-sm sm:text-base text-zinc-300 placeholder:text-zinc-300/50 ring-indigo-500 focus-within:text-zinc-100',
    secondary:
      'bg-zinc-700/70 text-sm sm:text-base md:text-xl text-zinc-300 placeholder:text-zinc-400/50 ring-zinc-500',
  };

  return (
    <div
      className={merge(
        inputStyle[variant],
        className,
        'flex cursor-text items-center gap-2 rounded-lg px-3 py-2 shadow transition-all duration-300 focus-within:ring-2 focus-within:outline-none disabled:opacity-70 md:min-w-96'
      )}
    >
      {icon && icon}
      <input
        className='w-full outline-none placeholder:capitalize'
        {...props}
      />
    </div>
  );
}

export default Input;
