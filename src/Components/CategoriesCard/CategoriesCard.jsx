import { Card } from 'antd';
import React, { useState } from 'react'
import './CategoriesCard.css'
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../Store/Slices/Favorites';

const { Meta } = Card;

export default function CategoriesCard({ catName, dataProd }) {

    const Favorit = useSelector((favorite) => favorite.favorite.fav)

    const dispatch = useDispatch()

    let idFav = Favorit.map((prod) => {
        return prod._id
    })


    function check(id) {
        return idFav.find((idmov) => idmov == id)
    }

    let data1 = [
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

    let data = dataProd
    let v = dataProd.slice(0, 4)
    // console.log(v)

    const goToDetailsPage = (id) => {

        console.log(id)
    }

    const addToFav = (obj) => {
        console.log('====', obj)
        if (!check(obj._id)) {
            dispatch(addToFavorite(obj))
        }
        else {
            dispatch(removeFromFavorite(obj))
        }

    }


    return <>
        <div className='' >
            <div className='grid grid-flow-col text-center justify-between  box-border '>

                <h1 className=' font-semi bold text-2xl mb-2 mt-6  '> {catName}</h1>

                <a className='font-semi bold  mb-2 mt-6 text-red-500 font-bold' href="">Veiw more </a>
            </div>
            <div className='flex col-auto justify-between flex-wrap' >

                {v.map((catData) => {
                    return catData.images[0] && <Card key={catData.id} onClick={(e) => {
                        e.stopPropagation()

                        goToDetailsPage(catData._id)
                    }}
                        hoverable
                        style={{ Width: 700 }}
                        className='mb-3'
                        cover={<img alt="example" className='max-w-full h-40 ' src={catData.images[0]} />}
                    >
                        <div className={`grid grid-flow-col justify-between`}>
                            <p>{catData.price}</p>
                            <button onClick={(e) => {
                                e.stopPropagation()

                                addToFav(catData)
                                console.log("ttt", Favorit)
                            }}>
                                {(check(catData._id)) ? <FaHeart /> : <FaRegHeart />}

                            </button>
                        </div>
                        <Meta title={catData.description} description={catData.description} />
                    </Card>
                })}

            </div>
        </div >
    </>

}
