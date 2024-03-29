import FeaturedAgencies from '../../Components/FeaturedAgencies/FeaturedAgencies';
import Footer from '../../Components/FooterComp/Footer';
import Header from '../../Components/HeaderComp/Header';
import PropertyForm from '../../Components/PropertyForm/PropertyForm';
import styles from './Property.module.css'
// import banner from '../../assets/images/propertiesVerticalBanner.png'
const Property = () => {
    return (
        <>
            <Header></Header>
            <div className='container mt-24'>
                <div className={styles.banner} style={{ marginBottom: '50px' }}>
                    <div className='z-50 mb-5'>
                        <h1 className='font-bold mb-2' style={{ fontSize: '39px' }}>Your next property is here.</h1>
                        <p className='text-2xl'>Let&apos;s find a home that&apos;s perfect for you</p>
                    </div>
                    <PropertyForm />
                </div>
                <div>
                    <FeaturedAgencies />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Property;
