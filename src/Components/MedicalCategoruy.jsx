import img1 from "../assets/images/ot-bed1-removebg-preview.png";
import img2 from "../assets/images/BabyIncubators1-removebg-preview.png";
import img3 from "../assets/images/vent6-removebg-preview.png";
import img4 from "../assets/images/Xray1-removebg-preview.png";

import "./MC.css";

const MedicalCategories = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-6 items-center justify-center px-5 md:px-6  lg:px-12 mb-40">
      <div
        className={`p-6 rounded-[30px] text-white flex flex-col shadow-lg bg-[#609386] h-[400px] sm:h-[580px] gap-4  w-full `}
      >
        <div className="max-h-40">
          <h3 className="text-white text-lg font-thin mb-2">
            Laboratory Equipment
          </h3>
          <p className="text-2xl font-bold mt-2 text-wrap text-white">
            A bed specially designed for hospitalized patients.
          </p>
        </div>

        <button
          className={`mt-4 py-2 px-4 rounded-3xl text-black duration-300 hover:text-white font-medium bg-white hover:bg-black`}
        >
          Shop By Category
        </button>
        <div className="flex items-center justify-center relative w-full">
          <img
            id="treeLeaves"
            src={img1}
            className="sm:h-56 h-32 absolute top-2 sm:top-32 max-w-full bg-transparent"
            alt="Laboratory Equipment"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full max-w-full md:max-w-[500px] items-center justify-center">
        <div
          className={`p-6 rounded-2xl flex flex-col sm:flex-row shadow-lg bg-[#DFDFDF] h-[400px] sm:h-[280px]  w-full`}
        >
          <div className="max-h-40 flex flex-col h-full">
            <h3 className="text-black text-lg font-thin">
              Laboratory Equipment
            </h3>
            <p className="text-xl font-bold mt-2 text-wrap text-black">
              Provides sufficient warmth to the body to maintain a desired
              temperature.
            </p>
            <button
              className={`mt-4 py-2 px-4 rounded-3xl text-black duration-300 hover:text-white font-medium bg-white hover:bg-black`}
            >
              Shop By Category
            </button>
          </div>

          <div className="flex items-center justify-center relative w-full">
            <img
              id="treeLeaves"
              src={img2}
              alt="Laboratory Equipment"
              className="h-24 sm:h-32 mt-4 absolute top-20 sm:top-9 max-w-full"
            />
          </div>
        </div>

        {/* Third Card */}
        <div
          className={`p-6 rounded-2xl flex flex-col sm:flex-row shadow-lg bg-[#E42E49] h-[400px] sm:h-[280px] w-full`}
        >
          <div className="max-h-40 flex flex-col gap-1 sm:gap-4">
            <h3 className="text-white text-lg font-thin">
              Laboratory Equipment
            </h3>
            <p className="text-xl font-bold text-wrap text-white">
              Machine that helps you breathe or breathes for you.
            </p>
            <button
              className={`py-2 px-4 rounded-3xl text-white duration-300 hover:text-black font-medium bg-black hover:bg-white`}
            >
              Shop By Category
            </button>
          </div>

          <div className="flex items-center justify-center relative w-full">
            <img
              id="treeLeaves"
              src={img3}
              alt="Laboratory Equipment"
              className="h-24 sm:h-32 mt-4 absolute top-20 sm:top-9 max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div
        className={`p-6 rounded-2xl text-black flex flex-col shadow-lg bg-[#000] h-[400px] sm:h-[580px] gap-4  w-full`}
      >
        <div className="max-h-40 flex gap-1 sm:gap-5 flex-col">
          <h3 className="text-white text-lg font-thin">Laboratory Equipment</h3>
          <p className="text-xl font-bold mt-2 text-wrap text-white">
            A type of radiation, to create images of internal body structure.
          </p>
        </div>

        <button
          className={`mt-4 py-2 px-4 rounded-3xl text-black duration-300 hover:text-white font-medium bg-[#FFCB00] hover:bg-black`}
        >
          Shop By Category
        </button>
        <div className="flex items-center justify-center relative w-full">
          <img
            id="treeLeaves"
            src={img4}
            alt="Laboratory Equipment"
            className="sm:h-40 h-20 absolute top-7 sm:top-32 max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MedicalCategories;
