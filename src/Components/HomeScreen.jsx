import img from "../assets/cropped-AlQaim-Surgical.png";
export const HomeScreen = () => {
  return (
    <>
      <div className=" w-full z-10 scroll-smooth">
        <header>
          <div className="justify-between items-center flex h-9 bg-[#208D98] px-20">
            <div className="text-white">
              <p>+92 321 7213531</p>
            </div>
            <div className="text-white">
              <p>info@alqaimsurgical.com</p>
            </div>
          </div>
          <div>
            <ul className="flex  justify-between px-10 items-center ">
              <div>
                <img className="w-24" src={img} alt="" />
              </div>
              <div className="flex gap-7 px-8 ">
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

      {/* <Home />
      <section className="flex flex-wrap mt-4 gap-6 justify-center">
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
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600">
                {card.btn}
              </button>
            </div>
          </div>
        ))}
      </section>
      {filterData.length > 6 && visibleCount < filterData.length && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-green-600 mb-4"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      )}
      <section className="mb-4">
        <Gallery />
      </section>
      <section>
        <About />
      </section> */}
    </>
  );
};
