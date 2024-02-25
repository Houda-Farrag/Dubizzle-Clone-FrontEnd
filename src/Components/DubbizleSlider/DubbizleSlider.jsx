
import { Carousel } from 'antd';
import slideImage from '../../assets/images/dubbizleSlider.jpg'
const DubbizleSlider = () => {

    return (
        <>
            <Carousel autoplay dotWidth={3} autoplaySpeed={7000} className=''> { /* change the name of conatear*/}
                <div >
                    <img className='w-full' src={slideImage} />
                </div>
                <div>
                    <img className='w-full' src={slideImage} />
                </div>
            </Carousel>
        </>
    );
}

export default DubbizleSlider;
