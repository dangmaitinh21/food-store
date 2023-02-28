import { useSelector } from 'react-redux';
import { cartProducts } from '~/stores/cart/cartSlice';
import ProductSummaryCard from './ProductSummaryCard';

function ProductsSummary() {
  const cart = useSelector(cartProducts);

  return (
    <div className="flex flex-col h-24 overflow-auto">
      {cart &&
        cart.map((product, index) => {
          return <ProductSummaryCard product={product} key={index} />;
        })}
    </div>
  );
}

export default ProductsSummary;
