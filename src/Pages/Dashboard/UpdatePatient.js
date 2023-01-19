import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const UpdatePatient = () => {
    const {user}=useContext(AuthContext)
    const id = useLocation().pathname.split('/')[3]
    const navigate = useNavigate()
    console.log(id)
    const { data: patient = [], } = useQuery({
        queryKey: ['patient'],
        queryFn: () => fetch(`https://server-sanjidaakterafia0307.vercel.app/singlePatient/${id}`)
            .then(res => res.json())
    })
    console.log(patient)

    const { _id, des, img, patientName, gender, email, guardian, examiner, phone, ailment, age } = patient

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const patientName = form.patient.value;
        const age = form.age.value;
        const des = form.des.value;
        const ailment = form.ailment.value;
        const examiner = form.examiner.value;
        const gender = form.gender.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const guardian = form.guardian.value;
     
        console.log( des, patientName, gender, email, guardian, examiner, phone, ailment, age)
        const body={  des,  patientName, gender, email, guardian, examiner, phone, ailment, age } 
        fetch(`https://server-sanjidaakterafia0307.vercel.app/patient/${_id}?email=${user.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Updated Successfully !")
                    navigate('/dashboard/all-patients')
                }
            })
    }
    return (
        <div>

<h2 className='text-4xl font-semibold my-10 text-center'>Update Patient Data</h2>
            <form onSubmit={handleUpdate} className='md:w-1/2 mx-auto py-10 px-5 p-10 lg:px-16 rounded-3xl shadow-md'>
                <div className='flex gap-10'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-base">Patient's Name</span>
                        </label>
                        <input type="text" name='patient' defaultValue={patientName} placeholder="Type here" className="input input-bordered w-full " required />

                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="text-base">Patient's Age</span>
                        </label>
                        <input type="text" name='age' defaultValue={age} placeholder="Type here" className="input input-bordered w-full" required />

                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="text-base">Ailment</span>
                        </label>
                        <input type="text" name='ailment' defaultValue={ailment} placeholder="Type here" className="input input-bordered w-full" required />

                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="text-base">Examiner</span>
                        </label>
                        <input type="text" name='examiner' defaultValue={examiner} placeholder="Type here" className="input input-bordered w-full" required />

                    </div>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="text-base">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" defaultValue={des} name='des' required placeholder="Description"></textarea>

                </div>


                <div className='flex gap-10'>
                    <div>
                        <label className="label">
                            <span className="text-base">Gender</span>
                        </label>
                        <select name='gender' defaultValue={gender} className="select select-bordered w-full" required>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Trans-gender">Trans-gender</option>
                        </select>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-base">Guardian Name</span>
                        </label>
                        <input type="text" name='guardian' defaultValue={guardian} placeholder="Type here" className="input input-bordered w-full" required />
                    </div>
                </div>


                <div className="flex gap-10">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-base">Phone Number</span>
                        </label>
                        <input type="number" name='phone' defaultValue={phone} placeholder="Type here" className="input input-bordered w-full" required />


                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-base">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={email} placeholder="Type here" className="input input-bordered w-full" required />

                    </div>
                </div>
                <div className='flex justify-end gap-3  my-10'>
                    <button onClick={() => navigate(`/dashboard/all-patients`)} className='btn lg:px-20 '>Cancel</button>
                    <button type="submit" className='btn lg:px-20 '>Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePatient;