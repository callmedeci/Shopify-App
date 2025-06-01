import Button from '@/components/Button';
import Stars from '@/components/Stars';
import AddToCartButton from '@/features/cart/components/AddToCartButton';
import { getProductById } from '@/features/products/server/server';
import { ChartBarStacked, CircleSlash, DollarSign } from 'lucide-react';
import Image from 'next/image';

type ParamsType = { params: Promise<{ productId: string }> };

async function ProductDetailsPage({ params }: ParamsType) {
  const { productId } = await params;
  const product = await getProductById(productId);

  if (!product) return <p>Product did not found</p>;

  const {
    category,
    rating,
    stock_status,
    name,
    image,
    price,
    intro,
    description,
  } = product;

  return (
    <section className='grid md:grid-cols-2 gap-5 max-w-7xl mx-auto'>
      <div className='w-full h-96 md:h-170 relative rounded-b-lg shadow overflow-hidden'>
        <Image
          src={image}
          alt={`${name} picture`}
          fill
          className='object-cover'
        />
      </div>

      <div className='mt-5 flex flex-col'>
        <div className='text-sm text-zinc-400 font-medium flex items-center gap-0.5'>
          <ChartBarStacked className='size-5' />
          <p>[{category}]</p>
        </div>

        <h2 className='text-3xl font-semibold text-zinc-100 tracking-wide capitalize mt-1'>
          {name}
        </h2>

        <div className='flex items-center gap-2 text-sm text-zinc-400 mt-2'>
          <Stars rating={rating} />
          <p>(567 Reviews)</p>
        </div>

        <p className='text-zinc-300 mt-5'>{intro}</p>
        <p className='text-zinc-400 font-semibold capitalize leading-loose'>
          {description}
        </p>

        <h3 className='text-3xl font-bold text-zinc-100 mt-5 flex items-center mb-2'>
          <DollarSign className='size-10' />
          <span>{price}</span>
        </h3>

        <div className='mt-auto w-full flex justify-between items-end my-5'>
          {!stock_status ? (
            <Button className='w-full' disabled icon={<CircleSlash />}>
              Out of Stock
            </Button>
          ) : (
            <AddToCartButton product={product} />
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
