import React from "react";
import "./css/Thankyou.css";
import FeedBack from "../component/feedback/Feedback";
import Footer from "../component/footer/Footer";
import NavBar from "../component/navbar/Navbar";
import { usePersonalDetailsContext } from "../component/context/PersonalDetailsContext";

function Thankyou() {
  const { name, streetAddress, email } = usePersonalDetailsContext();

  return (
    <>
      <NavBar />
      <div className="thankyou-container">
        <h1 className="thankyou-heading">
          Thank <span className="U_Name">{name}</span> your for your order!!
        </h1>
        <p>Your order has been received</p>
        <br />
        <hr />
        <div className="details-div">
          <p>Your Details: </p>
          <br />
          <p>Full Name: {name}</p>
          <p>Email: {email}</p>
          <p>Address: {streetAddress}</p>
        </div>
        <br />
        <FeedBack />
      </div>
      <Footer />
    </>
  );
}

export default Thankyou;
