import img1 from "../assets/mic2.png";
// import img2 from "../assets/machine19.jpg";
// import img3 from "../assets/mindray.jpg";
// import img4 from "../assets/philips.jpg";

const MedicalCategories = () => {
  return (
    <div className="">
      <div
        className={`p-6 rounded-2xl text-white flex flex-col shadow-lg bg-[#609386] h-[490px]`}
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
        <div className="flex items-center justify-center relative">
          <img src={img1} className=" h-60  mt-4  absolute " />
        </div>
      </div>
    </div>
  );
};

export default MedicalCategories;
