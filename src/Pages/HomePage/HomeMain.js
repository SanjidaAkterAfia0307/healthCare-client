import React from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import HomeBanner from './HomeBanner';

const HomeMain = () => {
    return (
        <div className='md:mx-96 mx-6'>
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default HomeMain;