import product1 from '../../assets/images/product1.jpg'
import { FaRegHeart } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
const ProductCardHorizontal = () => {
    return (
        <div>
            <div className="flex  items-center justify-center mb-3">
                <div className="relative flex w-full  flex-row h-vh-33/100 rounded-xl bg-white text-gray-700 ">
                    <div className="relative m-0 w-vw-23/100 shrink-0 overflow-hidden rounded-lg rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={product1}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-4 w-full border border-slate-20 border-l-0 rounded-r-lg">
                        <div className='flex justify-between  w-full'>
                            <h3 className=" block font-sans text-2xl font-bold uppercase leading-relaxed tracking-normal text-red-600 antialiased">
                                EGP 10,000
                            </h3>
                            <span>
                                <FaRegHeart className='text-red-600 text-xl' />
                            </span>
                        </div>
                        <h5 className="pt-2 h-vh-10/100 block font-sans text-lg font-semibold  text-black">
                            Living Room Blue 280X183
                        </h5>
                        <p className='text-sm'>Nasr City, Cairo. 4 day ago</p>
                        <div className='flex pt-2'>
                            <a href='#'>
                                <div className='w-24 mr-1 flex align-center justify-center p-3 hover:bg-red-400 
                                hover:cursor-pointer text-black bg-red-100 rounded-md font-bold text-sm' ><FiPhone className='mr-2 mt-0.5 text-red-600'/>call</div>
                            </a>
                            <a href='#'>
                                <div className='w-24 ms-1 p-3 flex align-center justify-center hover:bg-red-400 
                                hover:cursor-pointer bg-red-100 rounded-md font-bold text-sm text-black'><BsChatDots className='mr-2 mt-0.5 text-red-600'/>chat</div>
                            </a>
                        </div>
                    </div>
                </div>

                <link
                    rel="stylesheet"
                    href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
                />
            </div>

        </div>
    );
}

export default ProductCardHorizontal;
