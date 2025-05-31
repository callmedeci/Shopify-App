import { CircleSlash, DollarSign, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import { ProductType } from '../types';

function ProductItem({ product }: { product: ProductType }) {
  const { description, id, image, name, price, rating, stock_status } = product;
  const stars = Array.from({ length: Math.round(rating) });

  return (
    <li>
      <Link
        href={`/products/${id}`}
        className='flex flex-col gap-3 p-4 bg-zinc-900/50 rounded-lg hover:bg-zinc-900 transition-colors h-110 shadow'
      >
        <div className='relative w-full h-48 rounded-lg overflow-hidden'>
          <Image
            src={image}
            alt={`${name} picture`}
            fill
            className='object-cover'
          />
        </div>
        <div>
          <h1 className='text-lg font-semibold text-zinc-50'>{product.name}</h1>
          <p className='text-sm'>{description}</p>

          <p className='text-sm text-zinc-400'>Stock Status: {stock_status}</p>
        </div>

        <div className='mt-auto flex justify-between items-center'>
          <p className='text-zinc-200 font-bold flex items-center gap-0.5'>
            <DollarSign className='size-5' />
            {price}
          </p>
          <div className='flex gap-0.5'>
            {stars.map((_, i) => (
              <Star
                key={i}
                className='size-4 text-indigo-600 fill-indigo-400'
              />
            ))}
          </div>
        </div>

        {stock_status ? (
          <Button disabled icon={<CircleSlash />}>
            Out of Stock
          </Button>
        ) : (
          <Button icon={<ShoppingCart />}>Add to cart</Button>
        )}
      </Link>
    </li>
  );
}

export default ProductItem;
