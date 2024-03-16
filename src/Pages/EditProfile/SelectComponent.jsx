import { useState } from "react"
import arrowDown from '../../assets/images/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg'
function SelectComponent(props) {
    const { selectedOptions, name ,selectWidth,maxHeight} = props;
    const [showSortedList, setShowSortedList] = useState(false)
    const [rotated, setrotated] = useState('')
    const [selectSort, setSelectSort] = useState(`${name}`)
    const toggleSortedList = () => {
        (rotated == '') ? setrotated('rotate-180') : setrotated('')
        setShowSortedList(!showSortedList)
    }
    const handleSelect = (element) => {
        setSelectSort(element)
    }
    
    return (
        <div className={selectWidth}>
            <div onClick={toggleSortedList} className="relative">
                <p className="text-md  px-3 py-3 rounded-lg border flex justify-between"><span>{selectSort}</span> <img src={arrowDown} width={22} height={22} className={`${rotated} ms-4 transition-all`} /></p>

                {showSortedList &&
                    <ul className={`${maxHeight} absolute left-0 py-2 h-vh-57/100 bg-white w-full shadow-xl text-black z-10  top-14 overflow-y-auto`}>
                        {selectedOptions.map((element, index) => (
                            <li key={index} value={element} className="hover:cursor-pointer w-full ps-2 hover:bg-slate-100  py-1  text-sm" onClick={() => { handleSelect(element) }} >
                                {element} </li>
                        ))}
                    </ul>
                }
            </div>

        </div>
    )
}

export default SelectComponent