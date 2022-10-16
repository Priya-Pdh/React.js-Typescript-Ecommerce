import React from "react";
import { FaShopify } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


import Input from "../component/Input";

import "./css/Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate("/Homepage");
  };

  return (
    <>
      <div className="navbar-container-login">
        <nav>
          <ul className="navbar-wrapper-login">
            <li>
              <FaShopify />
            </li>
            <li>Home </li>
            <li>Product</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Login</li>
            <li>Signup</li>
          </ul>
        </nav>
      </div>
      <div className="body-container-login">
        <form className="login-form" autoComplete="off" onSubmit={handleLogin}>
          <h1 className="login-heading">LOGIN</h1>
          <hr></hr>
          <label>E- Address</label>
          <Input
            type="email"
            name="Email"
            placeholder="email@gmail.com"
            id="email"
            className=""
          />
          <br></br>
          <label>Password</label>
          <Input
            type="password"
            name="password"
            placeholder="password"
            id="password"
            className=""
          />
          <br></br>
          <div>
            <span>
              Don't have an account?
              <Link to="/Signup" className="link">
                Signup Here
              </Link>
            </span>
            <br />

            <button className="login-button">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
