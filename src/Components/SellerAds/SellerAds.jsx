import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addToFavorite, removeFromFavorite } from "../../Store/Slices/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const SellerAds = ({ userData, userAds }) => {
  const navigate = useNavigate()
  const Favorit = useSelector((favorite) => favorite.favorite.fav);

  const dispatch = useDispatch();

  let idFav = Favorit.map(prod => prod._id);

  function check(id) {
    return idFav.find(idmov => idmov == id);
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
  }, [userData, userAds]);

  return (
    <>
      <div className="container absolute right-2/4 top-12">
        <h1 className="absolute top-32 right-20 font-bold text-5xl w-28">
          {userData?.profile?.name}
        </h1>
      </div>
      <div className="relative bottom-5 left-40 w-[1200px]">
        <hr className="relative left-[500px] border-1 border-black w-9/12 " />
      </div>

      <div className="relative w-fit left-[700px]">
      <div className="grid grid-cols-1 w-[930px] top-40 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {Array.isArray(userAds) && userAds.length > 0 ? (
          userAds.map((product) => {
            return (
              <>
                  <div
                    key={product.id}
                    className="my-2 w-fit border card-category rounded-t-xl cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToDetailsPage(product._id);
                    }}
                  >
                    <img
                      alt="example"
                      className="w-full h-40 rounded-t-xl object-cover"
                      src={product.images[0]}
                    />
                    <div className="p-3">
                      <div className="grid grid-flow-col justify-between mt-2">
                        <p className="font-sans text-red-600 font-bold">
                          EGP {product.price}{" "}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToFav(product);
                            console.log('hello')
                          }}
                        >
                          {check(product._id)? <FaHeart /> : <FaRegHeart />}
                        </button>
                      </div>
                      <div className="my-1 grid items-center min-h-12 ">
                        <p className="min-w-full max-h-12 overflow-hidden">
                          {product.name}
                        </p>
                      </div>
                      <div className="flex py-1">
                        <p className="text-sm font-sans text-gray-700">
                          {product.location}
                        </p>
                      </div>
                      <div className="flex py-1">
                        <p className="text-sm text-gray-700">
                          {formatDateDifference(product.updatedAt)}
                        </p>
                      </div>
                    </div>
                  </div>
              </>
            );
          })
        ) : (
          <p>No ads to display</p>
        )}
      </div>
      </div>
    </>
  );
};

export default SellerAds;