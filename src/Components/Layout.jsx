import { Outlet } from "react-router";
import { HomeScreen } from "./HomeScreen";
import { Footer } from "./Footer";

function Layout() {
  return (
    <>
      <HomeScreen />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
