import React from 'react';
import Header from '../Header/Header';
import './About.css'


const About = () => {
    return (
        <div>
           <Header></Header>
            <div className="container">
                <div className=" w-50 m-auto pt-4 fs-1 fw-bolder text-primary">
                <h1>Come help us build the education the world deserves</h1>
                </div>
            </div>
            <div className=" card-head2  row row-cols-lg-2 row-cols-md-2 row-cols-1 p-5 mt-5 gx-5 mx-auto">
                <div className="col about-card ">
                    <h2 className="fs-2">About aDhE</h2>
                    <p className="fs-4">When we started aDhE Programming Institute, our goal was to give anyone in the world the ability to learn the skills they’d need to succeed in the 21st century. We set out to create a new, interactive way of learning — making it engaging, flexible, and accessible for as many people as possible. Since then, we have helped millions of people worldwide unlock modern technical skills and reach their full potential through code.</p>
                </div>

                <div className="col mission-card">
                    <h2 className="fs-2">Our Mission</h2>
                    <p className="fs-4">We want to create a world where anyone can build something meaningful with technology, and everyone has the learning tools, resources, and opportunities to do so. Code contains a world of possibilities — all that’s required is the curiosity and drive to learn. At Codecademy, we are committed to empowering all people, regardless of where they are in their coding journeys, to continue to learn, grow, and make an impact on the world around them.</p>
                </div>

            </div>
           
        </div>
    );
};

export default About;