import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';
const PatientCard = ({ patient, refetch }) => {
    const { user } = useContext(AuthContext)
    const { _id, des, img, patientName, gender, email, guardian, examiner, phone, ailment, age } = patient
    const navigate = useNavigate()
    const handleDelete = (id) => {
        fetch(`http://localhost:7000/patient/${id}?email=${user.email}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-md hover:shadow-2xl hover:mt-9 lg:grid grid-cols-4 lg:w-3/4   my-12 lg:mx-auto m-10">
            <figure><a href={img} target="_blank" className=' rounded-t-xl lg:rounded-l-xl'><img className=' h-full ' src={img} alt="report" /></a></figure>
            <Link to={`/dashboard/patient/${_id}`} className="card-body md:p-8 p-2 col-span-3">
               
                    <div className='flex gap-3 items-center'>
                        <h2 className="card-title text-base md:text-3xl pb-3"><span className='font-bold'>Patient's Name: </span> {patientName}</h2>
                        <small className='text-sm text-slate-600 font-semibold italic'>({gender})</small>
                    </div>
                    <div className='md:flex gap-6 md:w-1/2'>
                        <p><span className='font-bold '>Ailment : </span> {ailment}</p>
                        <p><span className='font-bold'>Specialist : </span> {examiner}</p>
                    </div>
                    <div className='md:flex md:w-1/2'>
                        <p><span className='font-bold '>Age : </span> {age}</p>
                        <p><span className='font-bold'>Guardian : </span> {guardian}</p>
                    </div>

                    <span className='font-bold text-xl'>Description</span>
                    <p className=''>{des}</p>
                    <h3 className='font-bold text-xl'>Contact Info </h3>
                    <div className='flex md:flex-row flex-col gap-5
                 justify-between'>
                        <div className='flex gap-6 w-1/2'>
                            <p><span className='font-bold'>Phone : </span> {phone}</p>
                            <p><span className='font-bold'>Email : </span> {email}</p>
                        </div>

                        <div className='flex gap-3'>
                            <button onClick={() => navigate(`/dashboard/update-patient/${_id}`)} className="text-white bg-teal-500 hover:bg-teal-600  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update</button>
                            <button onClick={() => handleDelete(_id)} className="text-white bg-teal-500 hover:bg-teal-600  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Delete</button>
                        </div>
                    </div>
                
            </Link>
        </div>
    );
};

export default PatientCard;