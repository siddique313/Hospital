import img1 from "../assets/mic2.png";
import "./MC.css";

const MedicalCategories = () => {
  return (
    <div className="flex  gap-6 items-center justify-center px-32 mb-40">
      <div
        className={`p-6 rounded-[30px] text-white flex flex-col shadow-lg bg-[#609386] h-[580px] gap-4`}
      >
        <div className="max-h-40  ">
          <h3 className="text-white text-lg font-thin mb-6">
            Laboratory Equipment
          </h3>
          <p className="text-2xl font-bold mt-2 text-wrap text-white">
            Every type of Laboratory Equipment is available
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
            className="h-44 mt-4 absolute top-32 "
            alt="Laboratory Equipment"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full max-w-[500px] items-center justify-center ">
        <div
          className={`p-6 rounded-2xl flex shadow-lg bg-[#DFDFDF] h-[280px]`}
        >
          <div className="max-h-40 flex  flex-col   h-full">
            <h3 className="text-black text-lg font-thin">
              Laboratory Equipment
            </h3>
            <p className="text-xl font-bold mt-2 text-wrap text-black">
              Every type of Laboratory Equipment is available
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
              src={img1}
              alt="Laboratory Equipment "
              className="h-32 mt-4 absolute top-9 "
            />
          </div>
        </div>
        <div
          className={`p-6 rounded-2xl flex shadow-lg bg-[#E42E49] h-[280px]`}
        >
          <div className="max-h-40 flex flex-col gap-4">
            <h3 className="text-white text-lg font-thin">
              Laboratory Equipment
            </h3>
            <p className="text-xl font-bold text-wrap text-white">
              Every type of Laboratory Equipment is available
            </p>
            <button
              className={` py-2 px-4 rounded-3xl text-white duration-300 hover:text-black font-medium bg-black hover:bg-white`}
            >
              Shop By Category
            </button>
          </div>

          <div className="flex items-center justify-center relative w-full">
            <img
              id="treeLeaves"
              src={img1}
              alt="Laboratory Equipment "
              className="h-32 mt-4 absolute top-9 "
            />
          </div>
        </div>
      </div>
      <div
        className={`p-6 rounded-2xl text-black flex flex-col shadow-lg bg-[#000] h-[580px]  gap-4`}
      >
        <div className="max-h-40 flex gap-5 flex-col">
          <h3 className="text-white text-lg font-thin">Laboratory Equipment</h3>
          <p className="text-xl font-bold mt-2 text-wrap text-white">
            Every type of Laboratory Equipment is available
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
            src={img1}
            alt="Laboratory Equipment "
            className="h-44  absolute top-36 "
          />
        </div>
      </div>
    </div>
  );
};

export default MedicalCategories;
