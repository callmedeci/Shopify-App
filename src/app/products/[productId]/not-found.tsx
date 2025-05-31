import Button from '@/components/Button';
import { Package, SearchX } from 'lucide-react';

function ProductNotFound() {
  return (
    <div className='flex flex-col items-center justify-center mt-10 gap-6'>
      <SearchX className='size-30 text-zinc-700' />
      <div className='flex flex-col text-center gap-1'>
        <h2 className='text-2xl md:text-3xl font-bold text-zinc-200'>
          No result found
        </h2>
        <p className='text-sm md:text-base text-zinc-400'>
          We can&apos;t find any product matching your search
        </p>
      </div>

      <Button href='/products' icon={<Package />}>
        Go back to products
      </Button>
    </div>
  );
}

export default ProductNotFound;
