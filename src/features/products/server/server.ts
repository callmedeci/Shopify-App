import { notFound } from 'next/navigation';
import { ProductsType, ProductType } from '../types';
import { getBaseUrl } from '@/utils/utils';

export async function getProducts(): Promise<ProductsType> {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/products`, { cache: 'no-store' });
  if (res.status !== 200) throw new Error('Failed to fetch products');

  const data = await res.json();

  return data;
}

export async function getProductById(id: string): Promise<ProductType> {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/products/${id}`, {
    cache: 'no-store',
  });
  if (res.status !== 200) notFound();

  const data = await res.json();

  return data;
}
