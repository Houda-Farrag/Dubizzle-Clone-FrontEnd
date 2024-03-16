import React from 'react'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import { Card } from 'antd';
const { Meta } = Card;
export default function Favorite() {
    const favorite = useSelector((prod) => prod.favorite.fav)
    console.log(favorite)
    return (
        <div className=' grid grid-flow-col mt-5  items-center' style={{ minHeight: "50vh", margin: "19vh 0" }}>
            <div className='flex col-auto justify-between flex-wrap' >

                {(false) ? <div> <Button variant="contained">Hello world</Button></div> : favorite.map((catData) => {
                    return catData.images[0] && <Card key={catData._id}
                        hoverable
                        style={{ Width: 700 }}
                        className='mb-3'
                        cover={<img alt="example" className='max-w-full h-40 ' src={catData.images[0]} />}
                    >
                        <div className={`grid grid-flow-col justify-between`}>
                            <p>{catData.price}</p>

                        </div>
                        <Meta title={catData.description} description={catData.description} />
                    </Card>
                })}

            </div>
        </div>

    )
}
