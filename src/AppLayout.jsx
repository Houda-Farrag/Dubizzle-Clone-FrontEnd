import { Outlet } from "react-router-dom";
import Header from "./Components/HeaderComp/Header";
import Footer from "./Components/FooterComp/Footer";
import { Toaster } from "react-hot-toast";
import useCheckingForToken from "./Hooks/useCheckingForToken";
import { useEffect, useState } from "react";


export default function AppLayout() {
  const { getMyProfileFromToken, profile } = useCheckingForToken();
  const [token , setToken] = useState(null)
  const getToken = () => {
    const token = localStorage.getItem("jwt");
    setToken(token);
};
  useEffect(() => {
    getMyProfileFromToken(token);
    getToken();
  }, [profile , getMyProfileFromToken , token , getToken]);
  return (
    <>
      <Header profile={profile}></Header>
      <div className="md:mt-32 mt-34 ">
        <Outlet />
        <Toaster />
      </div>
      <Footer></Footer>
    </>
  );
}


