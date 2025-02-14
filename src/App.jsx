import { HomeScreen } from "./Components/HomeScreen";
import HomeScreenImage from "./Components/HomeScreenImage";
import Categories from "./Components/Categories";
import NeedHelp from "./Components/NeedHelp";
import SellingProduct from "./Components/SellingProduct";
import { Footer } from "./Components/Footer";
import { HospitalBeds } from "./Components/Beds";
import BabyCotGrid from "./Components/BabyCotGrid";
import MedicalCategories from "./Components/MedicalCategoruy";

const App = () => {
  return (
    <div>
      <HomeScreen />
      <HomeScreenImage />
      <MedicalCategories />
      <HospitalBeds />
      <BabyCotGrid />
      <Categories />
      <NeedHelp />
      <SellingProduct />
      <Footer />
    </div>
  );
};

export default App;
