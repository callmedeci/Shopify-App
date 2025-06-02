import { ChartBarStacked, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { CartItem as CartItemType } from '../types';
import ItemCounter from './ItemCounter ';

function CartItem({ item }: { item: CartItemType }) {
  const { name, category, description, price, amount, id } = item;
  const totalPrice = (price * amount).toFixed(2);

  return (
    <li className='relative grid grid-cols-2 sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-zinc-700/70 ring-2 ring-zinc-600 hover:ring-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300'>
      <Link
        href={`/products/${id}`}
        className='flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 focus:outline-none col-span-2'
      >
        <div className='flex flex-col items-start gap-1 flex-grow'>
          <div className='flex items-center gap-2 text-sm font-medium text-indigo-400'>
            <ChartBarStacked className='size-4' />
            <span className='uppercase tracking-wide'>{category}</span>
          </div>
          <h3 className='text-xl font-bold text-zinc-100 mt-1'>{name}</h3>
          <p className='text-zinc-300 text-sm leading-relaxed mt-2 line-clamp-2'>
            {description}
          </p>
        </div>

        <div className='w-full sm:w-max flex flex-row sm:flex-col items-end gap-1 sm:ml-auto mt-4 sm:mt-0 justify-between'>
          <div className='flex items-center gap-1 text-2xl font-bold text-zinc-50'>
            <DollarSign className='size-6' />
            <span>{totalPrice}</span>
          </div>
          <p className='text-zinc-400 text-sm mt-0.5'>
            ({price} x {amount})
          </p>
        </div>
      </Link>

      <div className='flex-1 col-span-full'>
        <ItemCounter existingItem={item} />
      </div>
    </li>
  );
}

export default CartItem;
