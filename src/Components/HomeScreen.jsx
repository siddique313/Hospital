import { useState } from "react";
import { NavLink } from "react-router";
import img from "../assets/Logi.jpg";
import Slider from "./Slider";

export const HomeScreen = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="w-full scroll-smooth ">
        <header>
          <div className="justify-between items-center flex h-9 bg-[#208D98] sm:px-20 px-2">
            <div className="text-white">
              <p>Elia surgical</p>
            </div>
            <div className="text-white">
              <p>+923183101072</p>
            </div>
          </div>
          <div className="px-10 pt-2">
            <ul className="flex justify-between items-center">
              <div className="">
                <img className="w-32" src={img} alt="logo" />
              </div>
              <div
                className="flex md:hidden flex-col gap-1 cursor-pointer"
                onClick={toggleSidebar}
              >
                <div className="w-6 h-0.5 bg-blue-700"></div>
                <div className="w-6 h-0.5 bg-blue-700"></div>
                <div className="w-6 h-0.5 bg-blue-700"></div>
              </div>

              {/* Slider with transition based on sidebarVisible */}
              <Slider
                sidebarVisible={sidebarVisible}
                setSidebarVisible={setSidebarVisible}
              />

              <div className="hidden md:flex gap-6">
                <NavLink to="/">
                  <li className="cursor-pointer hover:text-blue-400 duration-200">
                    HOME
                  </li>
                </NavLink>
                <NavLink to={"About"}>
                  <li className="cursor-pointer hover:text-blue-400 duration-200">
                    ABOUT
                  </li>
                </NavLink>
                <NavLink to={"ourProduct"}>
                  <li className="cursor-pointer hover:text-blue-400 duration-200">
                    SHOP
                  </li>
                </NavLink>
                <NavLink to={"contact"}>
                  <li className="cursor-pointer hover:text-blue-400 duration-200">
                    CONTACT US
                  </li>
                </NavLink>
              </div>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};
