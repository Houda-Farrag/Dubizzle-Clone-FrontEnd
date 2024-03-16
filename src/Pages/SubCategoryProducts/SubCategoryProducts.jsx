import { FaRegHeart } from "react-icons/fa";
import styles from './SubCategoryProducts.module.css'
import { MdOutlineCheck } from "react-icons/md";
import ProductCardHorizontal from "../../Components/ProductCardHorizontal/ProductCardHorizontal";
import arrowDown from '../../assets/images/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg'
import { useState } from "react";
import stylesForm from './SubCategoryProducts.module.css'
const SubCategoryProducts = () => {
  const [selectSort, setSelectSort] = useState('Newly listed')
  const [sortedWay, setSortedWay] = useState([true, false, false, false, false])
  const [showSortedList, setShowSortedList] = useState(false)
  const [rotated, setrotated] = useState('')
  const toggleSortedList = () => {
    (rotated == '') ? setrotated('rotate-180') : setrotated('')
    setShowSortedList(!showSortedList)

  }
  const handleSelect = (content, index) => {
    console.log(index);
    setSelectSort(content)
    const newArray = Array.from({ length: sortedWay.length, defaultValue: false })
    newArray[index] = true
    setSortedWay(newArray)
  }
  return (<>
    <div className="container">
      <div className="flex justify-between w-full mb-3">
        <p className="text-2xl font-bold">Furniture & Decor</p>
        <div className={`${styles.btnSaveSearch}`}><FaRegHeart className="mr-2 text-xl text-red-600" /> Save Search</div>
      </div>
      <div className="flex">
        <div className="w-1/4 mr-2 ps-2">
          <p className=" border-b pb-5 pl-4 border-slate-200 font-bold">Filters</p>
          <div className="p-3 pb-8 border-b border-slate-300">
            <div className="text-md font-bold ">CATEGORIES</div>
            <a href="#" >
              <div className="my-4 text-sm">
                All categories
              </div>
            </a>
            <p className="font-bold text-sm ms-4">Furniture & Decor</p>
            <div className="ms-7">
              <p className="my-4 text-sm">Bathroom</p>
              <p className="my-4 text-sm">Bedroom</p>
              <p className="my-4 text-sm">Dining Room</p>
              <p className="my-4 text-sm">Fabrics - Curtains - Carpets</p>
              <p className="my-4 text-sm">Garden - Outdoor</p>
            </div>
          </div>
          <div>
            <div className="text-lg mt-2 font-bold ms-4">Locations</div>
            <select className={stylesForm.formControl}>
              <option >Egypt</option>
              <option >see all ads in all Egypt</option>
            </select>
            <div className="mt-4">
              <p className="font-bold text-sm ms-4">Egypt</p>
              <div className="ms-7">
                <p className="my-4 text-sm">Cairo</p>
                <p className="my-4 text-sm">Giza</p>
                <p className="my-4 text-sm">Alexandria</p>
                <p className="my-4 text-sm">Sharqia</p>
                <p className="my-4 text-sm">Sharqia</p>
              </div>
            </div>
            <div className="mt-7 p-3 pb-8 border-b border-slate-200">
              <p className="font-bold text-md ms-4 mb-2">Price</p>
              <div className="flex gap-2 px-4">
                <input type="number" defaultValue={0} className="outline-none w-2/4 p-2 border-b border-gray-400" />
                <input type="number" defaultValue={250000} className="outline-none  w-2/4 p-2 border-b border-gray-400" />
              </div>
            </div>
            <div className="ms-2">
              <p className="font-bold text-md ms-4 my-4">CONDITION</p>
              <div className="ms-4">
              <div className="flex">
              <div className="inline-flex">
                <label
                  className="relative flex cursor-pointer  mr-2"
                  htmlFor="checkbox"
                >
                  <input
                    type="checkbox"
                    className="peer h-6 w-6 flex cursor-pointer appearance-none rounded-s rounded-e border-2 border-gray-300  checked:border-red-500 checked:bg-red-500"
                    id="checkbox"
                  />
                  <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <MdOutlineCheck />
                  </div>
                </label>
              </div>
              <p className="text-sm mt-0.5">Used</p>
            </div>
            <div className="flex mt-2">
              <div className="inline-flex">
                <label
                  className="relative flex cursor-pointer  mr-2"
                  htmlFor="checkbox"
                >
                  <input
                    type="checkbox"
                    className="peer h-6 w-6 flex cursor-pointer appearance-none rounded-s rounded-e border-2 border-gray-300  checked:border-red-500 checked:bg-red-500"
                    id="checkbox"
                  />
                  <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <MdOutlineCheck />
                  </div>
                </label>
              </div>
              <p className="text-sm mt-0.5">New</p>
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex justify-between mt-5 mb-4 pb-4 border-b border-gray-300">
            <div className="flex">
              <div className="inline-flex">
                <label
                  className="relative flex cursor-pointer  mr-4"
                  htmlFor="checkbox"
                >
                  <input
                    type="checkbox"
                    className="peer h-6 w-6 flex cursor-pointer appearance-none rounded-s rounded-e border-2 border-gray-300  checked:border-red-500 checked:bg-red-500"
                    id="checkbox"
                  />
                  <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <MdOutlineCheck />
                  </div>
                </label>
              </div>
              <p>Show Verified Accounts first</p>
            </div>
            <div onClick={toggleSortedList} className="relative">
              <p className="font-bold text-sm hover:cursor-pointer flex" >SORT BY: <span className="text-sm font-thin ps-4 flex">{selectSort} <img src={arrowDown} width={16} height={16} className={`${rotated} ms-4 transition-all`} /></span></p>

              {showSortedList &&
                <ul className="absolute p-2 right-0 bg-white text-black z-10  top-8 w-vw-15/100  h-vh-20/100">
                  {["Newly listed", "Most relevant", "Lowest price", "Highest price", "Verified accounts"].map((element, index) => (
                    <li key={index} className="hover:cursor-pointer flex py-3 relative ps-8 text-sm" onClick={() => { handleSelect(element, index) }} >
                      {sortedWay[index] && <MdOutlineCheck className="text-xl absolute left-0 top-2.5" />}{element} </li>
                  ))}

                </ul>
              }
            </div>


          </div>
          {/* Product listings */}
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <div>

          </div>
        </div>
      </div>
    </div>
  </>);
}

export default SubCategoryProducts;
