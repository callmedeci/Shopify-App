'use client';

import FormFiled from '@/components/FormFiled';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { sendContactMessage } from '../action/sendMessage';
import { contactSchema } from '../schema';
import { ContactFormValues } from '../types';
import Button from '@/components/Button';
import { LoaderCircle, Send } from 'lucide-react';

function ContactForm() {
  const { formState, register, handleSubmit } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const pending = formState.isSubmitting;
  console.log(pending);

  useEffect(
    function () {
      if (formState.isSubmitSuccessful)
        toast.success('Message sent successfully');
      if (!formState.isSubmitSuccessful)
        toast.error('Something happened, try again');
    },
    [formState.isSubmitSuccessful]
  );

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    sendContactMessage(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-5 mt-5'
    >
      <FormFiled
        disabled={pending}
        {...register('name')}
        defaultValue={formState.defaultValues?.name}
        error={formState.errors.name?.message}
        placeholder='Your name'
      />

      <FormFiled
        disabled={pending}
        {...register('email')}
        defaultValue={formState.defaultValues?.email}
        error={formState.errors.email?.message}
        name='email'
        placeholder='Your email'
      />

      <div className='flex flex-col gap-2'>
        <textarea
          {...register('message')}
          disabled={pending}
          defaultValue={formState.defaultValues?.message}
          placeholder='Your Message'
          className='bg-inherit ring-2 ring-zinc-700 rounded-lg px-5 py-3 focus:outline-none focus:ring-indigo-500 transition-all shadow text-zinc-100 w-full h-36 disabled:cursor-not-allowed disabled:opacity-70'
        />

        {formState.errors.message?.message && (
          <span className='text-sm font-semibold text-red-500 ml-2'>
            {formState.errors.message.message}
          </span>
        )}
      </div>

      <Button
        className='w-max self-end'
        icon={pending ? <LoaderCircle className='animate-spin' /> : <Send />}
      >
        {pending ? 'Sending....' : 'Send Message'}
      </Button>
    </form>
  );
}

export default ContactForm;
