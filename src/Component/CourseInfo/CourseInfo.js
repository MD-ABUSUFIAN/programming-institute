import React from 'react';


const CourseInfo = (props) => {
    
   const {title,duration,lessons,price,banner}=props.data;
    return (
        <div className=" card-head1 col rounded mt-5 ">
       
            
    <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={banner} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title text-primary">Course Name:{title}</h1>
        <ul className="card-text fs-3 ">
            <li>{lessons}</li>
            <li>Duration: {duration}</li>
            <li>Course Fee: ${price}</li>
            
        </ul>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CourseInfo;