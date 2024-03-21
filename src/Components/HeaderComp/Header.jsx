import { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { BsFillBuildingFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";

import {
  IoLocation,
  IoSearchSharp,
  IoChatbubbleOutline,
} from "react-icons/io5";

import "../CategorySubComp/CategorySub.css";
import "./Header.css";
import DropDownList from "../DropDownListComp/DropDownList";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import useLogin from "../../Hooks/useLogin";
import useRegister from "../../Hooks/useRegister";
import useLoginWithEmail from "../../Hooks/useLoginWithEmail";
import TopHeader from "../TopHeader/TopHeader";

export default function Header({ profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [facebook, setFacebook] = useState(null);
  const [google, setGoogle] = useState();
  const { login } = useLogin();
  const { data, setData, registerUser } = useRegister();
  const { loginUser } = useLoginWithEmail();

  const navigate = useNavigate();

  const togglebutton = () => {
    setIsOpen(!isOpen);
  };

  const showProfileDetials = () => {
    setIsOpen1(!isOpen1);
  };

  useEffect(() => {}, [profile]);

  return (
    <>
      <div className="relative w-full">
        <div className="bg-white shadow  z-10 md:fixed  sm:top-0 pt-3 w-full ">
      
          <div className='md:border-0 border-b-2 md:p-0 pb-3'>
                <TopHeader/>
            </div>
          
          <div className="my-2 mx-2 md:container">
            <div className="md:grid md:grid-flow-col md:gap-1 dis-flex">
              <div className="md:flex md:justify-center  z-99">
                <DropDownList
                  props={
                    <button
                      onClick={togglebutton}
                      className=" grid items-center grid-flow-col w-full border h-14 hover:shadow-md rounded-lg text-red-500 font-bold justify-evenly max-w-full"
                    >
                      <IoLocation className="text-red-500" />
                      egypt
                      {isOpen ? <FaAngleDown /> : <FaAngleUp />}
                    </button>
                  }
                ></DropDownList>
              </div>

              <div className="flex col-span-2 hidecontent">
                <input
                  type="text"
                  className="h-14 w-full border rounded-xl rounded-e-none "
                />
                <button className="bg-red-500 p-4 h-14 rounded-e-lg ">
                  <IoSearchSharp />
                </button>
              </div>

              <div className=" grid grid-flow-col ">
                <div className="md:grid md:h-14 md:font-bold text-xl md:text-center items-center sm:visible hidden">
                  <button>English</button>
                </div>
                <div className="text-center hidecontent">
                  <button className=" text-center ">
                    <IoChatbubbleOutline className="h-14 font-bold text-xl" />
                  </button>
                </div>
                <div className=" md:text-center ">
                  <button className="text-center">
                    <FaRegBell className="h-14 text-xl" />
                  </button>
                </div>
                <div className="md:relative hidecontent">
                  <div className="grid grid-flow-col item-center col-span-3">
                    {!facebook && !google && !data && !profile ? (
                      <Login
                        google={google}
                        facebook={facebook}
                        login={login}
                        setFacebook={setFacebook}
                        setGoogle={setGoogle}
                        registerUser={registerUser}
                        setData={setData}
                        loginUser={loginUser}
                      />
                    ) : (
                      <DropDownList
                        setFacebook={setFacebook}
                        setGoogle={setGoogle}
                        setData={setData}
                        props={
                          <button
                            onClick={showProfileDetials}
                            className=" grid h-14 grid-flow-col item-center items-center w-full font-bold justify-evenly max-w-full"
                          >
                            <span className="bg-red-100 p-2 hover:bg-red-300 border rounded-full">
                              {profile && (
                                <img
                                  className="w-[32px] text-white rounded-3xl"
                                  src={
                                    profile?.profile.avatar !== ""
                                      ? profile?.profile.avatar
                                      : `https://ui-avatars.com/api/?name=${profile.profile.name}&background=FF9C9C&color=fff`
                                  }
                                />
                              )}
                            </span>
                            {isOpen1 ? (
                              <FaAngleUp className="w-full text-xl" />
                            ) : (
                              <FaAngleDown className="w-full text-xl" />
                            )}
                          </button>
                        }
                      ></DropDownList>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => {
                    navigate("/sell");
                  }}
                  className="col-span-5 h-14 border bg-red-500 hover:bg-red-600 rounded-lg text-white font-bold tt1"
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="show-input-responsive ">
        <div className="px-2 " style={{ paddingTop: "5px" }}>
          <div className="mb-4 flex align-baseline border-gray-400 border-2 rounded p-1 mt-3 ">
            <div className="text-gray-400 text-3xl pt-1">
              <IoSearchSharp />
            </div>
            <input
              className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              id="username"
              type="text"
              placeholder={"What are you looking for?"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
