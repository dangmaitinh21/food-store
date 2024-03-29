import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  error: null,
  status: 'idle',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = [...action.payload.data];
      state.status = 'fulfilled';
    }),
      builder.addCase(fetchProducts.pending, (state, aciton) => {
        state.status = 'pending';
      });
  },
});

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch(
      `${window.location.protocol}//${window.location.hostname}:${
        import.meta.env.VITE_PORT
      }/api/products-by-categories`
    );
    const data = await res.json();
    return data;
  }
);

export const selectAllProducts = (state) => state.products;
export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
