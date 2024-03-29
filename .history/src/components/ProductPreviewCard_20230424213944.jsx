import AddProduct from './AddProduct';

function ProductPreviewCard({ product, onAddProduct }) {
  const addProduct = () => {
    onAddProduct(product);
  };

  return (
    <div className="w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center h-100">
      <img src={product.imageUrl} alt={product.name} />
      <h2 className="pb-2 text-lg px-4 max-h-9 line-clamp-4">{product.name}</h2>
      <p className="mb-2 h-20 line-clamp-4 max-h-28">{product.description}</p>
      <AddProduct onAddProduct={addProduct} />
    </div>
  );
}

export default ProductPreviewCard;
