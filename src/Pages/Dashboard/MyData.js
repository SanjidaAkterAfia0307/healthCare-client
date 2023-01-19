import React, { useContext, useEffect, useState } from 'react';
import SingleData from '../../Components/SingleData';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyData = () => {
    const {user}=useContext(AuthContext)
    const [datas,setDatas]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:7000/patient/${user.email}`)
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[user.email])
    return (
        <div>
            
            <h2 className='text-4xl font-semibold mt-10 text-center'>My Data</h2>
            <div className='grid md:grid-cols-2 gap-24 p-24'>
                {
                    datas.map(data=><SingleData key={data._id} patient={data}></SingleData>)
                }
            </div>
        </div>
    );
};

export default MyData;