import { ProductData } from "../data";

function OurProduct() {
  return (
    <div>
      <div className="w-full h-96 bg-[#4A518F] flex justify-center items-center">
        <h1 className="text-white text-3xl sm:text-5xl text-center">Shop</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-7 mt-11 px-4">
        {ProductData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 w-full sm:w-80 md:w-96" // Responsive width for each product card
            >
              <img className="w-full h-auto" src={data.image} alt={data.name} />
              <span className="text-center">
                {data.name}{" "}
                <span className="bg-yellow-400 px-2 py-1 rounded">
                  {data.rate}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurProduct;
