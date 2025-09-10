import React from 'react';
import { Outlet } from 'react-router';
const AuthLayout = () => {
return (
    <div className='wfrontend/app/routes-full h-screen flex items-center justify-center'>
        <Outlet />
    </div>
);
};
   
export default AuthLayout;
