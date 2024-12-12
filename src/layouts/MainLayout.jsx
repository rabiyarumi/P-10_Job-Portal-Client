import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='flex-grow mx-auto  lg:max-w-7xl border-2'>
                <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
};

export default MainLayout;