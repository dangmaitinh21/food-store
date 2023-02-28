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
          {
            productsData.products && console.log(productsData)
            // productsData.products[0].products.map((product, index) => {
            //   return <div className="text-white">{product.name}</div>;
            // })
          }
        </div>
      )}
    </div>
  );
}

export default Menu;
