import React from 'react';
import Header from '../Header/Header';
import './Carrers.css'
import computer from '../../images/computer.jpg';
import engineering from '../../images/Engineering.jpg';
import educational from '../../images/Educational.jpg';

const Carrers = () => {
    return (
        <div>
            <Header></Header>

            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 mt-5 mx-auto">
                <div className="col card-head ms-2">
                    <div className="card card-head" >
                        <img src={computer} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h1 className="card-title text-center">COMPUTER + INFORMATION TECHNOLOGY</h1>
                            <ul className="card-text">
                                <li>The Arkansas information and computer technology industry is quickly expanding with careers related to computer science, software development, computer networks, web development, and much more.</li>
                                <li>
                                Arkansas scholarships are available for education in Cisco networking, cloud computing, computer graphic technology, computer information technology, computer maintenance and repair, computer networking, computer programming, cybersecurity, electronics and computer technology, health information technology, information technology, java programming, Linux networking, mathematics and computer science.
                                </li>
                            </ul>
                     </div>
                 </div>
               </div>
                <div className="col card-head ms-2">
                    <div className="card card-head" >
                        <img src={engineering} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h1 className="card-title text-center">ENGINEERING</h1>
                            <ul className="card-text">
                                <li>Engineers are needed in many of these Arkansas industries, including construction and manufacturing. While you may think that a 4-year degree and beyond is your only engineering education choice, you’ll find some Arkansas schools offer training in two years or less.</li>
                                <li>Arkansas scholarships are available for education in building performance analyst, computer aided drafting and design, drafting, engineering technology, mechanical drafting, mechanical engineering technology, pre-engineering, and more.</li>
                            </ul>
                     </div>
                 </div>
               </div>
                <div className="col card-head ms-2">
                    <div className="card card-head" >
                        <img src={educational} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h1 className="card-title text-center">EDUCATION TECHNOLOGY</h1>
                            <ul className="card-text">
                                <li>An education technology certification can qualify you to meet online learning coordination and management needs of educational institutions, a growing need across Arkansas.</li>
                                <li>
                                Arkansas scholarships are available for education in video production and distance learning technology, teaching with technology, and more.
                                </li>
                            </ul>
                     </div>
                 </div>
               </div>
                
               

            </div>
        
            
        
        </div>
    );
};

export default Carrers;