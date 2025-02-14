import img1 from "../assets/machine19.jpg";
import img2 from "../assets/machine19.jpg";
import img3 from "../assets/mindray.jpg";
import img4 from "../assets/philips.jpg";
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
    image: img4,
  },
  {
    id: 6,
    name: "Baby Cot with Mattress (MHS-BC-4)",
    originalPrice: "Rs 25,000",
    discountedPrice: "Rs 22,500",
    discount: "-10%",
    image: img4,
  },
  {
    id: 7,
    name: "Baby Cot with Mattress (MHS-BC-4)",
    originalPrice: "Rs 25,000",
    discountedPrice: "Rs 22,500",
    discount: "-10%",
    image: img4,
  },
  {
    id: 8,
    name: "Baby Cot with Mattress (MHS-BC-4)",
    originalPrice: "Rs 25,000",
    discountedPrice: "Rs 22,500",
    discount: "-10%",
    image: img4,
  },
];

const BabyCotGrid = () => {
  return (
    <div className="container mx-auto p-4 my-11">
      <h2 className="text-2xl font-bold text-center mb-11">Baby Cot</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-md rounded-lg p-4"
          >
            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              {product.discount}
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

export default BabyCotGrid;
