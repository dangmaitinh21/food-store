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
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch('http://localhost:8080/api/products-by-categories');
    const data = res.json();
    return data;
  }
);
export const selectAllProducts = (state) => state.products;
