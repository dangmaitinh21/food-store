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
        <div>
          {productsData.products &&
            productsData.products.map((menuCategory, index) => {
              return (
                <div key={index}>
                  <h2>{menuCategory.name.name}</h2>
                  <div className="products-list">
                    {menuCategory.products.map((product, index) => (
                      <div key={index}>{product.name}</div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Menu;
