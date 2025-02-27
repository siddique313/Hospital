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
  OTLight,
  AMData,
  AuxiliaryMedical,
  helo,
} from "./../data";
import { productTitles } from "../constant";

export const AppLayout = () => {
  return (
    <>
      <HomeScreenImage />
      <MedicalCategories />
      <HospitalBeds />
      <BabyCotGrid />
      <ProductsComponent
        productTitle={productTitles?.Operation_Theatre_Table}
        dataName={OperationTheatreTable}
      />
      <ProductsComponent
        productTitle={productTitles.Baby_Incubators}
        dataName={BabyIncubators}
      />
      <ProductsComponent
        productTitle={productTitles.X_Ray_Ultrasound_Machines}
        dataName={X_RayMachine}
      />

      <ProductsComponent
        productTitle={productTitles.Trolley}
        dataName={Trolley}
      />
      <ProductsComponent
        productTitle={productTitles.Ventilators}
        dataName={Ventilators}
      />
      <ProductsComponent
        productTitle={productTitles.Operation_Theatre_Lights}
        dataName={OTLight}
      />
      <ProductsComponent
        productTitle={productTitles.Anesthesia_Machine}
        dataName={AMData}
      />
      <ProductsComponent
        productTitle={productTitles.Auxiliary_Medical_Equipment}
        dataName={AuxiliaryMedical}
      />
      <ProductsComponent
        productTitle={productTitles.Stainless_Steel_table_Premium}
        dataName={helo}
      />
    </>
  );
};
