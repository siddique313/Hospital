import img1 from "../assets/baby1.jpg";
import img2 from "../assets/baby2.jpg";
import img3 from "../assets/baby3.jpg";
import img4 from "../assets/baby4.jpg";
import img5 from "../assets/baby5.jpg";
import img6 from "../assets/baby6.jpg";
import img7 from "../assets/baby7.avif";
import img8 from "../assets/baby8.jpg";
const products = [
  {
    id: 1,
    name: "Baby Cot with Mattress (MHS-BC-1)",
    originalPrice: "Rs 9,500",
    discountedPrice: "Rs 8,500",
    discount: "-11%",
    image: img1,
  },
  {
    id: 2,
    name: "Baby Cot with Mattress (MHS-BC-2)",
    originalPrice: "Rs 8,500",
    discountedPrice: "Rs 7,500",
    discount: "-12%",
    image: img2,
  },
  {
    id: 3,
    name: "Baby Cot with Mattress Premium (MHS-BC-3)",
    originalPrice: "Rs 21,000",
    discountedPrice: "Rs 19,000",
    discount: "-10%",
    image: img3,
  },
  {
    id: 4,
    name: "Baby Cot with Mattress (MHS-BC-4)",
    originalPrice: "Rs 25,000",
    discountedPrice: "Rs 22,500",
    discount: "-10%",
    image: img4,
  },
  {
    id: 5,
    name: "Baby Cot with Mattress (MHS-BC-4)",
    originalPrice: "Rs 25,000",
    discountedPrice: "Rs 22,500",
    discount: "-10%",
    image: img5,
  },
  {
    id: 6,
    name: "Baby Cot with Mattress (MHS-BC-4)",
    originalPrice: "Rs 25,000",
    discountedPrice: "Rs 22,500",
    discount: "-10%",
    image: img6,
  },
  {
    id: 7,
    name: "Baby Cot with Mattress (MHS-BC-4)",
    originalPrice: "Rs 25,000",
    discountedPrice: "Rs 22,500",
    discount: "-10%",
    image: img7,
  },
  {
    id: 8,
    name: "Baby Cot with Mattress (MHS-BC-4)",
    originalPrice: "Rs 25,000",
    discountedPrice: "Rs 22,500",
    discount: "-10%",
    image: img8,
  },
];

const BabyCotGrid = () => {
  return (
    <div className="container mx-auto p-4 my-11">
      <div className="flex flex-col items-center justify-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">Baby Got</h2>
        </div>
        <div className="flex gap-1">
          <div className="w-1 bg-blue-700 h-1"></div>
          <div className="w-1 bg-blue-700 h-1"></div>
          <div className="w-1 bg-blue-700 h-1"></div>
          <div className="w-7 bg-blue-700 h-1"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="relative p-4">
            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              {product.discount}
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-base text-gray-500">{product.name}</h3>
            <div className="flex gap-3">
              <p className="text-gray-500 line-through text-sm">
                {product.originalPrice}
              </p>
              <p className="text-sm font-bold text-blue-600">
                {product.discountedPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BabyCotGrid;
