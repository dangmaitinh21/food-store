import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  selectAllProducts,
} from '../../stores/menu/productsSlice';
import ProductDetailCard from '../../components/ProductDetailCard';

function Menu() {
  const dispatch = useDispatch();
  const productsData = useSelector(selectAllProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="bg-white">
      {productsData.status === 'pending' ? (
        <div>Loading...</div>
      ) : (
        <div className="menu-wrapper">
          {productsData.products.length > 0 &&
            productsData.products[0].products.map((product, index) => {
              console.log(product);
            })}
        </div>
      )}
    </div>
  );
}

export default Menu;
