
import './Home.css'
import CategorySub from '../../Components/CategorySubComp/CategorySub'

import DubbizleSlider from '../../Components/DubbizleSlider/DubbizleSlider'
import PopularCategories from '../../Components/popularCategories/PopularCategories'
import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard'
import ProductHomeCardComp from '../../Components/ProductHomeCardComp/ProductHomeCardComp'
import { useEffect, useState } from 'react'
import slideImage from '../../assets/images/dubbizleSlider.jpg'
import EditProfile from '../EditProfile/EditProfile'

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
        await fetch("http://localhost:3000/products/get")
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
    const aut = 'autoplay'
    return <>

        <div style={{ top: '18vh', position: 'relative', marginBottom: '200px' }}  >

            <CategorySub></CategorySub>
            <DubbizleSlider name="home" img= {slideImage}/>
            <PopularCategories></PopularCategories>
            
            <CategoriesCard catName={"Villas For Sale"} dataProd={products}> </CategoriesCard>
            

            <ProductHomeCardComp></ProductHomeCardComp>
        </div>

    </>
}


