import { Card } from 'antd';
import React, { useState } from 'react'
import './CategoriesCard.css'
import { FaGrinHearts, FaRegHeart } from 'react-icons/fa';
import { IoHeart } from 'react-icons/io5';

const { Meta } = Card;

export default function CategoriesCard({ catName }) {
    // console.log(catName)
    const [] = useState()
    let data = [
        {
            price: 2000,
            title: 'For Rent Townhouse Corner Ready To Move At Golf Extension Palm Hills',
            category: 'properties',
            image: [
                "https://images.dubizzle.com.eg/thumbnails/79255471-240x180.webp",
                "https://images.dubizzle.com.eg/thumbnails/87711357-240x180.webp"
            ]
        },
        {
            price: 2000,
            title: 'For Rent Townhouse Corner Ready To Move At Golf Extension Palm Hills',
            category: 'properties',
            image: [
                "https://images.dubizzle.com.eg/thumbnails/79255471-240x180.webp",
                "https://images.dubizzle.com.eg/thumbnails/87711357-240x180.webp"
            ]
        }, {
            price: 2000,
            title: 'For Rent Townhouse Corner Ready To Move At Golf Extension Palm Hills',
            category: 'properties',
            image: [
                "https://images.dubizzle.com.eg/thumbnails/79255471-240x180.webp",
                "https://images.dubizzle.com.eg/thumbnails/87711357-240x180.webp"
            ]
        }, {
            price: 2000,
            title: 'For Rent Townhouse Corner Ready To Move At Golf Extension Palm Hills',
            category: 'properties',
            image: [
                "https://images.dubizzle.com.eg/thumbnails/79255471-240x180.webp",
                "https://images.dubizzle.com.eg/thumbnails/87711357-240x180.webp"
            ]
        },]
    return <>
        <div className='' >
            <div className='grid grid-flow-col text-center justify-between  box-border '>

                <h1 className=' font-semi bold text-2xl mb-2 mt-6  '> {catName}</h1>

                <a className='font-semi bold  mb-2 mt-6 text-red-500 font-bold' href="">Veiw more </a>
            </div>
            <div className='flex col-auto justify-between flex-wrap' onClick={() => { console.log("card") }}>
                {data.map((catData) => {
                    return <Card
                        hoverable
                        style={{ maxWidth: 280 }}
                        className='mb-3'
                        cover={<img alt="example" className='max-w-full h-40' src={catData.image[0]} />}
                    >
                        <div className='grid grid-flow-col justify-between'>
                            <p>{catData.price}</p>
                            <button onClick={() => { console.log("card") }}>
                                <FaRegHeart className='hover: text-red-400 text-xl' />
                                

                            </button>

                        </div>
                        <Meta title={catData.title} description={catData.title} />
                    </Card>
                })}
            </div>
        </div >
    </>

}
