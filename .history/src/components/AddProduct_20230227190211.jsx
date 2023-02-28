function AddProduct({ onAddProduct }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={onAddProduct}
        className="bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center text-lg px-2 py-1"
      >
        <span>Add to cart</span>
      </button>
    </div>
  );
}

export default AddProduct;
