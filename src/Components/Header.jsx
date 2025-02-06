import { useState } from "react";
import logo from "../assets/logo.jpg";
import { data } from "../Components/data";
import Gallery from "./Gallery";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const filterData = data.filter((curdata) =>
    curdata.heading.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const handleLearnMore = () => {
    setVisibleCount(filterData.length);
  };

  return (
    <>
      <div className="bg-cyan-800">
        <header className="justify-between items-center flex h-28">
          <div className="ml-4 h-20">
            <img className="rounded-full h-20 w-20" src={logo} alt="Logo" />
          </div>
          <div className="justify-center self-center items-center flex">
            <input
              className="outline-none w-full px-2 py-1 rounded-2xl border-black border-2"
              type="text"
              value={inputSearch}
              placeholder="Search"
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </div>
          <div className="w-1/3">
            <ul className="flex text-white mr-4 justify-around">
              <li>Home</li>
              <li className="cursor-pointer">Gallery</li>
              <li className="cursor-pointer">About</li>
            </ul>
          </div>
        </header>
      </div>
      <section className="flex flex-wrap mt-10 gap-6 justify-center ">
        {filterData.slice(0, visibleCount).map((card, index) => (
          <div
            key={index}
            className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden mb-2"
          >
            <img
              className="w-full h-60 object-cover"
              src={card.image}
              alt={card.heading}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {card.heading}
              </h2>
              <p className="text-gray-600 mt-2">{card.paragraph}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                {card.btn}
              </button>
            </div>
          </div>
        ))}
      </section>
      {filterData.length > 6 && visibleCount < filterData.length && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mb-4"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      )}
      <section>
        <Gallery />
      </section>
    </>
  );
};

export default Header;
