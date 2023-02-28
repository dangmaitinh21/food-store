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
    const res = await fetch('http://localhost:8080/api/products-by-categories');
    const data = await res.json();
    return data;
  }
);

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
export const selectAllProducts = (state) => state.products;
