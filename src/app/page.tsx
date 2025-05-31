import Button from '@/components/Button';
import { Shirt } from 'lucide-react';

function Homepage() {
  return (
    <div className='flex flex-col items-center justify-center mt-48 max-w-xl mx-auto text-center text-zinc-400 gap-3'>
      <h1 className='text-5xl font-bold text-zinc-100'>
        Welcome to My Shopify
      </h1>
      <p>
        This is a simple e-commerce application built with Next.js and React.
        Explore our products and enjoy shopping!
      </p>
      <Button href='/products' icon={<Shirt />}>
        Borwse our products
      </Button>
    </div>
  );
}

export default Homepage;
