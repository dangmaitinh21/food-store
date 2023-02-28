import Button from '../components/elements/Button';

function ProductDetailCard({ product }) {
  return (
    <div className="p-4 m-4 rounded-lg bg-slate-50">
      <div className="flex flex-col items-center justify-between">
        <h2 className="text-2xl">{product.name}</h2>
        <p className="text-xl text-gray-500">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-3xl text-black">{product.price}</div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-40 h-40 rounded-xl object-cover"
        />
      </div>
      <Button className="w-full flex items-center justify-center">
        Add to cart
      </Button>
    </div>
  );
}

export default ProductDetailCard;
