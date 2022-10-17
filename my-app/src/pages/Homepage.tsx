import React from "react";
import { useUserContext } from "../component/context/UserContext";
import Footer from "../component/footer/Footer";
import NavBar from "../component/navbar/Navbar";
import "./css/Homepage.css";

function Homepage() {
  const { user }= useUserContext();
  return (
    <>
      <NavBar />

        <div className="main-section-container">
          <div className="text-section">
            <p className="welcome-para">
              <b>WELCOME TO SHOPPERS</b>
            </p>
            <p className="userName"><strong>{user}</strong></p>
            <p> Making commerce better for everyone</p>
            <p>
              We help people achieve independence by making it easier to start,
              run, and grow a business. We believe the future of commerce has
              more voices, not fewer, so we're reducing the barriers to business
              ownership to make commerce better for everyone.
            </p>
            <br/>
            <div className="marquee-text">
            <p>*FEEL GOOD ABOUT FEELING GOOD*</p>
            </div>
           
          </div>
          <div className="img-section">
            <img
              src="images/img15.webp"
              alt="homepage-img"
             
            />
          </div>
        </div>
       
      
      <Footer />
    </>
  );
}

export default Homepage;
