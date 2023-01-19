import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/error.webp';
const ErrorElement = () => {
    return (
        <div className='w-3/4 mx-auto text-center'>
            <img src={error} className=' w-3/4 mx-auto ' alt="" />
            <Link to='/' className='btn bg-green-600 border-none hover:bg-green-800 text-white'>BACK TO HOMEPAGE</Link>
        </div>
    );
};

export default ErrorElement;