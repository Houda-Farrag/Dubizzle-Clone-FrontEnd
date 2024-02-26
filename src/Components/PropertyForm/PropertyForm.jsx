import { useForm } from 'react-hook-form'
import styles from './PropertyForm.module.css'
import {  useState } from 'react';
import { Button } from 'antd';
import { MdOutlineCheck } from "react-icons/md";
const PropertyForm = () => {
    const { register, handleSubmit } = useForm({ mode: 'onChange' });
    const findProperty = (data) => {
        console.log(data)
    }
    const [formApear, setformApear] = useState(false)
    const [checkMarkBed, setCheckMarkBed] = useState([false, false, false, false, false])
    const [checkMarkBath, setCheckMarkBath] = useState([false, false, false, false, false])
    const [bed, setBed] = useState([])
    const [bath, setBath] = useState([])
    const [formArea, setFormArea] = useState(false)
    const [selectedMaxArea, setSelectedMaxArea] = useState('Any')
    const [selectedMinArea, setSelectedMinArea] = useState(0)

    const showForm = () => {
        (formApear == false) ? setformApear(true) : setformApear(false)
    }
    const toggleMarkBed = (element, index) => {
        if (bed.length == 0)
            setBed([element])
        else {
            if (bed.includes(element)) {
                const newArr = bed.filter((ele) => ele != element)
                setBed(newArr)
            } else {
                setBed([...bed, element])
            }
        }
        const newcheckMark = [...checkMarkBed]
        newcheckMark[index] = !checkMarkBed[index]
        setCheckMarkBed(newcheckMark);
    };

    const toggleMarkBath = (element, index) => {
        if (bath.length == 0)
            setBath([element])
        else {
            if (bath.includes(element)) {
                const newArr = bath.filter((ele) => ele != element)
                setBath(newArr)
            }
            else
                setBath([...bath, element])
        }
        const newcheckMark = [...checkMarkBath]
        newcheckMark[index] = !checkMarkBath[index]
        setCheckMarkBath(newcheckMark);
    };
    const resetFunc = () => {
        setCheckMarkBath([])
        setCheckMarkBed([])
        setBath([])
        setBed([])
    }
    const showFormArea = () => {
        (formArea == false) ? setFormArea(true) : setFormArea(false)
    }
    const areaMaximum = (element)=>{
        setSelectedMaxArea(element)
    }
    const areaMinimum = (element)=>{
        setSelectedMinArea(element)
    }

    return (
        <form onSubmit={handleSubmit(findProperty)} className='flex flex-wrap' style={{ width: '70vw' }}>
            <div className='flex flex-col w-1/4 px-1' >
                <label className='form-label text-left'>Purpose</label>
                <select {...register('purpose')} className={styles.formControl} >
                    <option value={'Sales'}>Sales</option>
                    <option value={'Rent'}>Rent</option>
                </select>
            </div>
            <div className='flex flex-col w-2/4  px-1'>
                <label className='form-label text-left'>Location</label>
                <select {...register('location')} className={styles.formControl} >
                    <option value={'Egypt'}>Egypt</option>
                </select>
            </div>
            <div className='flex flex-col w-1/4  px-1'>
                <label className='form-label text-left'>Property type</label>
                <select {...register('propertyType')} className={styles.formControl} >
                    <option value={'Apartments for Sale'}>Apartments for Sale</option>
                    <option value={'Villas For Sale'}>Villas For Sale</option>
                    <option value={'Vacation Homes for Sale'}>Vacation Homes for Sale</option>
                    <option value={'Commercial for Sale'}>Commercial for Sale</option>
                    <option value={'Buildings & Lands'}>Buildings & Lands</option>
                </select>
            </div>
            <div className='flex flex-col w-1/4  px-1 relative' >
                <label className='form-label text-left'>Beds / Bathrooms</label>

                <input type='text'{...register('BedBath')} readOnly value={`${[...bed]} Beds / ${[...bath]} Baths`} className={`${styles.formControl} `} onClick={showForm} />

                {formApear && <div className='absolute top-24  p-3 bg-white right-0 text-black' style={{ width: '20vw', borderRadius: "8px" }}>
                    <div className='bed text-black text-left'>
                        <p className='mb-2 font-bold text-sm'>Beds</p>
                        {[1, 2, 3, 4, 5, 6].map((element, index) => (
                            <Button key={index} className={`${styles.buttonBedBath}`} type='text' onClick={() => { toggleMarkBed(element, index) }}>
                                {checkMarkBed[index] && <MdOutlineCheck className='text-red-500 mt-1 mr-1' />}
                                {element}</Button>

                        ))}</div>
                    <div className='Baths text-black text-left'>
                        <p className='mb-2 font-bold text-sm'>Baths</p>
                        <div>
                            {[1, 2, 3, 4, 5].map((element, index) => (
                                <Button key={index} className={`${styles.buttonBedBath}`} type='text' onClick={() => { toggleMarkBath(element, index) }}>
                                    {checkMarkBath[index] && <MdOutlineCheck className='text-red-500 mt-1 mr-1' />}
                                    {element}</Button>

                            ))}
                        </div>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <div className='w-3/6 border border-red-500 p-2 hover:bg-slate-50 hover:cursor-pointer rounded-md font-bold text-sm' size='large' onClick={resetFunc}>Reset</div>
                        <div className='w-3/6 text-white p-2 hover:bg-red-700 hover:cursor-pointer bg-red-600 rounded-md font-bold text-sm' size='large'>Apply</div>
                    </div>
                </div>}
            </div>
            <div className='flex flex-col w-1/4  px-1 relative' >
                <label className='form-label text-left'>Area</label>

                <input type='text'{...register('Area')} value={`${selectedMinArea}-${selectedMaxArea}(m²)`} className={`${styles.formControl} `} onClick={showFormArea} />

                {formArea && <div className='absolute top-24  p-4 bg-white right-1 text-black' style={{ width: '20vw', borderRadius: "8px" }}>
                    <div className='bed text-black text-left'>
                        <div className='flex gap-2'>
                            <div className='w-3/6'>
                                <p className='text-sm'>Minimum</p>
                                <select  className='border border-gray-400 w-full p-2 rounded-lg' onChange={(e)=>{areaMinimum(e.target.value)}}>
                                    {[40,50,100,150,200].map((element,index)=>(
                                        <option key={index} value={element} >{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div  className='w-3/6'>
                                <p className='text-sm'>Maximum</p>
                                <select  className='border border-gray-400 w-full p-2 rounded-lg ' onChange={(e)=>{areaMaximum(e.target.value)}}>
                                {['Any','1,000','2,000','3,000','4,000','5,000'].map((element,index)=>(
                                        <option key={index} value={element}>{element}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <div className='w-3/6 border border-red-500 p-2 hover:bg-slate-50 hover:cursor-pointer rounded-md font-bold text-sm' size='large' onClick={resetFunc}>Reset</div>
                        <div className='w-3/6 text-white p-2 hover:bg-red-700 hover:cursor-pointer bg-red-600 rounded-md font-bold text-sm' size='large'>Apply</div>
                    </div>
                </div>}
            </div>
        </form>

    );
}

export default PropertyForm;
