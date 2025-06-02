import { ProductType } from '@/features/products/types';
import { type CartList } from '../types';

type ActionInit = {
  type: 'cart/init';
  payload: CartList;
};

type ActionAddToCart = {
  type: 'cart/add';
  payload: ProductType;
};

type ActionIncreaseCartItem = {
  type: 'cart/item/increase';
  payload: string;
};

type ActionDecreaseCartItem = {
  type: 'cart/item/decrease';
  payload: string;
};

type ActionDeleteFromCart = {
  type: 'cart/delete';
  payload: string;
};

type Action =
  | ActionInit
  | ActionAddToCart
  | ActionIncreaseCartItem
  | ActionDecreaseCartItem
  | ActionDeleteFromCart;

export function cartReducer(state: CartList, action: Action): CartList {
  switch (action.type) {
    case 'cart/init': {
      return [...state, ...action.payload];
    }

    case 'cart/add': {
      const existingItemIndex = state.findIndex(
        (cart) => cart.id === action.payload.id
      );

      if (existingItemIndex === -1)
        return [...state, { ...action.payload, amount: 1 }];
    }

    case 'cart/item/increase': {
      return state.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
    }

    case 'cart/item/decrease': {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 }
          : item
      );
    }

    case 'cart/delete': {
      return state.filter((item) => item.id !== action.payload);
    }

    default:
      return state;
  }
}
