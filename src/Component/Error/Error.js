import React,{Button} from 'react';
import { Link } from 'react-router-dom';
import errorimage from '../../error.jpg';

const Error = () => {
    return (
        <div>
            <img className="w-75 image-fluid" src={errorimage} alt=""/>
            <br/>
            <Link to="/home" className="btn btn-lg btn-primary p-3 fw-16 ps-30">
            Back Home Page
            </Link>
        </div>
    );
};

export default Error;