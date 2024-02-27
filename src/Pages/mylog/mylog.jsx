import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Mylog = () => {
    let navigate=useNavigate()

    return (
        <div className=" flex justify-center">
            <div className="  border-3 border-solid border-gray-400 w-4/12 h-2/3 mt-10 ml-15  ">

                            <div className=" flex flex-col gap-y-10 text-center  my-14 ">
                                <span >
                                    Dubbizle logo
                                </span   >
                                <h1 className=" text-lg font-bold" >welcome to dubbizle</h1>
                                <h5 className="  
                                ">The trusted community of buyers and sellers.</h5>

                            </div>

                             

                             

                            
                             

                             <div className=" flex flex-col gap-8 m-5">

                                  <button     className=" flex items-center justify-center border-solid border-red-600 border-1 rounded-lg ">
                                  <FcGoogle className="mr-5" />
                                  <span > continue with google</span>
                                  </button>

                                  <button   className=" flex items-center justify-center  border-solid border-red-600 border-1 rounded-lg  ">
                                  <FaFacebook className="mr-5 bg-blue" />
                                  <span> continue with facebook</span>
                                  </button>

                                  <button className=" flex items-center justify-center  border-solid border-red-600 border-1 rounded-lg  ">
                                  <MdEmail  className="mr-5" />
                                  <span> continue with email</span>
                                  </button>
                                  <button onClick={()=>{navigate(`/phone`)}} className=" flex items-center justify-center border-solid border-red-600 border-1 rounded-lg  ">
                                  <FaPhoneAlt className="mr-5" />
                                  <span> continue with phone</span>
                                  </button>







                             </div>
            </div>

            </div>
    );
}

export default Mylog;
