import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import useGetSubcategoryProducts from "../../Hooks/useGetSubcategoryProducts";
import CategoriesCard from "../CategoriesCard/CategoriesCard";

export const RelatedProducts = ({ subcategoryName, productId }) => {
  
  const { getSubCategoryProducts, subcatProducts } = useGetSubcategoryProducts();
  


  useEffect(() => {
    const fetchData = async () => {
      await getSubCategoryProducts(subcategoryName);
    };

    fetchData();
  }, [subcategoryName, productId ])

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="w-[740px] relative">
    {subcatProducts.length !==0 && (
      <CategoriesCard subcatName={subcategoryName} hidden={"hidden"}/>
    )}
    </div>
  );
};

export default RelatedProducts;
