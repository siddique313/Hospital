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
        <SocialApps />
      </footer>
    </div>
  );
}
