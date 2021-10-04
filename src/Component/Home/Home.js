
import { useEffect, useState } from 'react';
import CourseInfo from '../CourseInfo/CourseInfo';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const url='./datas.Json';
    const [datas,setDatas]=useState([]);
       useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])
    return (
        <div>
            <Header></Header>
            <h2 className=" home-title p-4 fw-5 bolder d-inline ">Beginner friendly courses</h2>
            
        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mt-5 gx-4">
        {
        datas.map(data=>
        <CourseInfo data={data} key={data.id}></CourseInfo>)
              }
        </div>
         
           
        </div>
    );
};

export default Home;