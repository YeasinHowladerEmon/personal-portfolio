import React from 'react';
import Banner from '../Banner/Banner';
import './Header.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {
    return (
        <div className="bg-image">
            <NavBar/>
            <Banner/>
        </div>
    );
};

export default Header;