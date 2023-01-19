import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
// import BigLoading from '../Components/Loading/BigLoading';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location= useLocation()
    if(loading){
      return  <Loading></Loading>
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