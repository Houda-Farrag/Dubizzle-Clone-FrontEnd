import React from 'react';
import "./phone.css"
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Phone = () => {
    let navigate=useNavigate()

    return (
        <div  className=" flex justify-center ">
            <div className="  w-1/3 h-96 flex justify-center border-solid border-slate-300 border-2 mt-0 flex-col ">
               <div className="flex justify-between mb-20 ">
                <button onClick={()=>{navigate(`/login`)}} ><FaArrowLeft className=" text-2xl" />  </button>
                <button  onClick={()=>{navigate(`/`)}} >  <IoMdClose className=" text-2xl" /></button>
               </div>
               <div className=" mx-9 gap-5"> 
                 dubbizle logo
                <h1 className=" mt-4 font-bold text-xl">Enter Your Phone</h1>
               </div>


               <div className=" flex flex-row  w-4/5  ml-6  rounded-lg border-1 border-solid border-slate-400  mt-5 ">
                <span>+20</span>
                <div className="  w-1  h-6 bg-slate-600 " ></div>
                <input    type="number" placeholder='Phone number' className=" outline-none appearance-none "  />


               </div>



               <button className="disabled w-4/5   ml-6  border-1 border-solid border-slate-400 disable mt-5" >next</button>





            </div>
        </div>
    );
}

export default Phone;
