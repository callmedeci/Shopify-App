import { notFound } from 'next/navigation';
import { ProductsType, ProductType } from '../types';
import { getBaseUrl } from '@/utils/utils';

const baseUrl = getBaseUrl();

export async function getProducts(): Promise<ProductsType> {
  const res = await fetch(`${baseUrl}/api/products`);
  if (res.status !== 200) throw new Error('Failed to fetch products');

  const data = await res.json();

  return data;
}

export async function getProductById(id: string): Promise<ProductType> {
  const res = await fetch(`${baseUrl}/api/products/${id}`);
  if (res.status !== 200) notFound();

  const data = await res.json();

  return data;
}
