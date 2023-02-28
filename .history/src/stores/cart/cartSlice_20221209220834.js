import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
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
      console.log(state.products);
      return {
        // products: state.products.map((product) => {
        //   product._id === action.payload._id
        //     ? { ...product, amount: product.amount + 1 }
        //     : product;
        // }),
        products: [state.products[0].name],
      };
    },
    decrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) => {
          product._id === action.payload._id
            ? { ...product, amount: product.amount - 1 }
            : product;
        }),
      };
    },
  },
});

export const cartProducts = (state) => state.cart.products;
export const {
  addToCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;
export default cartSlice.reducer;