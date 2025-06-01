'use client';

import { createContext, use, useReducer, type ReactNode } from 'react';
import { cartReducer } from './cartReducer';
import { CartList } from '../types';
import { ProductType } from '@/features/products/types';

type CartType = {
  cart: CartList;

  handleAddToCart: (product: ProductType) => void;
  handleDeleteCartItem: (id: string) => void;
  handleIncreaseCartItem: (id: string) => void;
  handleDecreaseCartItem: (id: string) => void;
};

const CartContext = createContext<CartType | null>(null);
const initialState: CartList = [];

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  function handleAddToCart(product: ProductType) {
    dispatch({ type: 'cart/add', payload: product });
  }

  function handleDeleteCartItem(id: string) {
    dispatch({ type: 'cart/delete', payload: id });
  }

  function handleIncreaseCartItem(id: string) {
    dispatch({ type: 'cart/item/increase', payload: id });
  }

  function handleDecreaseCartItem(id: string) {
    dispatch({ type: 'cart/item/decrease', payload: id });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleDeleteCartItem,
        handleIncreaseCartItem,
        handleDecreaseCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = use(CartContext);

  if (!context) throw new Error('hook used outside its provider');

  return context;
}

export default CartProvider;
