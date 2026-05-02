import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return  <div className="skeleton h-4 w-full"></div>
    }
    if(!user){
        return <Navigate to="/login">
            <input type="hidden" name="from" value={location.pathname} />
        </Navigate>
    }
    return (
       
            children
       
    );
};

export default PrivateRoute;