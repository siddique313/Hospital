import img1 from "../assets/images/mindary IMEC.jpg";
import img2 from "../assets/images/phillips efficia.jpg";
import img3 from "../assets/images/phillips efficia2.jpg";
import img4 from "../assets/images/heal force.jpg";
import img5 from "../assets/images/nihon koden.jpg";
import img6 from "../assets/images/mindary IMEC2.jpg";
import img7 from "../assets/images/mindray.jpg";
import img8 from "../assets/images/mindray2.jpg";
import img9 from "../assets/images/comen.jpg";
import img10 from "../assets/images/GE-dash.jpg";
import img11 from "../assets/images/space-lab.jpg";
import img12 from "../assets/images/elca para.jpg";
import img13 from "../assets/images/phillips mp.jpg";
import img14 from "../assets/images/phillips parameter.jpg";
import img15 from "../assets/images/mindray3.jpg";
import img16 from "../assets/images/datascope trio.jpg";
import img17 from "../assets/images/edan.jpg";
const products = [
  {
    name: "Mindray IMEC 8",
    originalPrice: "80,000",
    image: img1,
  },
  {
    name: "Phillips Efficia CM 10",
    originalPrice: "110,000",
    image: img2,
  },
  {
    name: "Phillips Efficia CM 12",
    originalPrice: "120,000",
    image: img3,
  },
  {
    name: "Heal force 5 parameter",
    originalPrice: "55,000",
    image: img4,
  },
  {
    name: "Nihon Koden 7 parameter monitor",
    originalPrice: "150,000",
    image: img5,
  },
  {
    name: "Mindray IMEC 10 ",
    originalPrice: "85,000",
    image: img6,
  },
  {
    name: "Mindray VS 900",
    originalPrice: "40,000",
    image: img7,
  },
  {
    name: "Mindray IPM-9800",
    originalPrice: "75,000",
    image: img8,
  },
  {
    name: "Comen C50",
    originalPrice: "75,000",
    image: img9,
  },
  {
    name: "GE Dash 2500",
    originalPrice: "75,000",
    image: img10,
  },
  {
    name: "Space lab mCare 300",
    originalPrice: "50,000",
    image: img11,
  },
  {
    name: "Elace 5 para monitor by space lab",
    originalPrice: "65,000",
    image: img12,
  },
  {
    name: "Phillips MP30",
    originalPrice: "80,000",
    image: img13,
  },
  {
    name: "Phillips 3 parameter ",
    originalPrice: "40,000",
    image: img14,
  },
  {
    name: "Maindray VS-600",
    originalPrice: "30,000",
    image: img15,
  },
  {
    name: "Datascope trio",
    originalPrice: "50,000",
    image: img16,
  },
  {
    name: "EDAN IM50",
    originalPrice: "50,000",
    image: img17,
  },
];

const BabyCotGrid = () => {
  return (
    <div className="container mx-auto p-4  sm:my-32 my-9">
      <div className="flex flex-col items-center justify-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Cardiac LED
          </h2>
        </div>
        <div className="">
          <div className="w-28 bg-blue-700 h-1"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative p-4 shadow-2xl h-96 overflow-hidden flex flex-col justify-around items-center "
          >
            <div className="h-52  flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full  object-cover mb-4 "
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

export default BabyCotGrid;
