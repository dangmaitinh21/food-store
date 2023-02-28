import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  selectAllProducts,
} from '../../stores/menu/productsSlice';

function Menu() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    products &&
    products.map((menuCategory, index) => (
      <>
        <h2>{menuCategory.data.name.name}</h2>
        <div className="products-list">
          {menuCategory.data.products.map((product, index) => (
            <div>{product.name}</div>
          ))}
        </div>
      </>
    ))
  );
}

export default Menu;
