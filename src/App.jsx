import { HomeScreen } from "./Components/HomeScreen";
import HomeScreenImage from "./Components/HomeScreenImage";
import Categories from "./Components/Categories";
import NeedHelp from "./Components/NeedHelp";
import SellingProduct from "./Components/SellingProduct";
import { Footer } from "./Components/Footer";
import { HospitalBeds } from "./Components/HospitalBeds";
import MedicalCategories from "./Components/MedicalCategoruy";
import ProductsComponent from "./Components/ProductsComponent";
import {
  BedSideLocker,
  OperationTheatreTable,
  Stool,
  WheelChair,
  CrashCart,
  DripStands,
  InstrumentTrolley,
  MedicineTrolley,
} from "./data";
import BabyCotGrid from "./Components/BabyCotGrid";

const App = () => {
  return (
    <div>
      <HomeScreen />
      <HomeScreenImage />
      <MedicalCategories />
      <HospitalBeds />
      <BabyCotGrid />
      <ProductsComponent productTitle={"Crash Cart"} CrashCart={CrashCart} />
      <ProductsComponent
        productTitle={"Operation Theatre Table"}
        CrashCart={OperationTheatreTable}
      />
      <ProductsComponent productTitle={"Stool"} CrashCart={Stool} />
      <ProductsComponent productTitle={"Wheel Chair"} CrashCart={WheelChair} />
      <ProductsComponent
        productTitle={"Bed Side Locker"}
        CrashCart={BedSideLocker}
      />
      <ProductsComponent productTitle={"CrashCart"} CrashCart={CrashCart} />
      <ProductsComponent
        productTitle={"Medicine Trolley"}
        CrashCart={MedicineTrolley}
      />
      <ProductsComponent
        productTitle={"Drip Stands / IV Polet"}
        CrashCart={DripStands}
      />
      <ProductsComponent
        productTitle={"Instrument Trolley"}
        CrashCart={InstrumentTrolley}
      />
      <Categories />
      <NeedHelp />
      <SellingProduct />
      <Footer />
    </div>
  );
};

export default App;
