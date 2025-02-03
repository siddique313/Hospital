import React from "react";
import logo from "../assets/logo.jpg";
import Search from "./Search";
const Header = () => {
  return (
    <div className="bg-cyan-800" height={200}>
      <header className="justify-between items-center flex">
        <div className=" ml-4 h-30">
          <img className="rounded-full h-20 w-20" src={logo} />
        </div>
        <Search />
        <div></div>
      </header>
    </div>
  );
};

export default Header;
