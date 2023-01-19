import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePatient = () => {
    const patient = useLoaderData()
    const { _id, des, img, patientName, gender, email, guardian, examiner, phone, ailment, age } = patient
    return (
        <div>
            <h2 className='text-4xl font-semibold my-10 text-center'>Patient Details</h2>
            <div className='md:w-1/3 mx-auto py-10 px-5 md:p-10 rounded-3xl shadow-md'>
                <figure>
                    <img src={img} className=" w-fit" alt="" />
                </figure>
                <div className='flex gap-6 my-5'>
                    <div className="w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Patient's Name</span>
                        </label>
                        <p className='italic'>{patientName}</p>

                    </div>
                    <div className="w-full max-w-xs ">
                        <label className="label">
                            <span className="text-lg font-semibold">Patient's Age</span>
                        </label>
                        <p className='italic'>{age}</p>

                    </div>
                </div>
                <div className="flex gap-6 my-5">
                    <div className="w-full max-w-xs ">
                        <label className="label">
                            <span className="text-lg font-semibold">Ailment</span>
                        </label>
                        <p className='italic'>{ailment}</p>

                    </div>
                    <div className="w-full max-w-xs ">
                        <label className="label">
                            <span className="text-lg font-semibold">Examiner</span>
                        </label>
                        <p className='italic'>{examiner}</p>

                    </div>
                </div>

                <div className="w-full ">
                    <label className="label">
                        <span className="text-lg font-semibold">Description</span>
                    </label>
                    <p className='italic'>{des}</p>

                </div>


                <div className="flex gap-6 my-5">
                    <div className="w-full ">
                        <label className="label">
                            <span className="text-lg font-semibold">Gender</span>
                        </label>
                        <p className='italic'>{gender}</p>


                    </div>
                    <div className="w-full ">
                        <label className="label">
                            <span className="text-lg font-semibold">Guardian</span>
                        </label>
                        <p className='italic'>{guardian}</p>

                    </div>
                </div>


                <div className="flex gap-6 my-5">
                    <div className="w-full ">
                        <label className="label">
                            <span className="text-lg font-semibold">Phone Number</span>
                        </label>
                        <p className='italic'>{phone}</p>


                    </div>
                    <div className="w-full ">
                        <label className="label">
                            <span className="text-lg font-semibold">Email</span>
                        </label>
                        <p className='italic'>{email}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePatient;