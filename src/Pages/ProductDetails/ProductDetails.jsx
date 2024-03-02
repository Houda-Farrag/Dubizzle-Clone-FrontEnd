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

export const ProductDetails = () => {
  const {product , setId} = UseGetProduct()
  let {id} = useParams()
  console.log(id)
  const {products} = UseGetAllProducts()

  useEffect(() => {
      setId(id);

  }, [id, setId]);
  

  return (
    <div>
      <BreadCrumb />
      <ProductDisplay product = {product}  />
      <SellerData product = {product} />
      <Safety/>
      <Details product = {product} />
      <RelatedProducts products={products}/>
    </div>
  );
};
