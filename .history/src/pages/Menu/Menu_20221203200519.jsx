import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  selectAllProducts,
} from '../../stores/menu/productsSlice';

function Menu() {
  const dispatch = useDispatch();
  const productsData = useSelector(selectAllProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      {productsData.status === 'pending' ? (
        <div>Loading...</div>
      ) : (
        <div className="menu-wrapper">
          {productsData.products.length > 0 &&
            productsData.products[0].products.map((product, index) => {
              return (
                <div key={index} className="text-white">
                  {product.name}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Menu;
