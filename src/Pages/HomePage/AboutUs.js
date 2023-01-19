import React from 'react';
import { FaStethoscope } from "react-icons/fa";
const AboutUs = () => {
    return (
        <div className='text-center my-36 shadow-lg rounded-xl md:p-20 p-5 w-full bg-teal-500 text-white'>
                <div className='flex items-center justify-center'>
                    
                        <FaStethoscope className="w-32 h-32"></FaStethoscope>
                    
                    <h2 className='text-5xl ml-5 font-bold'>About Us</h2>
                </div>
                <div className='lg:w-1/2 mx-auto px-4 py-6 text-justify'>
                    <p className='text-xl font-medium '>Welcome to our website! We provide essential services that promote health, prevent diseases and deliver health care services to individuals, families and communities based on the primary health care approach.</p>
                </div>
            </div>
    );
};

export default AboutUs;