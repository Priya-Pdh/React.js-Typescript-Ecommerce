import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../component/Input";
import "./css/Checkout.css";
import { FaRegCreditCard, FaCcVisa, FaPaypal } from "react-icons/fa";
import NavBar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

function Checkout() {
  const navigate = useNavigate();


  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
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
          <Input
            type="text"
            className="form-info"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
          />
          <br />
          <label>Email Address </label>
          <Input
            type="text"
            className="form-info"
            id="checkout-email"
            name="email"
            placeholder="Email@gmail.com"
          />
          <br />
          <label>Phone Number</label>
          <Input
            type="text"
            className="form-info"
            id="mobileNo"
            name="mobileNo"
            placeholder="073-XXXXXXX"
          />
          <br />
          <label>Street Address</label>
          <Input
            type="text"
            className="form-info"
            id="address"
            name="address"
            placeholder="Address"
          />
          <br />
          <label>Current Land</label>
          <select id="country">
            <option value="">Choose...</option>
            <option>Sweden</option>
            <option>Finland</option>
            <option>Denmark</option>
            <option>Norway</option>
          </select>
          <br />
          <label>Current City</label>
          <Input
            type="text"
            className="form-info"
            id="city"
            name="city"
            placeholder="City"
          />
          <br />
          <label>Postal Code</label>
          <Input
            type="text"
            className="form-info"
            id="zip"
            name="zip"
            placeholder="Postal Code"
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
