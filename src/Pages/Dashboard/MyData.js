import React, { useContext, useEffect, useState } from 'react';
import NoData from '../../Components/NoData';
import SingleData from '../../Components/SingleData';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyData = () => {
    const {user}=useContext(AuthContext)
    const [datas,setDatas]=useState([])
    useEffect(()=>{
        fetch(`https://server-sanjidaakterafia0307.vercel.app/patient/${user.email}`)
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[user.email])
    if(datas.length<=0){
        return <NoData item="Data"></NoData>
    }
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