import { RESULT_PER_PAGE } from '../config';
import { getProducts } from '../server/server';
import { getProductsByQuery, getProductsPerPage } from '../utils/utils';
import Pagination from './Pagination';
import ProductItem from './ProductItem';

type ProductsListProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function ProductsList({ searchParams }: ProductsListProps) {
  const products = await getProducts();
  const { page, query } = searchParams;

  const searchedProducts = getProductsByQuery(query, products);
  const productsPerPage = getProductsPerPage(query, page, searchedProducts);

  if (!productsPerPage || productsPerPage.length === 0) {
    return <p className='text-zinc-300'>No products found.</p>;
  }

  return (
    <div className='flex flex-col w-full'>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {productsPerPage.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>

      {searchedProducts.length >= RESULT_PER_PAGE && (
        <Pagination count={products.length} />
      )}
    </div>
  );
}

export default ProductsList;
