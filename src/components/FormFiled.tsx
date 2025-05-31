import { type InputHTMLAttributes } from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

import { merge } from '@/utils/utils';
import Input from './Input';

type FormFiledProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  className?: string;
  register?: UseFormRegisterReturn;
};

function FormFiled({
  error,
  register,
  className = '',
  ...props
}: FormFiledProps) {
  return (
    <div className={merge('flex flex-col gap-2', className)}>
      <Input
        className={`${
          error
            ? 'ring-rose-700 dark:ring-rose-700 placeholder:text-rose-500'
            : ''
        }`}
        {...props}
        {...register}
      />
      {error && (
        <span className='text-sm font-semibold text-red-500 ml-2'>{error}</span>
      )}
    </div>
  );
}

export default FormFiled;
