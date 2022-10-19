import React from "react";
import { useUserContext } from "../component/context/UserContext";
import Footer from "../component/footer/Footer";
import NavBar from "../component/navbar/Navbar";
import "./css/Homepage.css";

function Homepage() {
  const { user } = useUserContext();
  return (
    <>
      <NavBar />

      <div className="main-section-container">
        <div className="text-section">
          <div className="h1-div">
          <p className="welcome-para">
            <b>WELCOME TO SHOPPERS</b>
          </p>
          </div>
          <p className="userName">
            <strong>{user}</strong>
          </p>
          <p> Making commerce better for everyone</p>
          <p>
            We help people achieve independence by making it easier to start,
            run, and grow a business. We believe the future of commerce has more
            voices, not fewer, so we're reducing the barriers to business
            ownership to make commerce better for everyone.
          </p>
          <br />
          
        </div>
        <div className="img-section">
          <img src="images/img15.webp" alt="homepage-img" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
