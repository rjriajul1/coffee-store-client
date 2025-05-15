import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header';
import Banner from '../Banner';

const MainLayout = () => {
    return (
        <div>
            <Header/>
               <Banner/>
            <div>
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;