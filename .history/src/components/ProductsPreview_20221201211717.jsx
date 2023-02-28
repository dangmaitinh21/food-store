import { useState, useEffect } from 'react';

function ProductsPreview() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto pb-4 w-2/3 text-white">
      <h2>Products</h2>
      {products.length > 0 &&
        products.map((product, index) => {
          return <div key={index}>{product}</div>;
        })}
    </div>
  );
}

export default ProductsPreview;
