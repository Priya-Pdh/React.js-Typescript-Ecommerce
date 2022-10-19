import React, { useState } from "react";
import Footer from "../component/footer/Footer";
import NavBar from "../component/navbar/Navbar";

import DATA from "../component/data/FAQ.json";
import "./css/Contactus.css";
import { FaArrowAltCircleDown } from "react-icons/fa";

function ContactUs() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  return (
    <>
      <NavBar />
      <div className="conatactus-conatiner">
        <h1 className="heading-FAQ">FAQ</h1>
        {DATA &&
          DATA.map((data) => {
            return (
              <div key={data.id} className="questions-answers-container">
                <div className="questions-container">
                 <div className="drop-down-container"><strong className="questions-text">{data.question}</strong><span className="arrow-icon"><FaArrowAltCircleDown/></span></div> 
                </div>

                <div className="answers-container">{data.answer}</div>
                <hr />
              </div>
            );
          })}
        <br />
        <br />
        <div className="companyDetailsContainer">
          <p className="contact-para" id="infoContactPara">
            Your questions and opinions are important to us! If you want to get
            in touch with Shoppers, do so by phone, email or post.
          </p>
          {show ? (
            <div>
              <p className="contact-para">Shoopers AB</p>
              <p className="contact-para"> Krusvagen 09B</p>
              <p className="contact-para"> 164 07 Väjxo</p>
              <p className="contact-para"> Tel: 07-22 00 93 50</p>
              <p className="contact-para"> Fax: 01-26 00 79 40</p>
              <p className="contact-para">E-post: info@shoppers.com</p>
            </div>
          ) : (
            <div>
              <button onClick={handleClick} className="comDetailButton">
                Company's Details
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
