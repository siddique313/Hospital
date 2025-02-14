import img1 from "../assets/machine3.jpg";
import img2 from "../assets/machine4.jpg";
import img3 from "../assets/machine5.jpg";
import img4 from "../assets/machine6.jpg";
function Categories() {
  return (
    <div>
      <div className="w-full flex items-center justify-center flex-col gap-6">
        <h1 className="text-5xl font-[500]">Categories</h1>
        <div className="w-28 bg-[#91B422] h-0.5"></div>
      </div>
      <div className=" mt-11  mb-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-7 px-2  ">
        <div className="flex w-full flex-col items-center justify-center borderAnimate">
          <h1 className="text-2xl mb-3">Hospital Bed</h1>
          <div className="w-12 h-0.5 bg-[#91B422] mb-3"></div>
          <div className="truncate w-full">
            <img
              className="w-full h-72 object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src={img1}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center borderAnimate">
          <h1 className="text-2xl mb-3">Stainless Steel Delivery</h1>
          <div className="w-12 h-0.5 bg-[#91B422] mb-3"></div>
          <div className="truncate w-full">
            <img
              className="w-full h-72 object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src={img2}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center borderAnimate">
          <h1 className="text-2xl mb-3">Simple Examination</h1>
          <div className="w-12 h-0.5 bg-[#91B422] mb-3"></div>
          <div className="truncate w-full">
            <img
              className="w-full h-72 object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src={img3}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center borderAnimate">
          <h1 className="text-2xl mb-3">Medical Trolley</h1>
          <div className="w-12 h-0.5 bg-[#91B422] mb-3"></div>
          <div className="truncate w-full">
            <img
              className="w-full h-72 object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src={img4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
//
