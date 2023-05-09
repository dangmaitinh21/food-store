import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { toast } from 'react-toastify';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/stores/cart/cartSlice';
import ProductPreviewCard from './ProductPreviewCard';

function ProductsPreview() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch(
      console.log(window.location);
      `${window.location.protocol}//${window.location.hostname}:${
        import.meta.env.VITE_PORT
      }/api/products`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data?.data))
      .catch((err) => console.log(err));
  }, []);

  const onAddProduct = (product) => {
    dispatch(addToCart(product));
    toast.success('Your product has been add to cart!', {
      position: 'top-right',
      autoClose: 500,
      hideProgressBar: true,
      pauseOnHover: false,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
      <Carousel responsive={responsive} infinite>
        {products.length > 0 &&
          products.map((product, index) => (
            <div className="w-full h-full p-3" key={index}>
              <ProductPreviewCard
                product={product}
                onAddProduct={onAddProduct}
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default ProductsPreview;
