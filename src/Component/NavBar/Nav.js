
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'


const Nav = () => {
    return (
        <div className="nav-container">
            
           <Link className="link" to="/home">Home</Link>
           <Link className="link" to="/service">Services</Link>
           <Link className="link" to="/about">About</Link>
           <Link className="link" to="/contact">Contact Us</Link>  
           <Link className="link" to="/careers">Careers</Link>  
           <Link className="apply" to="/apply">Apply</Link>  
            
        </div>
    );
};

export default Nav;