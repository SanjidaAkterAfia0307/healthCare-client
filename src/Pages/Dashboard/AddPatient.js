import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddPatient = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
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
        const guardian =form.guardian.value;
        const image = form.photo.files[0]


        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG}`
        console.log(process.env.REACT_APP_IMG)
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const img = data?.data?.display_url;
                const product = { patientName, age, des,ailment,examiner,gender,phone,email,guardian,img}
                fetch(`https://server-sanjidaakterafia0307.vercel.app/patient?email=${user.email}`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            toast.success("Added Successfully !")
                            navigate('/dashboard/all-patients')
                        }
                    })
            })

    }

    return (
        <div>

            <h2 className='text-4xl font-semibold my-10 text-center'>Add A Product</h2>
            <form onSubmit={handleSubmit} className='md:w-1/2 mx-auto py-10 px-5 md:p-10 rounded-3xl shadow-md'>
                <div className='flex gap-10'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-base">Patient's Name</span>
                        </label>
                        <input type="text" name='patient' placeholder="Type here" className="input input-bordered w-full " required />

                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="text-base">Patient's Age</span>
                        </label>
                        <input type="text" name='age' placeholder="Type here" className="input input-bordered w-full" required />

                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="text-base">Ailment</span>
                        </label>
                        <input type="text" name='ailment' placeholder="Type here" className="input input-bordered w-full" required />

                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="text-base">Examiner</span>
                        </label>
                        <input type="text" name='examiner' placeholder="Type here" className="input input-bordered w-full" required />

                    </div>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="text-base">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='des' required placeholder="Description"></textarea>

                </div>


                <div className='flex gap-12'>
                    <div>
                        <label className="label">
                            <span className="text-base">Gender</span>
                        </label>
                        <select name='gender' className="select select-bordered w-full" required>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Trans-gender">Trans-gender</option>
                        </select>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-base">Medical Report</span>
                        </label>
                        <input type="file" name="photo" className="file-input file-input-bordered w-full max-w-xs" required />
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="text-base">Guardian Name</span>
                    </label>
                    <input type="text" name='guardian' placeholder="Type here" className="input input-bordered w-full" required />
                </div>


                <div className="flex gap-10">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-base">Phone Number</span>
                        </label>
                        <input type="number" name='phone' placeholder="Type here" className="input input-bordered w-full" required />


                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-base">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full" required />

                    </div>
                </div>
                <div className='flex justify-center  my-10'>
                    <button type="submit" className='btn px-24 '>Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddPatient;