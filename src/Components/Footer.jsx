import SocialApps from "./SocialApps";

export function Footer() {
  return (
    <div className="mt-10">
      <div className="support-bar bg-[#1a91cf]  text-white text-center py-3 flex items-center justify-center flex-col sm:flex-row ">
        <p className="text-2xl h-16 flex items-center justify-center">
          Need help? Call our support team 24/7 at
        </p>

        <p className="text-2xl"> +923183101072</p>
      </div>
      <footer className="bg-[#111] text-white px-5 py-10">
        <div className=" flex flex-wrap justify-around ">
          <div className="mb-5 max-w-80">
            <h3 className="border-b-2 border-[#1a91cf] pb-1 mb-3">About Us</h3>
            <p>
              AL-Qaim Surgical is the largest manufacturer of Hospital Furniture
              in Lahore. Deals In: Hospital Furniture, Electrochemical, Lab
              Equipment and General Order Supplies
            </p>
          </div>
          <div className="links">
            <h3 className="border-b-2 border-[#1a91cf] pb-1 mb-3">
              Quick Links
            </h3>
            <ul>
              <li>
                <a
                  className="text-[#9cd8f5] no-underline px-2 hover:text-orange-400"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-[#9cd8f5] no-underline px-2 hover:text-orange-400"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-[#9cd8f5] no-underline px-2 hover:text-orange-400"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-[#9cd8f5] no-underline px-2 hover:text-orange-400"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="border-b-2 border-[#1a91cf] pb-1 mb-3">
              Categories
            </h3>
            <div className="flex gap-7">
              <ul className="list-none">
                <li>
                  <a
                    className="text-[#9cd8f5] no-underline px-2 hover:text-orange-400"
                    href="#"
                  >
                    Hospital Furniture
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#9cd8f5] no-underline px-2 hover:text-orange-400"
                    href="#"
                  >
                    Operation Theater
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#9cd8f5] no-underline px-2 hover:text-orange-400"
                    href="#"
                  >
                    Gynae Ward
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#9cd8f5] no-underline px-2 hover:text-orange-400"
                    href="#"
                  >
                    ICU / NICU
                  </a>
                </li>
              </ul>
              <ul className="list-none">
                <li>
                  <a
                    className="text-[#9cd8f5] no-underline px-2 hover:text-orange-400"
                    href="#"
                  >
                    Physiotherapy
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#9cd8f5] no-underline px-2 hover:text-orange-400"
                    href="#"
                  >
                    Wheelchair
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#9cd8f5] no-underline px-2 hover:text-orange-400"
                    href="#"
                  >
                    Patient Beds
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <SocialApps />
      </footer>
    </div>
  );
}
