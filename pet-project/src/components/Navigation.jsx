import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/Navigation.css'



function Navigation() {
    return (
        <div className='navigationDiv'>
            <nav className='navbar'>
                <Link to='/' >Home</Link>
                <Link to='weather-check' >Weather</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Navigation;
