import { Card } from "antd";
import "./CategoriesCard.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../Store/Slices/Favorites";
import UseGetProduct from "../../Hooks/UseGetProduct";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function CategoriesCard({ catName, dataProd }) {
  const { setId } = UseGetProduct();
  const Favorit = useSelector((favorite) => favorite.favorite.fav);
  const dispatch = useDispatch();
  let idFav = Favorit.map((prod) => prod._id);

  function check(id) {
    return idFav.find((idmov) => idmov === id);
  }

  const addToFav = (obj) => {
    if (!check(obj._id)) {
      dispatch(addToFavorite(obj));
    } else {
      dispatch(removeFromFavorite(obj));
    }
  };
  let dataProd1=[]

  return (
    <div className="">
      <div className="grid grid-flow-col text-center justify-between  box-border ">
        <h1 className=" font-semi bold text-2xl mb-2 mt-6  "> {catName}</h1>
        <a className="font-semi bold  mb-2 mt-6 text-red-500 font-bold" href="">View more </a>
      </div>
      <div className="flex col-auto justify-between flex-wrap">
        {dataProd1.map((catData) => (
          <Link key={catData.id} to={`/product-details/${catData._id}`}>
            <Card
              onClick={(e) => {
                e.stopPropagation();
                setId(catData._id);
              }}
              hoverable
              style={{ Width: 700 }}
              className="mb-3"
              cover={<img alt="example" className="max-w-full h-40 " src={catData.images[0]} />}
            >
              <div className={`grid grid-flow-col justify-between`}>
                <p>{catData.price}</p>
                <button onClick={(e) => {
                  e.stopPropagation();
                  addToFav(catData);
                }}>
                  {check(catData._id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>
              <Meta title={catData.description} description={catData.description} />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
