import { ProductsType, ProductType } from '../types';

export async function getProducts(): Promise<ProductsType> {
  const res = await fetch('http://localhost:8080/products');
  if (res.status !== 200) throw new Error('Failed to fetch products');

  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data;
}

export async function getProductById(id: string): Promise<ProductType> {
  const res = await fetch(`http://localhost:8080/products/${id}`);
  if (res.status !== 200) throw new Error('Failed to fetch product');

  const data = await res.json();

  return data;
}
