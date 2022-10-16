import React from "react";
import "./css/Thankyou.css";
import FeedBack from "../component/feedback/Feedback";
import Footer from "../component/footer/Footer";
import NavBar from "../component/navbar/Navbar";

function Thankyou() {
  return (
    <>
      <NavBar />
      <div className="thankyou-container">

        <h1 className="thankyou-heading">Thank you for your order!!</h1>
        <p>Your order has been received</p>
      <br/>
      <FeedBack />
      </div>
      <Footer />
    </>
  );
}

export default Thankyou;
