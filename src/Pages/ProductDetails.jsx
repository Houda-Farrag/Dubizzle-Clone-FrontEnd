import { BreadCrumb } from "../Components/BreadCrumb/BreadCrumb";
import { Details } from "../Components/Details/Details";
import Login from "../Components/Login/Login";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";
import { Safety } from "../Components/Safety/Safety";
import { SellerData } from "../Components/SellerData/SellerData";

export const ProductDetails = () => {
  return (
    <div>
      <Login/>
      <BreadCrumb />
      <ProductDisplay />
      <SellerData />
      <Safety/>
      <Details />
      <RelatedProducts/>
    </div>
  );
};
