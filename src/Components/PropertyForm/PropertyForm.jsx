import { useForm } from 'react-hook-form'
import styles from './PropertyForm.module.css'
import {  useState } from 'react';
import { Button } from 'antd';
import { MdOutlineCheck } from "react-icons/md";
import MinMAxFormArea from '../MinMAxFormArea/MinMAxFormArea';
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

    return (
        <form onSubmit={handleSubmit(findProperty)} className='flex flex-wrap' style={{ width: '73vw' }}>
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
            <div className='w-1/4 '>
            <MinMAxFormArea name="Area" missure="m²" minOption={[40,50,100,150,200]} maxOption={['Any','1,000','2,000','3,000','4,000','5,000']}/>
            </div>
            <div className='w-1/4'>
            <MinMAxFormArea name="Price" missure="EGP" minOption={['1,000','5,000','10,000','50,000','100,000','500,000','1,000,000','5,000,000','10,000,000']} 
            maxOption={['10,000','50,000','100,000','500,000','1,000,000','5,000,000','10,000,000','50,000,000','100,000,000','500,000,000']}/>
            </div>
            <button type='submit' className='w-1/4 text-md bg-red-500 mt-6 rounded-lg hover:bg-red-600'>Find</button>
        </form>

    );
}

export default PropertyForm;
