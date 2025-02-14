import img1 from "../assets/mic2.png";
// import img2 from "../assets/machine19.jpg";
// import img3 from "../assets/mindray.jpg";
// import img4 from "../assets/philips.jpg";

const MedicalCategories = () => {
  return (
    <div className="container grid w-full  items-center justify-center xl:flex grid-cols-1 md:grid-cols-3  gap-6">
      <div
        className={`p-6 rounded-2xl text-white flex flex-col shadow-lg bg-[#609386] h-[580px] max-w-72 `}
      >
        <div className="max-h-40">
          <h3 className="text-white text-lg  font-thin ">
            Laboratory Equipment
          </h3>
          <p className="text-xl font-bold mt-2  text-wrap text-white">
            Every type of Laboratory Equipment is available
          </p>
        </div>

        <button
          className={`mt-4 py-2 px-4 rounded-3xl text-black duration-300 hover:text-white font-medium bg-white hover:bg-black `}
        >
          Shop By Category
        </button>
        <div className="flex items-center justify-center relative w-full">
          <img
            src={img1}
            className=" h-60  mt-4  absolute top-9 duration-200 ease-in-out  transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div
          className={`p-6 rounded-2xl text-black flex  shadow-lg bg-[#DFDFDF] h-[280px]`}
        >
          <div className="max-h-40">
            <h3 className="text-black text-lg  font-thin ">
              Laboratory Equipment
            </h3>
            <p className="text-xl font-bold mt-2  text-wrap text-black">
              Every type of Laboratory Equipment is available
            </p>
            <button
              className={`mt-4 py-2 px-4 rounded-3xl text-black duration-300 hover:text-white font-medium bg-white hover:bg-black `}
            >
              Shop By Category
            </button>
          </div>

          <div className="flex items-center justify-center relative w-full">
            <img src={img1} className=" h-44  absolute" />
          </div>
        </div>
        <div
          className={`p-6 rounded-2xl text-black flex  shadow-lg bg-[#E42E49] h-[280px]`}
        >
          <div className="max-h-40">
            <h3 className="text-black text-lg  font-thin ">
              Laboratory Equipment
            </h3>
            <p className="text-xl font-bold mt-2  text-wrap text-black">
              Every type of Laboratory Equipment is available
            </p>{" "}
            <button
              className={`mt-4 py-2 px-4 rounded-3xl text-white duration-300 hover:text-black font-medium bg-black hover:bg-white `}
            >
              Shop By Category
            </button>
          </div>

          <div className="flex items-center justify-center relative w-full">
            <img
              src={img1}
              className=" h-44  mt-4  absolute top-9 duration-200 ease-in-out  transition-all"
            />
          </div>
        </div>
      </div>
      <div
        className={`p-6 rounded-2xl text-black flex flex-col shadow-lg bg-[#000] h-[580px] max-w-72`}
      >
        <div className="max-h-40">
          <h3 className="text-white text-lg  font-thin ">
            Laboratory Equipment
          </h3>
          <p className="text-xl font-bold mt-2  text-wrap text-white">
            Every type of Laboratory Equipment is available
          </p>
        </div>

        <button
          className={`mt-4 py-2 px-4 rounded-3xl text-black duration-300 hover:text-white font-medium bg-[#FFCB00] hover:bg-black `}
        >
          Shop By Category
        </button>
        <div className="flex items-center justify-center relative w-full">
          <img
            src={img1}
            className=" h-60  mt-4  absolute top-9 duration-200 ease-in-out  transition"
          />
        </div>
      </div>
    </div>
  );
};

export default MedicalCategories;
