import { useState } from "react";
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [facebook, setFacebook] = useState(null);
  const [google, setGoogle] = useState();
  const { login } = useLogin();
  const { data, setData, registerUser } = useRegister()
  const { loginUser } = useLoginWithEmail()

  const navigate = useNavigate();

  const togglebutton = () => {
    setIsOpen(!isOpen);
  };

  const showProfileDetials = () => {
    setIsOpen1(!isOpen1);
  };

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
                    {!facebook && !google && !data ? (
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
                              {google && (
                                <img
                                  className="w-[32px] rounded-3xl"
                                  src={google?.picture}
                                />
                              )}
                              {facebook && (
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" width={32} height={32}><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z" /><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z" /></g></svg>

                              )}
                              {data && (
                                <p> {data[0]} </p>
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
              class="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
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
