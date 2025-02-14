import img from "../assets/logo.jpg";
export const HomeScreen = () => {
  return (
    <>
      <div className=" w-full scroll-smooth">
        <header className="">
          <div className="justify-between items-center flex h-9 bg-[#208D98] px-20">
            <div className="text-white">
              <p>Elia surgical</p>
            </div>
            <div className="text-white">
              <p>+923183101072</p>
            </div>
          </div>
          <div className="px-10 pt-2">
            <ul className="flex  justify-between  items-center ">
              <div className="">
                <img className="w-32" src={img} />
              </div>
              <div className="flex gap-6 ">
                <li className="cursor-pointer hover:text-blue-400 duration-200">
                  HOME
                </li>
                <li className="cursor-pointer hover:text-blue-400 duration-200">
                  BLOG
                </li>
                <li
                  className="cursor-pointer hover:text-blue-400 duration-200"
                  draggable
                >
                  OUR PRODUCT
                </li>
                <li className="cursor-pointer hover:text-blue-400 duration-200">
                  CONTACT US
                </li>
              </div>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};
