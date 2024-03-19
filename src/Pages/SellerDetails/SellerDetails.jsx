import { useParams } from "react-router-dom";
import SellerAds from "../../Components/SellerAds/SellerAds"
import SellerBanner from "../../Components/SellerBanner/SellerBanner"
import useGetUserWithAds from "../../Hooks/useGetUserWithAds";
import { useEffect } from "react";

const SellerDetails = () => {
  const { userData, getUserWithAds, userAds } = useGetUserWithAds();
  const { id } = useParams();

  useEffect(() => {
    getUserWithAds(id);
  }, [id, getUserWithAds , userAds , userData]);
  return (
    <> 
      <SellerBanner userAds={userAds} userData={userData}/>
      <SellerAds userAds={userAds} userData={userData} />
    </>
  )

}

export default SellerDetails