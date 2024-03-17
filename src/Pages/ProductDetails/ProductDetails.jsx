import { useParams } from "react-router-dom";
import { BreadCrumb } from "../../Components/BreadCrumb/BreadCrumb";
import { Details } from "../../Components/Details/Details";
import { ProductDisplay } from "../../Components/ProductDisplay/ProductDisplay";
import { RelatedProducts } from "../../Components/RelatedProducts/RelatedProducts";
import { Safety } from "../../Components/Safety/Safety";
import { SellerData } from "../../Components/SellerData/SellerData";
import UseGetProduct from "../../Hooks/UseGetProduct";
import { useEffect } from "react";
export const ProductDetails = () => {
  const { product, setId , userData} = UseGetProduct();
  let { id } = useParams();


  useEffect(() => {
    setId(id);
  }, [id, setId]);

  return (
    <div className="container mx-auto">
      <BreadCrumb />
      <div className="w-[742px]">
        <ProductDisplay product={product} />
      </div>
      <div className="lg:flex hidden">
        <SellerData userData={userData} product={product} />
      </div>
      <div className="lg:flex hidden">
        <Safety />
      </div>
      <Details product={product} />
      {/* <RelatedProducts /> */}
    </div>
  );
};
