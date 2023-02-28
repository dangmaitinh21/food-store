import { combineReducers } from 'redux';
import cartReducer from './cart/cartSlice';
import productsSlice from './menu/productsSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsSlice,
});

export default rootReducer;
