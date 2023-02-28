import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  selectAllProducts,
} from '../../stores/menu/productsSlice';
import { addToCart } from '../../stores/cart/cartSlice';
import ProductDetailCard from '../../components/ProductDetailCard';
import Tabs from '../../components/Tabs';

function Menu() {
  const dispatch = useDispatch();
  const productsData = useSelector(selectAllProducts);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onAddProduct = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white">
      {productsData.status !== 'fulfilled' ? (
        <div>Loading...</div>
      ) : (
        <div className="menu-wrapper">
          {productsData.products && (
            <Tabs
              list={productsData.products.map((product) => product.name.name)}
              activeTab={activeTab}
              onTabSwitch={setActiveTab}
            />
          )}
          <div className="flex flex-row mx-auto">
            {productsData.products &&
              productsData.products[0].products.map((product, index) => {
                return (
                  <ProductDetailCard
                    key={index}
                    product={product}
                    onAddProduct={onAddProduct}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
