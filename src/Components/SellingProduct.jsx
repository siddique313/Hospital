import img1 from "../assets/vantilator1.webp";
import img2 from "../assets/wheel1.avif";
import img3 from "../assets/cardiac6.jpeg";
import img4 from "../assets/stool8.webp";

const SellingProduct = () => {
  const products = [
    {
      id: 1,
      name: "Hamilton Medical",
      originalPrice: "Rs32,000.00",
      salePrice: "Rs30,000.00",
      image: img1,
    },
    {
      id: 2,
      name: "Wheel chair",
      originalPrice: "Rs50,000.00",
      salePrice: "Rs48,000.00",
      image: img2,
    },
    {
      id: 3,
      name: "Cardiac LED",
      originalPrice: "Rs28,000.00",
      salePrice: "Rs25,000.00",
      image: img3,
    },
    {
      id: 4,
      name: "patient stool",
      originalPrice: "Rs90,000.00",
      salePrice: "Rs85,000.00",
      image: img4,
    },
  ];
  return (
    <div className="mt-16 mb-12">
      <div className="w-full text-center text-4xl mb-12 flex flex-col items-center justify-center gap-9 ">
        <h1>Best Selling Products</h1>
        <div className="w-32 bg-[#91B422] h-0.5"></div>
      </div>
      <div className="overflow-x-auto whitespace-nowrap p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className=" border-[#91B422] border-2 rounded-lg p-4 w-full mx-2 relative h-96 flex flex-col items-center justify-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full rounded-md object-cover"
              />
              <h3 className="text-sm font-bold mt-2 text-wrap">
                {product.name}
              </h3>
              <p className="text-gray-400 line-through">
                {product.originalPrice}
              </p>
              <p className="text-red-500 font-bold">{product.salePrice}</p>
              <span className="bg-yellow-300 text-xs font-bold px-2 py-1 rounded-md absolute top-2 right-2">
                SALE!
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SellingProduct;
