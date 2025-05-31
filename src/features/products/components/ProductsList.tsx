import { RESULT_PER_PAGE } from '../config';
import { getProducts } from '../server/server';
import Pagination from './Pagination';
import ProductItem from './ProductItem';

async function ProductsList({ page }: { page: string | string[] | undefined }) {
  const products = await getProducts();
  const currentPage = Number(page) || 1;

  const productPerPage = products.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE
  );

  if (!products || products.length === 0) {
    return <p className='text-zinc-300'>No products found.</p>;
  }

  return (
    <div className='flex flex-col w-full'>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {productPerPage.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>

      <Pagination count={products.length} />
    </div>
  );
}

export default ProductsList;
