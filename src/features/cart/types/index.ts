import { ProductType } from '@/features/products/types';

export type CartItem = ProductType & { amount: number };
export type CartList = CartItem[];
