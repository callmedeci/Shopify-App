import { Store } from 'lucide-react';
import Link from 'next/link';

function Logo() {
  return (
    <Link href='/'>
      <div className='flex items-center gap-2'>
        <Store className='size-10 md:size-14 text-indigo-500' />
        <p className='text-2xl md:text-4xl font-bold'>Shopify</p>
      </div>
    </Link>
  );
}

export default Logo;
