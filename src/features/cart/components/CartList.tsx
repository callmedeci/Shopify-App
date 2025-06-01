import { Frown, Smile } from 'lucide-react';
import { useCartContext } from '../context/CartContext';
import CartItem from './CartItem';

function CartList() {
  const { cart } = useCartContext();

  if (cart.length === 0)
    return (
      <div>
        <h4 className='text-2xl flex items-center gap-1 font-medium'>
          The cart is empty <Frown className='text-indigo-500' />
        </h4>
        <p className='text-zinc-300 flex items-center gap-1 text-sm'>
          feel free to explore and buy somthing <Smile className='size-5' />
        </p>
      </div>
    );

  return (
    <ul className='flex flex-col gap-3'>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default CartList;
