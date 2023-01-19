import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Footer from '../Pages/Shared/Footer';
// import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';
import Header from '../Pages/Shared/Header';

const DashboardLayout = () => {
const [isPatient,setIsPatient]=useState(false)
const {user,loading}=useContext(AuthContext)

    useEffect(()=>{
        if(!loading){
            
            fetch(`https://server-sanjidaakterafia0307.vercel.app/userTest?email=${user?.email}`)
            .then(res=>res.json())
            .then(data=>setIsPatient(data))
        }
    },[user?.email,loading])
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side shadow-xl">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 bg-white text-base-content">
                        {/* SideNav------------- */}

                        <div>
                            {/* Branding & Profile Info */}
                            <div className=''>
                                <h2 className='text-3xl cursor-pointer font-semibold text-center text-teal-500 '>
                                    <Link to='/'>Health Care</Link>
                                </h2>
                                <div className='flex flex-col items-center mt-6 -mx-2'>
                                        <img
                                            className='object-cover w-24 h-24 mx-2 my-6 rounded-full'
                                            src={user?.photoURL}
                                            alt='avatar'
                                            referrerPolicy='no-referrer'
                                        />
                                        <h4 className='mx-2 mt-2 font-medium text-slate-600 text-xl  hover:underline'>
                                            {user?.displayName}
                                        </h4>
                                        <p className='mx-2 mt-1 text-sm font-medium text-slate-600  hover:underline'>
                                            {user?.email}
                                        </p>
                                </div>
                            </div>

                            {/* Nav Items */}
                            <div className='flex flex-col justify-between flex-1 mt-6'>
                                <nav>
                                    {
                                        isPatient ?
                                        <div>
                                        <ul className="">
                                            <li className=" font-semibold text-lg">
                                                <Link to="/dashboard/patient">My Data</Link>
                                            </li>
                                           
                            
                            
                                        </ul>
                                    </div>
                                    :
                                    <div>
                                    <ul className="">
                                        <li className=" font-semibold text-lg">
                                            <Link to="/dashboard/all-patients">All Patients</Link>
                                        </li>
                                        <li className=" font-semibold text-lg">
                                            <Link to="/dashboard/add-patient">Add Patients</Link>
                                        </li>
                                       
                        
                        
                                    </ul>
                                </div>
                                    }
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;