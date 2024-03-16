import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/HeaderComp/Header'
import Footer from './Components/FooterComp/Footer'

export default function AppLayout() {
    return <>

        <Header></Header>
        <div className='md:mt-32 mt-34 '>
            <Outlet />
        </div>
        <Footer></Footer>

    </>
}
