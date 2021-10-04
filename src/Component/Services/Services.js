import React, { useEffect, useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';
import Header from '../Header/Header';


const Services = () => {
    const url='./data.Json';
    const [datas,setDatas]=useState([]);
       useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])
    return (
        <div>
            <Header></Header>
            <h2 className=" home-title p-4 fw-5 bolder d-inline ">OUR SERVICES>></h2>
            
        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mt-5 gx-4">
        {
        datas.map(data=>
        <CourseDetails data={data} key={data.id}></CourseDetails>)
              }
        </div>
         
           
        </div>
    );
};

export default Services;