import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
// import useToken from '../../Hooks/useToken';

const SignIn = () => {
    const { user, logIn, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState("")
  
    const handleSubmit = (e) => {

        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value


        logIn(email, password)
            .then(res => {
                const user = res.user;
                setError("")

                navigate(from, { replace: true })

            }).catch(er => {
                console.error(er)
                setError(er.message)
                console.log(error)
            })

    }

    return (
        <div className='flex justify-center items-center  pt-24  '>

            <div className='lg:my-auto lg:p-12 p-6 md:w-1/3 w-full mt-12  '>
                <h2 className='text-center text-3xl md:text-4xl font-bold pb-12 '>Log In For More</h2>
                <form onSubmit={handleSubmit} className=' shadow-lg rounded-2xl p-4 md:p-20'>


                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Your E-mail</label>
                        <input type="email" name="email" className= " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" required="" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required="" />
                    </div>
                    <p className='text-base text-rose-700 py-3'>{error}</p>
                    <button type="submit" className="text-white bg-teal-500 hover:bg-teal-600  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

                    <p className='text-center my-5'><span>New To Health Care ?</span> <Link className='text-cyan-500' to="/register">Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;