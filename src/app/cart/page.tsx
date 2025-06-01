'use client';

import CartList from '@/features/cart/components/CartList';
import { useCartContext } from '@/features/cart/context/CartContext';
import { DollarSign, ShoppingCart } from 'lucide-react';

function CartPage() {
  const { cart } = useCartContext();
  const totalPrice = cart
    .reduce((acc, item) => (acc += item.price * item.amount), 0)
    .toFixed(2);

  return (
    <div className='flex flex-col my-10 max-w-7xl mx-auto'>
      <div className='flex justify-between items-center mb-5 gap-2'>
        <div className='flex items-center gap-2 text-zinc-100'>
          <ShoppingCart className='size-10 md:size-15' />
          <h1 className='text-3xl md:text-5xl font-bold'>Your Cart</h1>
        </div>

        {cart.length > 0 && (
          <div className='flex items-center bg-zinc-700/40 px-3 py-2 rounded-lg shadow text-indigo-500'>
            <div className='flex items-center'>
              <DollarSign className='size-5 md:size-7' />
              <span className='text-lg md:text-xl font-semibold'>
                {totalPrice}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className='mt-5'>
        <CartList />
      </div>
    </div>
  );
}

export default CartPage;
