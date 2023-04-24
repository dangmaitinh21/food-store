import { useDispatch } from 'react-redux';
import {
  incrementProductAmount,
  decrementProductAmount,
} from '~/stores/cart/cartSlice';

function ProductSummaryCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-evenly w-full p-1 sm:p-2 border-b border-gray-200">
      <div className="product-image mr-3 border border-gray-200 rounded-lg w-full sm:w-1/3 min-w-2">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
      <div className="product-price-quantity flex flex-col items-center justify-center">
        <div className="price">{`${product.price}$`}</div>
        <div className="quantity flex">
          <button
            className={`p-1 ${product.amount <= 0 ? 'text-gray-300' : ''}`}
            disabled={product.amount <= 0}
            onClick={() => dispatch(decrementProductAmount(product))}
          >
            -
          </button>
          <span className="p-1">{product.amount}</span>
          <button
            className="p-1"
            onClick={() => dispatch(incrementProductAmount(product))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSummaryCard;
