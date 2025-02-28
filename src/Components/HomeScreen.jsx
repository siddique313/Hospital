import { useState } from "react";
import { NavLink } from "react-router";
import img from "../assets/images/Logi.jpg";
import Slider from "./Slider";

export const HomeScreen = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <header className="px-10 pt-2 w-full fixed bg-white top-0 z-10 ">
        <ul className="flex justify-between items-center">
          <div className="">
            <NavLink to="/">
              <img className="w-32" src={img} alt="logo" />
            </NavLink>
          </div>
          <div
            className="flex md:hidden flex-col gap-1 cursor-pointer"
            onClick={toggleSidebar}
          >
            <div className="w-6 h-0.5 bg-[#208D98]"></div>
            <div className="w-6 h-0.5 bg-[#208D98]"></div>
            <div className="w-6 h-0.5 bg-[#208D98]"></div>
          </div>

          {/* Slider with transition based on sidebarVisible */}
          <Slider
            sidebarVisible={sidebarVisible}
            setSidebarVisible={setSidebarVisible}
          />

          <div className="hidden md:flex gap-6">
            <NavLink to="/">
              <li className="cursor-pointer hover:text-[#36A8DA] duration-200 font-bold">
                HOME
              </li>
            </NavLink>
            <NavLink to={"About"}>
              <li className="cursor-pointer hover:text-[#36A8DA] duration-200 font-bold">
                ABOUT
              </li>
            </NavLink>
            <NavLink to={"ourProduct"}>
              <li className="cursor-pointer hover:text-[#36A8DA] duration-200 font-bold">
                OUR PRODUCT
              </li>
            </NavLink>
            <NavLink to={"contact"}>
              <li className="cursor-pointer hover:text-[#36A8DA] duration-200 font-bold ">
                CONTACT US
              </li>
            </NavLink>
          </div>
        </ul>
      </header>
    </>
  );
};
