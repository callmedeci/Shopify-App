'use client';

import { ServerCrash } from 'lucide-react';

function error() {
  return (
    <div className='min-h-dvh flex flex-col items-center justify-center gap-2'>
      <div className='flex flex-col items-center justify-center mt-10 gap-6'>
        <ServerCrash className='size-30 text-zinc-700' />
        <div className='flex flex-col text-center gap-1'>
          <h2 className='text-2xl md:text-3xl font-bold text-zinc-200'>
            something bad happend!
          </h2>
          <p className='text-sm md:text-base text-zinc-400'>
            Something went wrong. Try refreshing the page or come back later.
          </p>
        </div>
      </div>
    </div>
  );
}

export default error;
