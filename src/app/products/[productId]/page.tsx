import Button from '@/components/Button';
import Stars from '@/components/Stars';
import { getProductById, getProducts } from '@/features/products/server/server';
import {
  ChartBarStacked,
  CircleSlash,
  DollarSign,
  MinusCircle,
  PlusCircle,
  ShoppingCart,
} from 'lucide-react';
import Image from 'next/image';

export async function generateStaticParams() {
  const products = await getProducts();
  const productIds = products.map((product) => ({
    productId: product.id,
  }));

  return productIds;
}

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
    <section className='grid md:grid-cols-2 gap-5'>
      <div className='w-full h-170 relative rounded-b-lg shadow overflow-hidden'>
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

        <h3 className='text-3xl font-bold text-zinc-100 mt-5 flex items-center'>
          <DollarSign className='size-9' />
          {price}
        </h3>

        <div className='mt-auto w-full flex justify-between items-end'>
          <div className='flex flex-col gap-2'>
            <p className='text-zinc-300 font-semibold'>Quantity:</p>
            <div className='flex gap-2 ring-2 ring-zinc-600 rounded-lg text-zinc-400 shadow'>
              <Button
                disabled={!stock_status}
                variant='ghost'
                icon={<MinusCircle />}
              />
              <span className='text-xs md:text-sm font-bold px-3 py-2'>1</span>
              <Button
                disabled={!stock_status}
                variant='ghost'
                icon={<PlusCircle />}
              />
            </div>
          </div>

          {!stock_status ? (
            <Button disabled icon={<CircleSlash />}>
              Out of Stock
            </Button>
          ) : (
            <Button icon={<ShoppingCart />}>Add to cart</Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
