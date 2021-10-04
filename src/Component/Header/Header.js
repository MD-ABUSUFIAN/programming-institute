
import React from 'react';
import './Header.css';
import banner from '../../banner.jpg';

import Nav from '../NavBar/Nav';

const Header = () => {
    return (
        <div className="row row-cols-lg-1 row-cols-md-1 row=cols-1">
        
        <div style={{ backgroundImage:`url(${banner})` }} className="header col">
            <h1 className="header-title">Programming Institute</h1>
            <Nav></Nav>
           
        </div>
        </div>
    );
};

export default Header;