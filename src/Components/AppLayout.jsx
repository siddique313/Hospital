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
import SellingProduct from "./SellingProduct";

export const AppLayout = () => {
  return (
    <>
      <HomeScreenImage />
      <MedicalCategories />
      <HospitalBeds />
      <BabyCotGrid />
      <ProductsComponent productTitle={"Crash Cart"} dataName={CrashCart} />
      <ProductsComponent
        productTitle={"Operation Theatre Table"}
        dataName={OperationTheatreTable}
      />
      <ProductsComponent productTitle={"Stool"} dataName={Stool} />
      <ProductsComponent productTitle={"Wheel Chair"} dataName={WheelChair} />
      <ProductsComponent
        productTitle={"Bed Side Locker"}
        dataName={BedSideLocker}
      />
      <ProductsComponent
        productTitle={"Medicine Trolley"}
        dataName={MedicineTrolley}
      />
      <ProductsComponent
        productTitle={"Drip Stands / IV Polet"}
        dataName={DripStands}
      />
      <ProductsComponent
        productTitle={"Instrument Trolley"}
        dataName={InstrumentTrolley}
      />
      <Categories />
      <SellingProduct />
    </>
  );
};
