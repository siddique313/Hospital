import { NavLink } from "react-router";

function Slider({ sidebarVisible, setSidebarVisible }) {
  const hideSideBar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div
      className={`h-full w-44 fixed top-0 left-0 pt-10 bg-gray-600 p-8 text-white transition-transform duration-300 ease-in-out ${
        sidebarVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <NavLink to="/">
        <li
          onClick={hideSideBar}
          className="cursor-pointer hover:text-blue-400 duration-200 list-none mb-5 text-base "
        >
          HOME
        </li>
      </NavLink>
      <NavLink to="About">
        <li
          onClick={hideSideBar}
          className="cursor-pointer hover:text-blue-400 duration-200 list-none mb-5 text-base "
        >
          ABOUT
        </li>
      </NavLink>
      <NavLink to="ourProduct">
        <li
          onClick={hideSideBar}
          className="cursor-pointer hover:text-blue-400 duration-200 list-none mb-5 text-base "
        >
          OUR PRODUCT
        </li>
      </NavLink>
      <NavLink to="contact">
        <li
          onClick={hideSideBar}
          className="cursor-pointer hover:text-blue-400 duration-200 list-none mb-5 text-base "
        >
          CONTACT US
        </li>
      </NavLink>
    </div>
  );
}

export default Slider;
