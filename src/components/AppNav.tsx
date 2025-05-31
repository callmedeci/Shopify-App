import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Contact us', href: '/contact' },
];

function AppNav() {
  return (
    <nav className='ml-auto flex items-center gap-4'>
      <ul className='hidden sm:flex items-center gap-4'>
        {links.map((link) => (
          <NavLink key={link.name} link={link} />
        ))}
      </ul>

      <Link
        href='/cart'
        className='text-zinc-200 hover:text-indigo-500 transition-colors ml-5'
      >
        <ShoppingCart />
      </Link>
    </nav>
  );
}

function NavLink({ link }: { link: { name: string; href: string } }) {
  const { href, name } = link;

  return (
    <li className='text-zinc-200 hover:text-indigo-500 transition-colors'>
      <Link href={href}>{name}</Link>
    </li>
  );
}

export default AppNav;
