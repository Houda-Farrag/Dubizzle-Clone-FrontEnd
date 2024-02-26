import React from 'react'
import { useSelector } from 'react-redux'

export default function Favorite() {
    const favorite = useSelector((prod) => prod.favorite.fav)

    return (
        <div className=' grid grid-flow-col mt-5 bg-slate-600 items-center' style={{ minHeight: "50vh", margin: "19vh 0" }}>
            <p>

            </p>
        </div>

    )
}
