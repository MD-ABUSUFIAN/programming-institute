import React from 'react';
import footerlogo from '../../footer-logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
        
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 footer-container">
                <div className="col text-center">
                    <h4>AbuSufian Division of Higher Education</h4>
                    <br/>
                    <h4>423 Main Street, Suite 400</h4>
                    <br/>
                    <h4>Little Rock, AR  72201</h4>
                </div>
                <div className="col">
                    <img src={footerlogo} alt=""/>
                </div>
                <div className="col">
                <h4>+8801722123801</h4>
                    <br/>
                    <h4>abusufian.programmer@gmail.com</h4>
                    <br/>
                    <h4>Dhaka,Bangladesh</h4>
                </div>

            </div>
        </div>
    );
};

export default Footer;