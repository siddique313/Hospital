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
            className="relative p-4 shadow-2xl h-96 overflow-hidden flex flex-col justify-around items-center "
          >
            <div className="h-52  flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover mb-4 "
              />
            </div>
            <div className="flex gap-3 flex-col">
              <h3 className="text-xl text-gray-500 font-bold">
                {product.name}
              </h3>
              <p className="text-gray-500  text-lg ">
                Price : {product.originalPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
