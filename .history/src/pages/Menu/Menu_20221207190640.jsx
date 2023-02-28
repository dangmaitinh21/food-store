import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  selectAllProducts,
} from '../../stores/menu/productsSlice';
import ProductDetailCard from '../../components/ProductDetailCard';
import Tabs from '../../components/Tabs';

function Menu() {
  const dispatch = useDispatch();
  const productsData = useSelector(selectAllProducts);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
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
          <div className="flex flex-row">
            {productsData.products &&
              productsData.products[0].products.map((product, index) => {
                return <ProductDetailCard key={index} product={product} />;
              })}
          </div>
          {console.log(productsData)}
        </div>
      )}
    </div>
  );
}

export default Menu;
