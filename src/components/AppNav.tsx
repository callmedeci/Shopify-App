'use client';

import { ShoppingCart, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Contact us', href: '/contact' },
];

function AppNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='ml-auto flex items-center'>
      <ul className='hidden sm:flex items-center gap-4'>
        {links.map((link) => (
          <NavLink key={link.name} link={link} />
        ))}
      </ul>

      {isMenuOpen && (
        <div className='fixed inset-0 bg-zinc-800 bg-opacity-95 z-50 flex flex-col items-center justify-center sm:hidden transition-all duration-300 ease-out opacity-100 translate-y-0 starting:opacity-0 starting:-translate-y-4'>
          <Button
            icon={<X />}
            className='absolute top-4 right-4 text-zinc-200 hover:text-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1'
            onClick={handleCloseMenu}
          />
          <MobileNavLinks links={links} onLinkClick={handleCloseMenu} />
        </div>
      )}

      <Link
        href='/cart'
        className='text-zinc-200 hover:text-indigo-500 transition-colors ml-5'
      >
        <ShoppingCart />
      </Link>

      <Button
        className='ml-2 flex sm:hidden'
        icon={isMenuOpen ? <X /> : <Menu />}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </nav>
  );
}

function MobileNavLinks({
  links,
  onLinkClick,
}: {
  links: { name: string; href: string }[];
  onLinkClick: () => void;
}) {
  return (
    <ul className='flex flex-col gap-8 text-xl'>
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className='text-zinc-200 hover:text-indigo-500 transition-colors block text-center'
            onClick={onLinkClick}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
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
