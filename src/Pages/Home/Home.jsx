
import './Home.css'
import CategorySub from '../../Components/CategorySubComp/CategorySub'

import DubbizleSlider from '../../Components/DubbizleSlider/DubbizleSlider'
import PopularCategories from '../../Components/popularCategories/PopularCategories'
import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard'
import DropDownList from '../../Components/DropDownListComp/DropDownList'
import ProductHomeCardComp from '../../Components/ProductHomeCardComp/ProductHomeCardComp'

export default function Home() {
    return <>

        <div style={{ top: '18vh', position: 'relative', marginBottom: '200px' }}  >

            <CategorySub></CategorySub>
            <DubbizleSlider></DubbizleSlider>
            <PopularCategories></PopularCategories>
            <CategoriesCard catName={"Villas For Sale"}> </CategoriesCard>
            <CategoriesCard catName={"Mbiles"}> </CategoriesCard>
            <CategoriesCard catName={"Laptop computers"}> </CategoriesCard>

            <ProductHomeCardComp></ProductHomeCardComp>
        </div >

    </>
}


