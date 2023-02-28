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
    <div>
      {products.status === 'pending' ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* {products &&
            products.map((menuCategory, index) => {
              return (
                <>
                  <h2>{menuCategory.data.name.name}</h2>
                  <div className="products-list">
                    {menuCategory.data.products.map((product, index) => (
                      <div key={index}>{product.name}</div>
                    ))}
                  </div>
                </>
              );
            })} */}
        </div>
      )}
    </div>
  );
}

export default Menu;
