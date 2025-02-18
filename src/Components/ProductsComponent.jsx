const ProductsComponent = ({ productTitle, dataName }) => {
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {dataName?.map((product, index) => (
          <div
            key={index}
            className="relative p-4 flex flex-col items-center justify-center"
          >
            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              {product.discount}
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-sm text-gray-500 ">{product.name}</h3>
            <div className="flex gap-3">
              <p className="text-gray-500 line-through text-sm">
                {product.originalPrice}
              </p>
              <p className="text-sm text-black">{product.discountedPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
