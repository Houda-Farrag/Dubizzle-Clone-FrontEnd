import { Outlet } from "react-router-dom";
import Header from "./Components/HeaderComp/Header";
import Footer from "./Components/FooterComp/Footer";
import { Toaster } from "react-hot-toast";
import useCheckingForToken from "./Hooks/useCheckingForToken";
import { useEffect } from "react";

export default function AppLayout() {
  const { getMyProfileFromToken, profile } = useCheckingForToken();
  useEffect(() => {
    getMyProfileFromToken();
  }, []);
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
