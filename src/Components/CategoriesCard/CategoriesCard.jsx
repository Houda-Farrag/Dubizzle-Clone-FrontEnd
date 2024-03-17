import { Card } from "antd";
import { useEffect } from "react";
import "./CategoriesCard.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { PiBedDuotone } from "react-icons/pi";
import { LuBath } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../Store/Slices/Favorites";
import useGetSubcategoryProducts from "../../Hooks/useGetSubcategoryProducts";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export default function CategoriesCard({ subcatName }) {
    const navigate = useNavigate()
  const { subcatProducts, getSubCategoryProducts } =
    useGetSubcategoryProducts();

  const Favorit = useSelector((favorite) => favorite.favorite.fav);

  const dispatch = useDispatch();

  let idFav = Favorit.map((prod) => {
    return prod._id;
  });

  function check(id) {
    return idFav.find((idmov) => idmov == id);
  }

  const goToDetailsPage = (id) => {
    navigate(`/product-details/${id}`)
  };

  const addToFav = (obj) => {
    if (!check(obj._id)) {
      dispatch(addToFavorite(obj));
    } else {
      dispatch(removeFromFavorite(obj));
    }
  };

  const formatDateDifference = (updatedAt) => {
    const currentDate = new Date();
    const updatedDate = new Date(updatedAt);
    const timeDifference = currentDate - updatedDate;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    if (daysDifference > 0) {
      return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
    } else {
      return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
    }
  };

  useEffect(() => {
    getSubCategoryProducts(subcatName);
  }, [subcatName, subcatProducts]);

  return (
    <>
      <div className="">
        <div className="grid grid-flow-col text-center justify-between box-border ">
          <h1 className=" font-semi bold text-2xl mb-2 mt-6  "> {subcatName}</h1>

          <a
            className="font-semi bold  mb-2 mt-6 text-red-500 font-bold"
            href=""
          >
            Veiw more
          </a>
        </div>
        <div className="flex justify-between overflow-x-auto ">
          {subcatProducts.slice(0, 4).map((catData) => {
            return (
              catData.images[0] && (
                <div
                  key={catData.id}
                  className=" border card-category rounded-t-xl cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToDetailsPage(catData._id);
                  }}
                >
                  <img
                    alt="example"
                    className="w-full h-40 rounded-t-xl object-cover "
                    src={catData.images[0]}
                  />
                  <div className="p-3">
                    <div className="grid grid-flow-col justify-between mt-2">
                      <p className="font-sans text-red-600 font-bold">
                        EGP {catData.price}{" "}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToFav(catData);
                        }}
                      >
                        {check(catData._id) ? <FaHeart /> : <FaRegHeart />}
                      </button>
                    </div>
                    <div className="my-1 grid items-center min-h-12 ">
                      <p className="min-w-full max-h-12 overflow-hidden">
                        {catData.name}
                      </p>
                    </div>
                    {subcatName.includes("Apartments") || subcatName.includes("Villas") &&(
                    <div className="flex gap-2 py-1">
                      <p className="text-sm text-gray-700">
                        <PiBedDuotone />
                      </p>
                      <p className="text-sm text-gray-700">
                        <LuBath />
                      </p>
                      <p className="text-sm text-gray-700">
                        <PiBedDuotone />
                      </p>
                    </div>
                    )}
                    <div className="flex py-1">
                      <p className="text-sm font-sans text-gray-700">
                        {catData.location}
                      </p>
                    </div>
                    <div className="flex py-1">
                      <p className="text-sm text-gray-700">
                        {formatDateDifference(catData.updatedAt)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}
