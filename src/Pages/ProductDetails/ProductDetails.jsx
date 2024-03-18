import { useParams } from "react-router-dom";
import { BreadCrumb } from "../../Components/BreadCrumb/BreadCrumb";
import { Details } from "../../Components/Details/Details";
import { ProductDisplay } from "../../Components/ProductDisplay/ProductDisplay";
import { RelatedProducts } from "../../Components/RelatedProducts/RelatedProducts";
import { Safety } from "../../Components/Safety/Safety";
import { SellerData } from "../../Components/SellerData/SellerData";
import UseGetAllProducts from "../../Hooks/UseGetAllProducts";
import UseGetProduct from "../../Hooks/UseGetProduct";
import { useEffect } from "react";
import Login from "../../Components/Login/Login";
export const ProductDetails = () => {
  const { product, setId } = UseGetProduct();
  let { id } = useParams();
  console.log(id);
  const { products } = UseGetAllProducts();

  useEffect(() => {
    setId(id);
  }, [id, setId]);

  return (
    <div className="container mx-auto">
      <Login />
      <BreadCrumb />
      <div className="w-[742px]">
        <ProductDisplay product={product} />
      </div>
      <div className="lg:flex hidden">
        <SellerData product={product} />
      </div>
      <div className="lg:flex hidden">
        <Safety />
      </div>
      <Details product={product} />
      <RelatedProducts products={products} />
    </div>
  );
};
