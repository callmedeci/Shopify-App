'use client';

import Button from '@/components/Button';
import { ShoppingCart } from 'lucide-react';
import { useCartContext } from '../context/CartContext';
import ItemCounter from './ItemCounter ';
import { ProductType } from '@/features/products/types';

function AddToCartButton({ product }: { product: ProductType }) {
  const { handleAddToCart, cart } = useCartContext();
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) return <ItemCounter existingItem={existingItem} />;

  return (
    <Button
      className='w-full'
      onClick={() => handleAddToCart(product)}
      icon={<ShoppingCart />}
    >
      Add to cart
    </Button>
  );
}

export default AddToCartButton;
