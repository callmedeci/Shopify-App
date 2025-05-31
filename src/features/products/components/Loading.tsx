import Spinner from '@/components/Spinner';

function Loading() {
  return (
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 text-zinc-200'>
      <Spinner />
      <span>Loading products...</span>
    </div>
  );
}

export default Loading;
