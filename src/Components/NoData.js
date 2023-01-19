import React from 'react';

const NoData = ({item}) => {
    return (
        <div className='flex justify-center items-center h-screen '>
            <h2 className='md:text-7xl text-yellow-400 font-bold'>No {item} Available</h2>
        </div>
    );
};

export default NoData;