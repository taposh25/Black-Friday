import React from 'react';
import Logo from '../component/Logo/Logo';
import { Outlet } from 'react-router';
import logImg from "../assets/logImg.png";


const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto '>
             <Logo></Logo>
              <div className='flex bg-gradient-to-br from-slate-900 via-black to-slate-800 w-full h-full object-cover'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1  mt-20'>
                    <img src={logImg} alt="Logo" />
                </div>
              </div>
        </div>
    );
};

export default AuthLayout;