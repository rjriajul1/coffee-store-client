import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header';
import Banner from '../Banner';

const MainLayout = () => {
    return (
        <div>
            <Header/>
               <Banner/>
            <div className='max-w-7xl mx-auto'>
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;