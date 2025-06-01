import Button from '@/components/Button';
import { MinusCircle, PlusCircle, Trash } from 'lucide-react';
import { useCartContext } from '../context/CartContext';
import { CartItem } from '../types';

type ItemCounterProps = {
  existingItem: CartItem;
};

function ItemCounter({ existingItem }: ItemCounterProps) {
  const {
    handleIncreaseCartItem,
    handleDecreaseCartItem,
    handleDeleteCartItem,
  } = useCartContext();

  return (
    <div className='w-full flex justify-between items-center gap-5'>
      <div className='flex gap-2 ring-2 ring-zinc-500 rounded-lg text-zinc-300 shadow justify-between'>
        <Button
          disabled={existingItem.amount === 1}
          variant='ghost'
          icon={<MinusCircle />}
          onClick={() => handleDecreaseCartItem(existingItem.id)}
        />

        <span className='text-xs md:text-sm font-bold px-3 py-2'>
          {existingItem.amount}
        </span>

        <Button
          variant='ghost'
          icon={<PlusCircle />}
          onClick={() => handleIncreaseCartItem(existingItem.id)}
        />
      </div>

      <Button
        variant='danger'
        onClick={() => handleDeleteCartItem(existingItem.id)}
        icon={<Trash />}
        className='w-full'
      >
        Remove
      </Button>
    </div>
  );
}

export default ItemCounter;
