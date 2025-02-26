import HomeScreenImage from "./HomeScreenImage";
import MedicalCategories from "./MedicalCategoruy";
import { HospitalBeds } from "./HospitalBeds";
import BabyCotGrid from "./BabyCotGrid";
import ProductsComponent from "./ProductsComponent";
import {
  OperationTheatreTable,
  Ventilators,
  BabyIncubators,
  X_RayMachine,
  Trolley,
} from "./../data";

export const AppLayout = () => {
  return (
    <>
      <HomeScreenImage />
      <MedicalCategories />
      <HospitalBeds />
      <BabyCotGrid />
      <ProductsComponent
        productTitle={"Operation Theatre Table"}
        dataName={OperationTheatreTable}
      />
      <ProductsComponent
        productTitle={"Baby Incubators"}
        dataName={BabyIncubators}
      />
      <ProductsComponent
        productTitle={"X-RAY/Ultrasound Machines"}
        dataName={X_RayMachine}
      />

      <ProductsComponent productTitle={"Trolley"} dataName={Trolley} />
      <ProductsComponent productTitle={"Ventilators"} dataName={Ventilators} />
    </>
  );
};
