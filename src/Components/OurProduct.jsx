import { useState } from "react";
import { productdata } from "../data";

function OurProduct() {
  const [search, setSearch] = useState("");
  const searchData = productdata.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="w-full flex items-center justify-center ">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-[#E6E6E6] border-2 outline-none w-[400px] py-2 mt-10 px-3 rounded-xl"
          placeholder="Search for product"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-7 mt-11 px-4">
        {searchData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 w-full sm:w-80 md:w-96 shadow-2xl p-6 h-72"
            >
              <div>
                <img
                  className="w-full sm:h-72 h-40 cursor-pointer object-cover"
                  src={data.image}
                />
              </div>
              <span className="text-center text-xl text-[#36A8DA] font-bold">
                {data.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurProduct;
