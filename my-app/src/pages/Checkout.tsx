import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Checkout.css";
import { FaRegCreditCard, FaCcVisa, FaPaypal } from "react-icons/fa";
import NavBar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import { usePersonalDetailsContext } from "../component/context/PersonalDetailsContext";

function Checkout() {
  const { setName, setStreetAddress, setEmail } = usePersonalDetailsContext();

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setName(fullName);
    setStreetAddress(address);
    setEmail(emailAddress);

    navigate("/Thankyou");
  };

  return (
    <>
      <NavBar />
      <div id="order-container">
        <form
          className="Personal-Detail"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="personal-info">Personal Information</h2>
          <label className="input-label">Your Full Name</label>
          <input
            type="text"
            className="form-info"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <br />
          <label>Email Address </label>
          <input
            type="text"
            className="form-info"
            id="checkout-email"
            name="email"
            placeholder="Email@gmail.com"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          />
          <br />
          <label>Street Address</label>
          <input
            type="text"
            className="form-info"
            id="address"
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <br />
          <label>Current Land</label>
          <select id="country">
            <option>Choose...</option>
            <option>Sweden</option>
            <option>Finland</option>
            <option>Denmark</option>
            <option>Norway</option>
          </select>
          <br />
          <label>Current City</label>
          <input
            type="text"
            className="form-info"
            id="city"
            name="city"
            placeholder="City"
            required
          />
          <br />
          <label>Postal Code</label>
          <input
            type="text"
            className="form-info"
            id="zip"
            name="zip"
            placeholder="Postal Code"
            required
          />
          <br />

          <hr />

          <h3 className="payment-heading">Payment Method</h3>
          <input
            id="credit"
            name="paymentMethod"
            type="checkbox"
            placeholder=""
            className="control-input"
          />
          <label className="payment-info">
            Credit Card
            <FaRegCreditCard />
          </label>
          <br />
          <input
            id="debit"
            name="paymentMethod"
            type="checkbox"
            placeholder=""
            className="control-input"
          />
          <label className="payment-info">
            Debit Card
            <FaCcVisa />
          </label>
          <br />
          <input
            id="paypal"
            name="paymentMethod"
            type="checkbox"
            placeholder=""
            className="control-input"
          />
          <label className="payment-info">
            PayPal <FaPaypal />
          </label>
          <br />
          <hr />
          <br />

          <button className="payment-button">Proceed to Pay</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default Checkout;
