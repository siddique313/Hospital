import { HomeScreen } from "./Components/HomeScreen";
import HomeScreenImage from "./Components/HomeScreenImage";
import Categories from "./Components/Categories";
import NeedHelp from "./Components/NeedHelp";
import SellingProduct from "./Components/SellingProduct";
import { Footer } from "./Components/Footer";
import { HospitalBeds } from "./Components/HospitalBeds";
import MedicalCategories from "./Components/MedicalCategoruy";
import ProductsComponent from "./Components/ProductsComponent";
import { CrashCart } from "./data";
import BabyCotGrid from "./Components/BabyCotGrid";

const App = () => {
  return (
    <div>
      <HomeScreen />
      <HomeScreenImage />
      <MedicalCategories />
      <HospitalBeds />
      <BabyCotGrid />
      <ProductsComponent productTitle={"CrashCart"} CrashCart={CrashCart} />
      <Categories />
      <NeedHelp />
      <SellingProduct />
      <Footer />
    </div>
  );
};

export default App;
