
import React from 'react';
import feature1 from '../../assets/images/feature1.jpg'
import featureHH from '../../assets/images/feature2.jpg'
import feature3 from '../../assets/images/feature3.jpg'
import feature4 from '../../assets/images/feature4.jpg'
import { Carousel } from 'antd';

const FeaturedAgencies = () => {
    return (
        <div className='p-4'>
            <p className='text-2xl mb-3 font-bold'>Explore Featured Agencies</p>
            <p className='text-md mb-2 text-gray-600'>Explore our trusted agencies</p>
            
            <Carousel className=''> 
                <div >
                    <img className='w-1/4' src={feature1} />
                </div>
                <div>
                    <img className='w-1/4' src={featureHH} />
                </div>
                <div >
                    <img className='w-1/4' src={feature3} />
                </div>
                <div >
                    <img className='w-1/4' src={feature4} />
                </div>
            </Carousel>
        </div>
    );
}

export default FeaturedAgencies;
