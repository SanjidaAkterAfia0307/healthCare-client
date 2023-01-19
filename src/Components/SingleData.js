import React from 'react';

const SingleData = ({patient}) => {
    const { _id, des, img, patientName, gender, email, guardian, examiner, phone, ailment, age } = patient
    return (

            <div className=' py-10 px-5 md:p-10 rounded-3xl shadow-md'>
                <div className='flex justify-center'>
                    <img src={img} className="rounded-full w-32 h-32" alt="" />
                </div>
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
        
    );
};

export default SingleData;