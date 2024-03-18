import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { BsFillBuildingFill } from "react-icons/bs";
<<<<<<< HEAD
import { IoLocation, IoHomeSharp, IoSearchSharp, IoChatbubbleOutline, IoArrowBack, IoArrowUp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

import '../CategorySubComp/CategorySub.css'
import './Header.css'
import DropDownList from '../DropDownListComp/DropDownList';
import { useNavigate } from 'react-router-dom';
import arrowDown from '../../assets/images/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg'
import Wallet from '../../assets/images/iconWallet.svg'
import myAds from '../../assets/images/iconMyAds.svg'
import Heart from '../../assets/images/iconHeart.svg'
import BusinessPackage from '../../assets/images/iconBusinessPackage.svg'
import BoughtPackage from '../../assets/images/iconBoughtPackage.svg'
import Blog from '../../assets/images/iconBlog.svg'
import Help from '../../assets/images/iconHelp.svg'
import Filters from '../../assets/images/iconFilters.svg'
import Logout from '../../assets/images/iconLogout.svg'


=======
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
>>>>>>> ce0adb098bc83011a029f0eb7428643b8f39e072

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [facebook, setFacebook] = useState(null);
  const [google, setGoogle] = useState();
  const { login } = useLogin();
  const { data, setData, registerUser } = useRegister()
  const { loginUser } = useLoginWithEmail()

<<<<<<< HEAD
  //////

  const [showProfileList, setShowProfileList] = useState(false)
  const [rotated, setrotated] = useState('')
  const toggleProfileList = () => {
    (rotated == '') ? setrotated('rotate-180') : setrotated('')
    setShowProfileList(!showProfileList)
  }

  ///
=======
  const navigate = useNavigate();
>>>>>>> ce0adb098bc83011a029f0eb7428643b8f39e072

  const togglebutton = () => {
    setIsOpen(!isOpen);
  };

  const showProfileDetials = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <>
      <div className="relative w-full">
        <div className="bg-white shadow  z-10 sm:fixed relative  top-0 pt-3 w-full ">
          <div className="sm:border-none border-b-2">
            <div className="md:container mx-2   flex justify-start ">
              <button className="text-3xl me-2 md:hidden visible text-red-600"><BsList /></button>
              <a href="#">
                <svg fill="none" viewBox="0 0 64 35" alt="Logo" className="edf25a1c" width={82}>
                  <path fill="#212223" d="M37.04 33.28c.13.06.32.09.45.09.37 0 .6-.12.78-.52l.3-.71-2.2-5.43h1.06l1.68 4.21 1.68-4.2h1.08l-2.65 6.38c-.34.85-.93 1.15-1.7 1.16a2.9 2.9 0 0 1-.63-.08l.15-.9zm-2.3-1.2v-7.4h1v7.4h-1zm-3.57 0v-5.37h1v.87a2.28 2.28 0 0 1 1.75-.95v1l-.34-.02c-.5 0-1.18.38-1.41.78v3.73h-1zM24.8 29.4c0-1.56 1.12-2.82 2.68-2.82 1.61 0 2.61 1.26 2.61 2.9v.25h-4.24c.08.9.74 1.66 1.82 1.66.57 0 1.2-.22 1.6-.63l.46.65c-.54.53-1.3.8-2.16.8a2.68 2.68 0 0 1-2.78-2.82zm2.68-2c-1.07 0-1.6.87-1.64 1.6h3.28c-.03-.7-.5-1.6-1.64-1.6zm-4.77 4.68V28.5c0-.62-.27-1.03-.93-1.03-.54 0-1.08.38-1.33.77v3.84h-1V28.5c0-.62-.27-1.03-.95-1.03-.52 0-1.04.4-1.3.78v3.83h-1v-5.37h1v.8c.22-.33.93-.89 1.73-.89.8 0 1.29.42 1.45 1 .31-.5 1.02-1 1.81-1 1 0 1.52.55 1.52 1.62v3.88h-1zm-10.1 0v-5.37h1v.87a2.28 2.28 0 0 1 1.76-.95v1l-.34-.02c-.5 0-1.18.38-1.41.78v3.73h-1zm-3.8.13c-1.63 0-2.67-1.26-2.67-2.82 0-1.54 1.04-2.8 2.7-2.8 1.68 0 2.72 1.26 2.72 2.8 0 1.56-1.04 2.82-2.7 2.82zm.04-.9c1.07 0 1.66-.89 1.66-1.92 0-1-.6-1.92-1.66-1.92-1.07 0-1.67.9-1.67 1.92s.6 1.93 1.67 1.93zm-5.25.77V27.6h-.9v-.88h.88v-.35c0-1.16.68-1.8 1.64-1.8.34 0 .64.07.88.2l-.24.74a.95.95 0 0 0-.48-.1c-.5 0-.8.34-.8.99v.35h1.1v.88h-1.1v4.5h-1z" />
                  <path fill="#212223" fillRule="evenodd" d="M55.25 33.54h-2.38V23.51l2.38.03v10.04zm-3.23-5a4.13 4.13 0 1 1-8.26 0 4.13 4.13 0 0 1 8.26 0zm-2.88 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zm12.14-2.5H59.7l-.92.91-.93-.92h-1.58v1.6l.91.92-.9.9v1.6h1.59l.9-.9.91.9h1.61v-1.6l-.9-.9.9-.92v-1.6z" clipRule="evenodd" />
                  <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
                    <path fill="#212223" d="M42.3 11.9c-.33.25-.54.6-.9 1.06a54.45 54.45 0 0 0-2.36 3.3c-.4.6-.78 1.12-1.1 1.75h4.45v1.78h-6.9v-1.4c.32-.47.57-1 .93-1.56l1.12-1.7c.38-.57.77-1.14 1.14-1.65.38-.52.72-.95 1-1.37h-3.97v-1.78h6.58v1.53zm8.13 0a40.84 40.84 0 0 0-1.97 2.58c-.4.56-.8 1.16-1.21 1.77-.4.6-.77 1.13-1.1 1.76h4.38v1.78h-6.78v-1.4c.31-.47.55-1 .9-1.56a92.92 92.92 0 0 1 2.26-3.35l1-1.37h-3.95v-1.78h6.47v1.53zm3.87-5.93h-.03c-.34 0-1.82.27-2.16.6V19.8h2.18V5.97zm7.53 8.17c0-.32-.05-.58-.13-.85a1.8 1.8 0 0 0-.37-.74 1.74 1.74 0 0 0-1.43-.64 1.94 1.94 0 0 0-1.52.7 3.12 3.12 0 0 0-.6 1.49h4.05zm-6.3.98c0-.83.1-1.55.35-2.18.25-.62.58-1.14.98-1.56a4.33 4.33 0 0 1 3.02-1.25c1.3 0 2.3.4 3.03 1.2.73.81 1.1 2.01 1.1 3.6a9.37 9.37 0 0 1 0 .78l-6.2.03c.05.86.32 1.38.8 1.8.47.4 1.15.63 2.05.63a6.75 6.75 0 0 0 2.48-.44l.3 1.8a6.93 6.93 0 0 1-2.1.5 7.2 7.2 0 0 1-3.1-.31 4.01 4.01 0 0 1-2.39-2.58 6.26 6.26 0 0 1-.28-1.97zm-39.24-4.75v4.93c0 1-.13 1.73-.42 2.17-.3.43-.8.64-1.52.64-.73 0-1.22-.21-1.5-.64-.3-.44-.43-1.16-.43-2.17v-4.93h-2.2v5.28c0 .63.07 1.22.21 1.75a3.03 3.03 0 0 0 1.87 2.28c.5.2 1.3.32 2.06.32s1.56-.1 2.07-.32a3.04 3.04 0 0 0 1.87-2.28 7.4 7.4 0 0 0 .18-1.75v-5.28h-2.2zM2.23 15.05c0-.92.18-1.66.55-2.2.36-.54.94-.8 1.73-.8a3.05 3.05 0 0 1 1.75.51V18l-.58.1c-.25.02-.54.03-.9.03a2.3 2.3 0 0 1-1.87-.82 3.43 3.43 0 0 1-.68-2.26m-1.9 2.08a4.1 4.1 0 0 0 2.45 2.55c.6.23 1.26.34 2 .34a12.55 12.55 0 0 0 3.68-.52V5.97c-.36 0-1.85.27-2.18.6l-.02 4.11a4.21 4.21 0 0 0-2.12-.52c-.65 0-1.24.12-1.76.36a3.4 3.4 0 0 0-1.3 1c-.35.43-.62.95-.8 1.56a6.84 6.84 0 0 0 .05 4.05zm25.47.18c-.45.55-1.07.82-1.88.82a7.33 7.33 0 0 1-1.47-.14v-5.43a3.4 3.4 0 0 1 1.76-.52c.8 0 1.37.27 1.74.81.36.54.54 1.28.54 2.2 0 .96-.22 1.72-.68 2.26m2.63-4.23a4.62 4.62 0 0 0-.8-1.56 3.47 3.47 0 0 0-1.3-1 4.27 4.27 0 0 0-1.77-.35c-.44 0-.84.05-1.2.16-.37.1-.71.23-.92.36V5.97h-.03c-.34 0-1.82.27-2.16.6V19.5a12.6 12.6 0 0 0 3.68.52c.74 0 1.4-.1 2-.34a4.1 4.1 0 0 0 2.45-2.55 6.84 6.84 0 0 0 .05-4.06m3.53-2.7s-1.01 0-1.3.18c-.35.22-.56.53-.56.92 0 .37.12 3.35.17 3.64.05.29.35.1.48.83.13.75.43 3.9.5 3.98.12.12.61.2.73.2.1 0 .6-.08.67-.2.08-.07.4-3.23.52-3.98.12-.74.42-.54.46-.83.05-.3.17-3.27.17-3.64 0-.4-.2-.7-.56-.92a3.74 3.74 0 0 0-1.3-.18h-.05m1.32-1.67a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
                    <path fill="#DE1F26" d="M31.3 4.05c.67-.55 1.68-1.56 1.68-2.34 0-1.17-.62-1.7-.62-1.7s.27.92-1.87 2.9C28.65 4.64 28.9 6.2 28.9 6.3c.1.95.49 2.06 1.2 2.52a2.78 2.78 0 0 1-.46-1.45c0-.15-.14-1.73 1.7-3.27" />
                    <path fill="#DE1F26" d="M34.8 7.46c-.03-.93-.33-1.01-.68-1.84-.5-1.34.35-2.49-.58-3.9-.29 1.8-1.64 2.33-2.62 3.5-.76.9-.97 2.07-.6 2.9a1.8 1.8 0 1 1 3.19 1.56c.85-.3 1.33-1.32 1.3-2.22z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h64v20.13H0z" />
                    </clipPath>
                  </defs>
                </svg>

              </a>
              <div className="flex ">
                <button
                  onClick={() => {
                    navigate("/property");
                  }}
                  className=" grid grid-flow-col items-center text-white-100"
                >
                  <span
                    className="text-x flex  hover:underline"
                  >
                    <BsFillBuildingFill className="text-3xl mx-2 rounded-xl bg-red-200 p-1" />
                    Properties
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="my-2 mx-2 md:container">
            <div className="md:grid md:grid-flow-col md:gap-1 dis-flex">
              <div className="md:flex md:justify-center z-99">
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
<<<<<<< HEAD
              <div className=' text-center'>
                <button className='text-center'>
                  <FaRegBell className='h-14 text-xl' />
                </button>
              </div>


              <div onClick={toggleProfileList} className="relative mt-3 ms-2">
                <p className="font-bold text-sm hover:cursor-pointer flex" ><span className='bg-red-50 text-red-600 w-8 h-8 flex justify-center items-center  rounded-full'>A</span>
                  <img src={arrowDown} width={25} height={25} className={`${rotated} ms-2 transition-all`} /></p>

                {showProfileList &&
                  <div className="profile absolute right-0 bg-white text-black shadow-2xl overflow-y-scroll  top-12 rounded-sm w-vw-21/100  h-vh-80/100">
                    <div className='border-b pb-4 border-gray-300'>
                      <div className="name flex p-4 gap-4 items-center  relative text-sm" ><span className='bg-red-50 text-2xl font-bold text-red-600 w-16 h-16 flex justify-center items-center  rounded-full'>A</span>
                        <div>
                          <p className='text-md'>Hello,</p>
                          <p className='text-xl font-bold'>Ahmed Khalifa</p>
                        </div>
                      </div>
                      <div className='edit px-4'>
                        <p className=' cursor-pointer font-semibold text-sm text-center border border-red-500
                             p-2 hover:bg-red-50 rounded-lg' onClick={() => { navigate('/EditProfile') }}>View and edit profile
                        </p>
                      </div>
                    </div>
                    <div className='border-b border-gray-300'>
                      <div className='flex items-center ps-4 h-12 bg-red-50 hover:bg-slate-100 cursor-pointer'>
                        <img src={Wallet} width={23} height={21} />
                        <div className='ms-3 h-10'>
                          <p style={{ marginTop: "-2px" }}>Dubbizle Wallet</p>
                          <p className='text-xs'>Balance: EGP 0</p>
                        </div>
                      </div>
                      <div className='flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer'>
                        <div className='w-6 flex justify-center'>
                        <img src={myAds} width={23} height={24} />                      
                        </div>
                        <p className='ms-3'>My Ads</p>
                      </div>
                      <div className='flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer'>
                        <div className='w-6 flex justify-center'>
                        <img src={Heart} width={23} height={24} />                 
                        </div>
                        <p className='ms-3'>Favourite</p>
                      </div>
                      <div className='flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer'>
                        <div className='w-6 flex justify-center'>
                        <LuEye className='w-6 h-5'/>                        
                        </div>
                        <p className='ms-3'>Public Profile</p>
                      </div>
                      <div className='flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer'>
                        <div className='w-6 flex justify-center'>
                        <img src={BusinessPackage} width={22} height={24} />                             
                        </div>
                        <p className='ms-3'>Buy Discounted Packages</p>
                      </div>
                      <div className='flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer'>
                        <div className='w-6 flex justify-center'>
                        <img src={BoughtPackage} width={23} height={24} />                               
                        </div>
                        <p className='ms-3'>Bought Packages & Billing</p>
                      </div>

                    </div>

                    <div className='blogHelp border-b border-gray-300'>
                      <div className='flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer'>
                        <div className='w-6 flex justify-center'>
                        <img src={Blog} width={23} height={24} />                      
                        </div>
                        <p className='ms-3'>Blog</p>
                      </div>
                      <div className='flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer'>
                        <div className='w-6 flex justify-center'>
                        <img src={Help} width={23} height={24} />                 
                        </div>
                        <p className='ms-3'>Help</p>
                      </div>
                      <div className='flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer'>
                        <div className='w-6 flex justify-center'>
                        <img src={Filters} width={23} height={24} />                         
                        </div>
                        <p className='ms-3'>Setting</p>
                      </div>
                    </div>
                    <div className='flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer'>
                        <div className='w-6 flex justify-center'>
                        <img src={Logout} width={23} height={24} />                         
                        </div>
                        <p className='ms-3'>Logout</p>
                      </div>
                  </div>
                }
=======

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
>>>>>>> ce0adb098bc83011a029f0eb7428643b8f39e072
              </div>
            </div>
            <div className="show-input-responsive">
              <div class="mb-4 flex align-baseline border-gray-400 border-2 rounded p-1">
                <div className="text-gray-400 text-3xl pt-1">
                  <IoSearchSharp />
                </div>
                <input
                  class="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                  id="username"
                  type="text"
                  placeholder={"What are you looking for?"}
                />

<<<<<<< HEAD


              <button className='col-span-5 h-14 border bg-red-500 hover:bg-red-600 rounded-lg text-white font-bold'>Sell</button>
=======
              </div>
>>>>>>> ce0adb098bc83011a029f0eb7428643b8f39e072
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
