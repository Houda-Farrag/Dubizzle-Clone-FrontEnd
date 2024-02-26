
import './Home.css'
import CategorySub from '../../Components/CategorySubComp/CategorySub'

import DubbizleSlider from '../../Components/DubbizleSlider/DubbizleSlider'
import PopularCategories from '../../Components/popularCategories/PopularCategories'
import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard'
import DropDownList from '../../Components/DropDownListComp/DropDownList'
import ProductHomeCardComp from '../../Components/ProductHomeCardComp/ProductHomeCardComp'
import { useEffect, useState } from 'react'

export default function Home() {

    const [Category, setCategory] = useState([])
    const [products, setProducts] = useState([])


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
    async function getProducts() {
        await fetch("http://localhost:3000/products")
            .then((res) => {
                return res.json()
            })
            .then(({ products }) => {

                setProducts(products)


            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getCategory()
        getProducts()
    }, [])
    return <>

        <div style={{ top: '18vh', position: 'relative', marginBottom: '200px' }}  >

            <CategorySub></CategorySub>
            <DubbizleSlider></DubbizleSlider>
            <PopularCategories></PopularCategories>

            <CategoriesCard catName={"Villas For Sale"} dataProd={products}> </CategoriesCard>


            <ProductHomeCardComp></ProductHomeCardComp>
        </div >

    </>
}


