import img1 from "../assets/images/bed1.jpg";
import img2 from "../assets/images/bed2.jpg";
import img3 from "../assets/images/bed3.jpg";
import img4 from "../assets/images/bed4.jpg";
import img5 from "../assets/images/bed5.jpg";
import img6 from "../assets/images/bed6.jpg";
import img7 from "../assets/images/bed7.jpg";

const beds = [
  {
    id: 1,
    name: "Fowler Bed Imported head and foot - Patient Bed",
    originalPrice: "20,000",
    image: img1,
  },
  {
    id: 2,
    name: "Fowler Bed - Hospital Bed - Patient Bed",
    originalPrice: "27,500",
    image: img2,
  },
  {
    id: 3,
    name: "Semi Fowler Bed - Hospital Bed - Patient Bed",
    originalPrice: "17,000",
    image: img3,
  },
  {
    id: 4,
    name: "Fowler Bed Heavy Duty - Hospital Bed - Patient Bed",
    originalPrice: "42,000",
    image: img4,
  },
  {
    id: 5,
    name: "Semi fowler Bed ",
    originalPrice: "13,500",
    image: img5,
  },
  {
    id: 5,
    name: "Choras couch patient bed",
    originalPrice: "7500",
    image: img6,
  },
  {
    id: 7,
    name: "Round couch patient bed",
    originalPrice: "8500",
    image: img7,
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
          <div
            key={index}
            className="relative p-4 shadow-2xl h-96 overflow-hidden flex flex-col justify-around items-center "
          >
            <div className="h-52  flex items-center justify-center overflow-hidden">
              <img
                src={bed.image}
                alt={bed.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-3 flex-col">
              <h3 className="text-xl text-gray-500 font-bold">{bed.name}</h3>
              <p className="text-gray-500  text-lg">Rs {bed.originalPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
