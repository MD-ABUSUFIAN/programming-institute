import React from 'react';
import Header from '../Header/Header';
import './Contact.css';


const Contact = () => {
    return (
        <div className="conainer">
            <Header></Header>
            <div className=" mt-5 w-50 m-auto p-5 contact">
                <h1 className="pb-5">Contact Us</h1>
                <h3 className="pb-4">If you have a question about anything regarding state financial aid and the YOUniversal system, you may be able to find the answer in the Frequently Asked Questions or in the Complete YOUniversal Guide. However, if you still have questions, please fill out the contact form, and someone will respond as quickly as possible.</h3>
                <div class="mb-3 row mt-3">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text"  class="form-control" id="staticEmail" value="email@example.com"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>
    <div>
        <button className="btn-lg btn-primary mt-4">Sumbit</button>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Contact;