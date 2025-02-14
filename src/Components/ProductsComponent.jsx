const ProductsComponent = ({ productTitle, CrashCart }) => {
  return (
    <div className="container mx-auto p-4 my-11">
      <div className="flex flex-col items-center justify-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">
            {productTitle}
          </h2>
        </div>
        <div className="flex gap-1">
          <div className="w-1 bg-blue-700 h-1"></div>
          <div className="w-1 bg-blue-700 h-1"></div>
          <div className="w-1 bg-blue-700 h-1"></div>
          <div className="w-7 bg-blue-700 h-1"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CrashCart?.map((product) => (
          <div key={product.id} className="relative p-4">
            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              {product.discount}
              {product.id}
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 line-through">
              {product.originalPrice}
            </p>
            <p className="text-xl font-bold text-blue-600">
              {product.discountedPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
