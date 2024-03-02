import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import img_1 from "../../assets/6.jpg";

export const PropertyBanner = () => {
  return (
    <>
      <div>
        <img
          src={img_1}
          className="relative w-1/5 left-52 top-32 object-cover rounded-3xl "
          alt=""
        />
      </div>
      <div>
        <h2 className="font-bold relative left-72 top-40 w-44">65 puplished ads</h2>
        <button className="group relative left-56 top-48 h-12 w-72 overflow-hidden rounded-lg bg-red-50 text-lg shadow">
          <div className="absolute inset-0 w-3 bg-red-500 transition-all duration-[250ms] ease-out group-hover:w-full" />

          <span className="relative text-black font-semibold group-hover:text-white"> <FontAwesomeIcon icon={faShareNodes} /> Share agency profile</span>
        </button>
      </div>
    </>
  );
};
