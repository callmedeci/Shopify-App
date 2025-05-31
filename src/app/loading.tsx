import Spinner from '@/components/Spinner';

function Loading() {
  return (
    <div className='flex items-center justify-center h-dvh text-zinc-200 gap-2'>
      <Spinner />
      Loading...
    </div>
  );
}

export default Loading;
