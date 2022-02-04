import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { NavigationDiv, Navbar, Logo, FakeElem } from '../Styled/navigation';


function Navigation() {
    return (
        <>

            <NavigationDiv>
                <img src='https://www.iconfinder.com/icons/8542014/dog_puppy_pet_icon' alt='dog'></img>
                <Navbar>
                    <Link to='/'>Home</Link>
                    <Link to='weather' >Weather</Link>
                </Navbar>
                <Outlet />
                <FakeElem />
            </NavigationDiv>
        </>
    );
}

export default Navigation;
