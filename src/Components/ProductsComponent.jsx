const ProductsComponent = ({ productTitle, dataName }) => {
  return (
    <div className="container mx-auto p-4 sm:my-32 my-9 ">
      <div className="flex flex-col items-center justify-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            {productTitle}
          </h2>
        </div>
        <div className="">
          <div className="w-28 bg-[#36A8DA] h-1"></div>
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
                className={`${
                  productTitle === "Baby Incubators" ||
                  productTitle === "Operation Theatre Lights" ||
                  productTitle === "Anesthesia Machine" ||
                  productTitle === "Auxiliary Medical Equipment" ||
                  productTitle === "Stainless Steel Table Premium" ||
                  productTitle === "Operation Theatre Table"
                    ? "h-[140px]"
                    : "h-48"
                } w-full  object-cover mb-4 `}
              />
            </div>
            <div className="flex gap-3 flex-col">
              <h3 className="text-xl text-black font-bold">{product.name}</h3>
              <p className="text-[#36A8DA]  text-lg ">
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
