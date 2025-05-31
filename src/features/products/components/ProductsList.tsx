import { RESULT_PER_PAGE } from '../config';
import { getProducts } from '../server/server';
import Pagination from './Pagination';
import ProductItem from './ProductItem';

type ProductsListProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function ProductsList({ searchParams }: ProductsListProps) {
  const products = await getProducts();
  const { page, query } = searchParams;

  //--- Handle Search ---
  const searchQuery = String(query).trim().toLowerCase();
  const searchedProducts = query
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery) ||
          product.description.toLowerCase().includes(searchQuery) ||
          product.category.toLowerCase().includes(searchQuery)
      )
    : products;

  //--- Handle Page Navihation ---
  const currentPage = query ? 1 : Number(page) || 1;
  const productsPerPage = searchedProducts.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE
  );

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
