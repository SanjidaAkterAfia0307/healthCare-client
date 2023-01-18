import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
// import useToken from '../../Hooks/useToken';

const Register = () => {
    const { user, createUser, updateUser, googleLogin } = useContext(AuthContext)
    const [saveAs, setSaveAs] = useState('Patient')
    const [createEmail, setCreateEmail] = useState('')
    // const [token] = useToken(createEmail)
    const navigate = useNavigate()
    const [error, setError] = useState("fal")

console.log(process.env.REACT_APP_IMG)
    // handle submit

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photof = form.photo.files[0];
        const password = form.password.value;
        const role = form.role.value;
        console.log(name, email, photof, password, role)

        const formData = new FormData()
        formData.append('image', photof)

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG}`

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const photo = data.data.display_url;

                // create user

                createUser(email, password)
                    .then(res => {
                        const user = res.user;
                        console.log(user)
                        setSaveAs('Buyer')
                        // update user
                        const profile = {
                            displayName: name,
                            photoURL: photo
                        }
                        updateUser(profile)
                            .then(() => {
                                alert("Update")

                                saveUser(name, email, photo, role)
                            })
                            .catch(er => console.error(er))

                    })
                    .catch(er => console.error(er))


            })
            .catch(er => console.error(er))
    }

    // google login

    const handleGoogleUser = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                // saveUser
                saveUser(user.displayName, user.email, user.photoURL, saveAs)
            })
            .catch(er => console.error(er))
    }




    const saveUser = (name, email, photo, role) => {
        const user = { name, email, photo, role }
        fetch("http://localhost:7000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: `bearer ${localStorage.getItem("bookToken")}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setCreateEmail(email)
            })
    }

    return (
        <div className='lg:w-1/2 mx-auto pt-24 pb-56 '>


            <div className='lg:my-auto lg:p-12 p-10 md:p-20'>
                <h2 className='text-center text-3xl md:text-4xl font-bold pb-12 '>Sign up</h2>
                <form onSubmit={handleSubmit} className=' shadow-lg rounded-2xl p-4 md:p-20'>

                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Your Full Name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Your E-mail</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="photo" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Your PhotoURL</label>
                        <input type="file" name="photo" className="file-input file-input-bordered file-input-accent w-full max-w-xs" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                    </div>

                    <select name='role' className="select select-bordered w-full max-w-xs mb-6 ">

                        <option onClick={(e) => setSaveAs(e.value)}>Professional</option>
                        <option onClick={(e) => { setSaveAs(e.value) }}>Patient</option>
                    </select>
                   
                    <p className='text-base text-rose-700 py-3'>{error}!</p>
                    <button type="submit" className="text-white bg-teal-500 hover:bg-teal-600  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

                    <div className="divider">Or</div>
                    <div className='flex items-center flex-col'>
                        <button onClick={handleGoogleUser} type="submit" className="text-slate-800 border-2 border-teal-500 hover:bg-teal-500 hover:text-white block m-2 font-medium rounded-lg  px-5 lg:w-96 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in With Google</button>

                    </div>
                    <p className='text-center my-2'><span>Already Have An Account ?</span> <Link className='text-cyan-500' to="/login">Log In</Link></p>
                </form>
            </div>


        </div>
    );
};

export default Register;