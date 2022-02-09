import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { NavigationDiv, Navbar, Logo, FakeElem } from '../Style/navigation';
import dog from '../img/dogg.svg'


function Navigation() {
    return (
        <>
            <NavigationDiv>
                <Logo >
                    <h2>PET</h2>
                    <img src={dog} alt='dog'></img>
                    <h2>PROJECT</h2>
                </Logo>
                <Navbar>
                    <Link to='/'>Home</Link>
                    <Link to='weather' >Weather</Link>
                </Navbar>
                <FakeElem />
            </NavigationDiv>
            <Outlet />
        </>
    );
}

export default Navigation;
