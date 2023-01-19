import React from 'react';
import banner from '../../images/banner.jpg';
const HomeBanner = () => {
    return (
        <div className='flex justify-center my-12' >
           <img src={banner} className='w-full rounded-2xl' alt="" />
        </div>
    );
};

export default HomeBanner;