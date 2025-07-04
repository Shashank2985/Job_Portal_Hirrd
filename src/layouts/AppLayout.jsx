import React from 'react'
import App from '../App'
import { Outlet } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header.jsx';

const AppLayout = () => {
    return (
        <div>
            <div className='grid-background'></div>
            <main className='min-h-screen'>
                <Header />
                <Outlet />
            </main>
            <div className='p-8 text-center bg-gray-600/30 text-white mt-10'>
                Made with ❤️ by Shashank
            </div>
        </div>
    )
}

export default AppLayout;
