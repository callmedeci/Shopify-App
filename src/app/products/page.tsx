import Loading from '@/features/products/components/Loading';
import ProductsList from '@/features/products/components/ProductsList';
import { Suspense } from 'react';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function ProductsPage({ searchParams }: Props) {
  const currSearchParams = await searchParams;
  const { page } = currSearchParams;

  return (
    <div className='flex flex-col my-10 text-zinc-400 max-w-7xl mx-auto'>
      <div className='flex items-center justify-between mb-5'>
        <h1 className='text-5xl font-bold text-zinc-100'>All Products</h1>
      </div>

      <div className='min-h-dvh flex justify-center mt-5 relative'>
        <Suspense fallback={<Loading />}>
          <ProductsList page={page} />
        </Suspense>
      </div>
    </div>
  );
}

export default ProductsPage;
