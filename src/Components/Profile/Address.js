/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../App.css";
import img from "../../images/location.png";
import image from "../../images/mail.png";
import image2 from "../../images/call.png";

const Address = () => {
    return (
        <div >
            <section>
                <div className="container">
                    <div className="contactInfo">
                        <div>
                            <h2> Contact Info </h2>
                            <ul className="info">
                                <li>
                                    <span>
                                    <img src={img} alt="" />
                                    </span>
                                    <span> Tunisia Sousse <br />
                                        Messadine environment street <br />
                                        4013
                                    </span>
                                </li>
                                <li>
                                    <span> <img src={image} alt="" />  </span>
                                    <span> Salemwachwacha1997@gmail.com </span>
                                </li>
                                
                                <li> 
                                    <span><img src={image2} alt="" /></span>
                                    <span>  +216 55 269 401</span>
                                </li>
                                
                            </ul>
                        </div>
                        <ul className="sci" > 
                        
                        </ul>
                    </div>
                    <div className="contactForm">
                        <h2> Send a Message </h2>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <input type='text required'/>
                                <span> First Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type='text required'/>
                                <span> Last  Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type='email' required/>
                                <span> Email Address</span>
                            </div>
                            <div className="inputBox w50">
                                <input type='text required'/>
                                <span> Mobile Number</span>
                            </div>
                            <div className="inputBox w100">
                                <textarea required/>
                                <span>Write Your Mesage Here...</span>
                            </div>
                            <div className="inputBox w100">
                                <input type='submit' value='send' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Address;
