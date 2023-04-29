import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {user , loading} = useContext(AuthContext)
    if (loading) {
        return  (
            <div className='d-flex align-items-center justify-content-center'>
                <Spinner animation="grow" variant="dark" />
            </div>
        )
    }
    if (user) {
        return children
    }else{
        return <Navigate state={{path: location}} to="/login" replace></Navigate>
    }
};

export default PrivetRoute;