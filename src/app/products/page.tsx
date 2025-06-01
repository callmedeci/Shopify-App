import { Suspense } from 'react';

import Loading from '@/features/products/components/Loading';
import ProductsList from '@/features/products/components/ProductsList';
import SearchProductsForm from '@/features/products/components/SearchProductsForm';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function ProductsPage({ searchParams }: Props) {
  const currSearchParams = await searchParams;

  return (
    <div className='flex flex-col my-10 text-zinc-400 max-w-7xl mx-auto'>
      <div className='flex flex-col sm:flex-row justify-between sm:items-center items-start mb-5 gap-2 w-full'>
        <h1 className='text-3xl md:text-5xl font-bold text-zinc-100'>
          All Products
        </h1>

        <SearchProductsForm />
      </div>

      <div className='min-h-dvh flex justify-center mt-5 relative'>
        <Suspense fallback={<Loading />}>
          <ProductsList searchParams={currSearchParams} />
        </Suspense>
      </div>
    </div>
  );
}

export default ProductsPage;
