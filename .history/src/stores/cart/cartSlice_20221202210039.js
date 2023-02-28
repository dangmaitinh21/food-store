import { createSlice } from '@reduxjs/toolkit';

const initState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initState,
  reducers: {
    addToCart: (state, action) => {
      return {
        products: [...state.products, { ...action.payload, amount: 1 }],
      };
    },
    clearCart: (state) => {
      return {
        products: [],
      };
    },
    incrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) => {
          product.id === action.payload.id
            ? { ...product, amount: product.amount + 1 }
            : product;
        }),
      };
    },
    decrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) => {
          product.id === action.payload.id
            ? { ...product, amount: product.amount - 1 }
            : product;
        }),
      };
    },
  },
});
