import NeedHelp from "./NeedHelp";
import SocialApps from "./SocialApps";

export function Footer() {
  return (
    <div className="mt-10">
      <NeedHelp />
      <footer className="bg-[#111] text-white px-5 py-10">
        <SocialApps />
      </footer>
    </div>
  );
}
