import React, {useState} from "react";
import Footer from "../component/footer/Footer";
import NavBar from "../component/navbar/Navbar";

// import DATA from "../component/data/FAQ.json";
 import "./css/Contactus.css"

function Contactus() {
const [show, setShow]= useState(false);

const handleClick= () => {
    setShow(!show)
}
  return (
    <>
      <NavBar />
      {/* <h1 className="heading-FAQ">FAQ</h1>
      <div className="conatactus-conatiner">
        <div className="accordion">
        {
          DATA && DATA.map ((data?: number) => {
            return (
              <div  key={data.id} className="questions-answers-container">
                {
                  show ? (
                    <button key={data.id} className="answers-container-btn">
                    {data.answer}
                    </button>
                  ) : (
                    <div className="questions-container" onClick={(handleClick)}>
                    <button className="questions-container-btn" key={data.id}>{data.question}</button>
                  
                   
                    </div>
                  )
                }
              
              </div>
              
            )
          })
        }
        </div>
        </div> */}
        <p className="contact-para">
          Your questions and opinions are important to us! If you want to get in
          touch with Shoppers, do so by phone, email or post.
        </p>
        <p className="contact-para">Shoopers AB</p>
        <p className="contact-para"> Krusvagen 09B</p>
        <p className="contact-para"> 164 07 Väjxo</p>
        <p className="contact-para"> Tel: 07-22 00 93 50</p>
        <p className="contact-para"> Fax: 01-26 00 79 40</p>
        <p className="contact-para">E-post: info@shoppers.com</p>
      
      <Footer />
    </>
  );
}

export default Contactus;
