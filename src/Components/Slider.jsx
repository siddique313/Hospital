import { NavLink } from "react-router";
function Slider() {
  return (
    <div className="h-full w-44 fixed top-0 left-0 pt-10 bg-gray-600 p-8 text-white transition-all">
      <NavLink>
        <li className="cursor-pointer hover:text-blue-400 duration-200 list-none mb-5 text-base ">
          HOME
        </li>
      </NavLink>
      <NavLink to={"About"}>
        <li className="cursor-pointer hover:text-blue-400 duration-200 list-none mb-5 text-base ">
          ABOUT
        </li>
      </NavLink>
      <NavLink to={"ourProduct"}>
        <li
          className="cursor-pointer hover:text-blue-400 duration-200 list-none mb-5 text-base "
          draggable
        >
          OUR PRODUCT
        </li>
      </NavLink>
      <NavLink to={"contact"}>
        <li className="cursor-pointer hover:text-blue-400 duration-200 list-none mb-5 text-base ">
          CONTACT US
        </li>
      </NavLink>
    </div>
  );
}

export default Slider;
