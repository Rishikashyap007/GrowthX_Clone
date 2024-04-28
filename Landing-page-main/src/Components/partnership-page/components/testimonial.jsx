import React from "react";
import './testinomial.css';
function Testinomial(){
    return(
     <div className="testimonial-container">
        <div className="testimonial">
          <div className="testimonial-section">
            <p className="testimonial-title">GROWTHX MEMBER SINCE 2021</p>
            <h2 className="testimonial-headline">
              “I got actionable feedback on how to build partnerships for my
              company”
            </h2>
            <p className="description">
              Ashu's craft shows how businesses can grow by teaming up with
              partners. Even small companies can work with big ones to succeed.
              If you're starting a business in a new place and need help, this
              course is really useful. I appreciate how Ashu really listens to
              us. It's clear he cares about solving out problems. I think it's a
              great course and suggest others to take it too!”
            </p>
            <div className="testimonial-name-div">
              <div className="name-div">
                <h1 id="name">Rajnish Kumar</h1>
                <p id="role">Head, Demand Generation</p>
              </div>
              <div className="company-logo">
                <img
                  src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64f1d323dbd420ebdcb4a1c9_keka.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="testimonial-image-cont">
            <img
              src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64f1d43d8cb6363179f11f76_rajnish.png"
              alt=""
            />
          </div>
        </div>
      </div> 
    );
}
export default Testinomial