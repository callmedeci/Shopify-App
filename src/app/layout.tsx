import { Inter } from 'next/font/google';
import { type ReactNode } from 'react';

import './globals.css';
import Header from '@/components/Header';
import CartProvider from '@/features/cart/context/CartContext';

export const metadata = {
  title: {
    default: 'Shopify App',
    template: '%s | My Shopify App',
  },
  description: 'A simple Shopify app built with Next.js',
};

const defaultFont = Inter({
  subsets: ['latin'],
  display: 'swap',
});

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${defaultFont} bg-zinc-800 text-zinc-100 w-full min-h-dvh`}
      >
        <Header />

        <main className='px-2 md:px-5'>
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
