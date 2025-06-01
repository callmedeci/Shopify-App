import { RESULT_PER_PAGE } from '../config';
import { type ProductsType } from '../types';

type QueryArg = string | string[] | undefined;

export function getProductsByQuery(query: QueryArg, products: ProductsType) {
  const searchQuery = String(query).trim().toLowerCase();
  const searchedProducts = query
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery) ||
          product.description.toLowerCase().includes(searchQuery) ||
          product.category.toLowerCase().includes(searchQuery)
      )
    : products;

  return searchedProducts;
}

export function getProductsPerPage(
  query: QueryArg,
  page: QueryArg,
  products: ProductsType
) {
  const currentPage = query ? 1 : Number(page) || 1;
  const productsPerPage = products.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE
  );
  return productsPerPage;
}
