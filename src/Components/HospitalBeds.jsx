import img1 from "../assets/bed1.avif";
import img2 from "../assets/bed4.jpg";
import img3 from "../assets/bed2.jpg";
import img4 from "../assets/bed3.jpg";
import img5 from "../assets/couch4.jpg";
import img6 from "../assets/couch1.jpg";
import img7 from "../assets/couch2.jpg";
import img8 from "../assets/couch3.webp";

const beds = [
  {
    id: 1,
    name: "Fowler Bed Imported head and foot - Patient Bed",
    originalPrice: 35000,
    discountedPrice: 29500,
    discount: 16,
    image: img1,
  },
  {
    id: 2,
    name: "Fowler Bed - Hospital Bed - Patient Bed",
    originalPrice: 22000,
    discountedPrice: 17000,
    discount: 23,
    image: img2,
  },
  {
    id: 3,
    name: "Semi Fowler Bed - Hospital Bed - Patient Bed",
    originalPrice: 17000,
    discountedPrice: 14000,
    discount: 18,
    image: img3,
  },
  {
    id: 4,
    name: "Fowler Bed Heavy Duty - Hospital Bed - Patient Bed",
    originalPrice: 27000,
    discountedPrice: 22000,
    discount: 19,
    image: img4,
  },
  {
    id: 5,
    name: "Fowler Bed Heavy Duty - Hospital Bed - Patient Bed",
    originalPrice: 27000,
    discountedPrice: 22000,
    discount: 19,
    image: img5,
  },
  {
    id: 5,
    name: "Fowler Bed Heavy Duty - Hospital Bed - Patient Bed",
    originalPrice: 27000,
    discountedPrice: 22000,
    discount: 19,
    image: img6,
  },
  {
    id: 7,
    name: "Fowler Bed Heavy Duty - Hospital Bed - Patient Bed",
    originalPrice: 27000,
    discountedPrice: 22000,
    discount: 19,
    image: img7,
  },
  {
    id: 8,
    name: "Fowler Bed Heavy Duty - Hospital Bed - Patient Bed",
    originalPrice: 27000,
    discountedPrice: 22000,
    discount: 19,
    image: img8,
  },
];

export const HospitalBeds = () => {
  return (
    <div className="container mx-auto px-4 py-8 my-11 ">
      <div className="flex flex-col items-center justify-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">
            Hospital / Patient Beds
          </h2>
        </div>
        <div className="flex gap-1">
          <div className="w-1 bg-blue-700 h-1"></div>
          <div className="w-1 bg-blue-700 h-1"></div>
          <div className="w-1 bg-blue-700 h-1"></div>
          <div className="w-7 bg-blue-700 h-1"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
        {beds.map((bed, index) => (
          <div key={index} className="bg-white p-4 rounded-lg w-full ">
            <div className="relative">
              <img
                src={bed.image}
                alt={bed.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                -{bed.discount}%
              </span>
            </div>
            <h3 className="text-sm font-medium mt-4">{bed.name}</h3>
            <p className="text-gray-500 line-through">Rs {bed.originalPrice}</p>
            <p className="text-lg font-semibold text-blue-600">
              Rs {bed.discountedPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
