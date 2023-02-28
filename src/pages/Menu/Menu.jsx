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
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onAddProduct = (product) => {
    dispatch(addToCart(product));
  };

  const onTabSwitch = (newActiveTab) => {
    setActiveTab(newActiveTab);
    let categories = productsData.products.map((product) => product.name.name);
    let index = categories.findIndex((category) => newActiveTab === category);
    if (index > -1) {
      setActiveTabIndex(index);
    } else {
      setActiveTabIndex(0);
    }
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
              onTabSwitch={onTabSwitch}
            />
          )}
          <div className="flex flex-row mx-auto">
            {productsData.products &&
              productsData.products[activeTabIndex].products.map(
                (product, index) => {
                  return (
                    <ProductDetailCard
                      key={index}
                      product={product}
                      onAddProduct={onAddProduct}
                    />
                  );
                }
              )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
