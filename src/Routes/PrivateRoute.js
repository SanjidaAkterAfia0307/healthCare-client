import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// import BigLoading from '../Components/Loading/BigLoading';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const navigate=useNavigate();
    const location= useLocation()
    if(loading){
      return  <h1>Loading...</h1>
    }
    if(!user){
      return  <Navigate to='/signin' state={{from:location}}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;