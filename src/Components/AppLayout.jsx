import HomeScreenImage from "./HomeScreenImage";
import MedicalCategories from "./MedicalCategoruy";
import { HospitalBeds } from "./HospitalBeds";
import BabyCotGrid from "./BabyCotGrid";
import ProductsComponent from "./ProductsComponent";
import {
  CrashCart,
  OperationTheatreTable,
  Stool,
  WheelChair,
  BedSideLocker,
  MedicineTrolley,
  DripStands,
  InstrumentTrolley,
} from "./../data";
import Categories from "./Categories";
import NeedHelp from "./NeedHelp";
import SellingProduct from "./SellingProduct";

export const AppLayout = () => {
  return (
    <>
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
    </>
  );
};
