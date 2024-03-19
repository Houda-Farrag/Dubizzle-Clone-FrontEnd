import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";

const SellerBanner = ({userAds , userData}) => {
  useEffect(()=>{
  } , [userAds , userData])
  return (
    <>
      <div>
        <img
          src={
            userData?.profile.avatar !== ""
              ? userData?.profile.avatar
              : `https://ui-avatars.com/api/?name=${userData.profile.name}&background=FF9C9C&color=fff`
          }
          className="relative w-[200px] left-72 top-10 object-cover rounded-3xl "
          alt=""
        />
      </div>
      <div className="relative">
      <h2 className="font-bold relative left-80 top-16 w-44">{userAds?.length} published ads</h2>
        <button className="group relative left-56 top-24 h-12 w-72 overflow-hidden rounded-lg bg-red-50 text-lg shadow">
          <div className="absolute inset-0 w-3 bg-red-500 transition-all duration-[250ms] ease-out group-hover:w-full" />

          <span className="relative text-black font-semibold group-hover:text-white"> <FontAwesomeIcon icon={faShareNodes} /> Share profile</span>
        </button>
      </div>
    </>
  );
};

export default SellerBanner