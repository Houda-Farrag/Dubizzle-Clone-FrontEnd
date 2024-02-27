
import './Home.css'
import CategorySub from '../../Components/CategorySubComp/CategorySub'

import DubbizleSlider from '../../Components/DubbizleSlider/DubbizleSlider'
import PopularCategories from '../../Components/popularCategories/PopularCategories'
import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard'
import ProductHomeCardComp from '../../Components/ProductHomeCardComp/ProductHomeCardComp'
import slideImage from '../../assets/images/dubbizleSlider.jpg'

export default function Home() {
    const aut = 'autoplay'
    return <>

        <div style={{ top: '18vh', position: 'relative', marginBottom: '200px' }}  >

            <CategorySub></CategorySub>
            <DubbizleSlider name="home" img= {slideImage}/>
            <PopularCategories></PopularCategories>
            <CategoriesCard catName={"Villas For Sale"}> </CategoriesCard>
            <CategoriesCard catName={"Mbiles"}> </CategoriesCard>
            <CategoriesCard catName={"Laptop computers"}> </CategoriesCard>

            <ProductHomeCardComp></ProductHomeCardComp>
        </div>

    </>
}


