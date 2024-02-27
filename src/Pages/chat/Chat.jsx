import React, { useState, useRef } from "react";
import { PiNavigationArrowLight } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { IoFlagOutline } from "react-icons/io5";
import { FaSms } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import CategorySub from '../../Components/CategorySubComp/CategorySub'
import Header from './../../Components/HeaderComp/Header';

const Chat = () => {
  let navigate=useNavigate()

  const [prddetails, setPrddetails] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [sighn, setSighn] = useState("");
  const [price, setPrice] = useState("");

  const myElementRef = useRef(null);
  const nameofper1 = useRef(null);
  const sighnofname1 = useRef(null);
  const priceref1 = useRef(null);
  const prddetailsref1 = useRef(null);

  const nameofper2 = useRef(null);
  const sighnofname2 = useRef(null);
  const priceref2 = useRef(null);
  const prddetailsref2 = useRef(null);

  const mess = () => {
    setMessage(myElementRef.current.value );
    console.log(message);
    myElementRef.current.value = "";
  };

  const showchat = (nameRef, sighnRef, priceRef, prddetailsRef) => {
    setName(nameRef.current.innerText);
    setSighn(sighnRef.current.innerText);
    setPrice(priceRef.current.innerText);
    setPrddetails(prddetailsRef.current.innerText);
    console.log(priceRef.current.innerText);
    console.log(sighnRef.current.innerText);
  };

  return (
    <div>
      <Header/>
      <CategorySub className="mt-48"></CategorySub>
    {/* <div className="lg:flex lg:flex-row lg:container md:divide-y divide-solid mt-48">
      <div className="divide-y divide-solid lg:w-2/5 sm:w-full border-2 border-solid border-slate-400 ">
        <div className="h-16 text-2xl ml-2 mt-2 font-bold">INBOX</div>

        <div className="h-20">
          <h5 className="text-lg ml-2 mt-2 font-bold">Quick Filter</h5>
          <div className=" md:flex md:flex-row sm:flex-col border-b-2 justify-center p-2 md:divide-y md:divide-solid ">
            <button className="hover:bg-red-100 border-1 border-solid border-red-500 mx-2 w-12 rounded-lg">All</button>
            <button className="hover:bg-red-100 border-1 border-solid border-red-500 md:w-24 rounded-md">
              Unread Chats
            </button>
            <button className="hover:bg-red-100 border-1 border-solid border-red-500 mx-2 w-20 rounded-lg">
              important
           
</button>
          </div>

          <div className="cursor-pointer" onClick={() => showchat(nameofper1, sighnofname1, priceref1, prddetailsref1)}>
            <div className="flex flex-row">
              <span ref={sighnofname1} className="w-10 text-center text-2xl text-red-600">D</span>
              <div>
                <h3 ref={nameofper1}>Dr/Adel Omar</h3>
                <h3 ref={prddetailsref1}>Apple watch series 8 45mm new</h3>
                <h5 ref={priceref1}>Your offer:23000 EG</h5>
              </div>
            </div>
          </div>

          <div className="cursor-pointer" onClick={() => showchat(nameofper2, sighnofname2, priceref2, prddetailsref2)}>
            <div className="flex flex-row">
              <span ref={sighnofname2} className="w-10 text-center text-2xl text-red-600">E</span>
              <div>
                <h3 ref={nameofper2}>En/Ahmed Hassan</h3>
                <h3 ref={prddetailsref2}>Television samsung 8 45mm new</h3>
                <h5 ref={priceref2}>Your offer:11000 EG</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y divide-solid lg:w-3/5 sm:w-full">
        <div className="md:h-16 md:flex md:justify-between border-2 border-solid border-slate-400">
          <div className="flex-inetial">
            <span className="w-10 text-center text-2xl text-red-600">{sighn}</span>{" "}
            <h3>{name}</h3>{" "}
          </div>
          <div className="flex-inetial flex gap-5 pt-3 pr-3 text-3xl">
            <IoFlagOutline />
            <FiPhone />
            <FaSms />
          </div>
        </div>

        <div className="space h-20 border-2 border-solid border-slate-400 flex justify-between">
          <div className="flex-initial flex gap-3">
            <div className="bg-red-700 w-12 h-12"></div>
            <div className="">
              <h3 className=" pt-2">{prddetails}</h3>
              <h6 className=" pt-1">{price}</h6>
            </div>
          </div>
         
          <button   onClick={()=>{navigate(`put here the path of the prd details`)}}  className="flex-initial mt-3 mr-2 rounded-lg bg-cyan-500 w-20 h-10">view add</button>
        </div>

        <div className="bg-slate-600" style={{ height: "77vh" }}>
          <div className="relative bg-slate-300" style={{ height: "62vh" }}>
            <div className="absolute bottom-20 right-0 text-xl">{message}</div>
          </div>
          <div className="flex flex-row place-items-end">
            <input ref={myElementRef} type="text" className="outline-none border-1 border-solid border-slate-400" style={{ width: " 50vw", height: "15vh" }} />
            <div>
              <button className="w-20 h-24 rotate-90" onClick={() => mess()}><PiNavigationArrowLight className="border-white ml-5 text-3xl " /></button>
            </div>
          </div>
        </div>
      </div>
    </div> */}


<div className="lg:flex lg:flex-row lg:container md:divide-y divide-solid mt-48">
            {/* Left Section */}
            <div className="lg:w-2/5 sm:w-full border-2 border-solid border-slate-400 divide-y divide-solid">
                <div className="h-16 text-2xl ml-2 mt-2 font-bold">INBOX</div>

                <div className="h-20">
                    <h5 className="text-lg ml-2 mt-2 font-bold">Quick Filter</h5>
                    <div className="flex flex-col sm:flex-row sm:divide-x divide-solid sm:justify-center p-2">
                        <button className="hover:bg-red-100 border-1 border-solid border-red-500 mx-2 my-1 sm:my-0 w-12 rounded-lg">All</button>
                        <button className="hover:bg-red-100 border-1 border-solid border-red-500 mx-2 my-1 sm:my-0 w-24 rounded-md">Unread Chats</button>
                        <button className="hover:bg-red-100 border-1 border-solid border-red-500 mx-2 my-1 sm:my-0 w-20 rounded-lg">Important</button>
                    </div>

                    {/* Sample Chat Items */}
                    <div className="cursor-pointer" onClick={() => showchat(nameofper1, sighnofname1, priceref1, prddetailsref1)}>
                        <div className="flex flex-row">
                            <span ref={sighnofname1} className="w-10 text-center text-2xl text-red-600">D</span>
                            <div>
                                <h3 ref={nameofper1}>Dr/Adel Omar</h3>
                                <h3 ref={prddetailsref1}>Apple watch series 8 45mm new</h3>
                                <h5 ref={priceref1}>Your offer:23000 EG</h5>
                            </div>
                        </div>
                    </div>

                    <div className="cursor-pointer" onClick={() => showchat(nameofper2, sighnofname2, priceref2, prddetailsref2)}>
                        <div className="flex flex-row">
                            <span ref={sighnofname2} className="w-10 text-center text-2xl text-red-600">E</span>
                            <div>
                                <h3 ref={nameofper2}>En/Ahmed Hassan</h3>
                                <h3 ref={prddetailsref2}>Television samsung 8 45mm new</h3>
                                <h5 ref={priceref2}>Your offer:11000 EG</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-3/5 sm:w-full divide-y divide-solid">
                <div className="h-16 flex justify-between border-2 border-solid border-slate-400">
                    <div className="flex items-center ml-2">
                        <span className="w-10 text-center text-2xl text-red-600">{sighn}</span>{" "}
                        <h3>{name}</h3>{" "}
                    </div>
                    <div className="flex gap-5 pt-3 pr-3 text-3xl">
                        <IoFlagOutline />
                        <FiPhone />
                        <FaSms />
                    </div>
                </div>

                <div className="h-20 flex justify-between items-center border-2 border-solid border-slate-400">
                    <div className="flex gap-3">
                        <div className="bg-red-700 w-12 h-12"></div>
                        <div className="">
                            <h3 className="pt-2">{prddetails}</h3>
                            <h6 className="pt-1">{price}</h6>
                        </div>
                    </div>

                    <button onClick={() => { navigate(`put here the path of the prd details`) }} className="mt-3 mr-2 rounded-lg bg-cyan-500 w-20 h-10">View Add</button>
                </div>

                <div className="bg-slate-600" style={{ height: "77vh" }}>
                    <div className="relative bg-slate-300" style={{ height: "62vh" }}>
                        <div className="absolute bottom-20 right-0 text-xl">{message}</div>
                    </div>
                    <div className="flex flex-row items-end">
                        <input ref={myElementRef} type="text" className="outline-none border-1 border-solid border-slate-400" style={{ width: "50vw", height: "15vh" }} />
                        <div>
                            <button className="w-20 h-24 rotate-90" onClick={() => mess()}><PiNavigationArrowLight className="border-white ml-5 text-3xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Chat;
