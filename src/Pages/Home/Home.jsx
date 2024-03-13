
import './Home.css'
import CategorySub from '../../Components/CategorySubComp/CategorySub'

import DubbizleSlider from '../../Components/DubbizleSlider/DubbizleSlider'
import PopularCategories from '../../Components/popularCategories/PopularCategories'
import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard'
import { useEffect, useState } from 'react'
import slideImage from '../../assets/images/dubbizleSlider.jpg'
import UseGetAllProducts from '../../Hooks/UseGetAllProducts'

export default function Home() {
    const {products} = UseGetAllProducts()

    const [Category, setCategory] = useState([])


    // http://localhost:3000/categories
    async function getCategory() {
        await fetch("http://localhost:3000/categories")
            .then((res) => {
                return res.json()
            })
            .then(({ AllCategories }) => {


                setCategory(AllCategories)

            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    useEffect(() => {
        getCategory()
    }, [])

    return <>

        <div style={{ position: 'relative', marginBottom: '200px' }} className='mt-36'  >

            <CategorySub></CategorySub>
            <DubbizleSlider name="home" img= {slideImage}/>
            <PopularCategories></PopularCategories>

            <CategoriesCard catName={"Cars For Sale"} dataProd={products}></CategoriesCard>
            <CategoriesCard catName={"Cars For Rent"} dataProd={products}></CategoriesCard>
            <CategoriesCard catName={"Property For Rent"} dataProd={products}></CategoriesCard>
            <CategoriesCard catName={"Property For Sale"} dataProd={products}></CategoriesCard>

        </div>

    </>
}


