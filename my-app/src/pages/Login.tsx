import React, { useState } from "react";
import { useUserContext } from "../component/context/UserContext";
import { FaShopify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./css/Login.css";

function Login() {
  const { setUser } = useUserContext();
  const [loginName, setLoginName] = useState("");

  const navigate = useNavigate();

  const onClick = (e: React.SyntheticEvent) => {
    setUser(loginName);
    if (loginName.length !== 0) return navigate("/Homepage");
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
          </ul>
        </nav>
      </div>
      <div className="body-container-login">
        <form className="login-form" autoComplete="off">
          <h1 className="login-heading">LOGIN</h1>
          <hr></hr>
          <label id="nameLogin">Full Name </label>
          <input
            type="name"
            name="name"
            placeholder="Full Name"
            id="name"
            className="U_Name_Login"
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)}
          />

          <br></br>
          <label id="passwordLogin">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id=""
            className="U_password_Login"
          />
          <br />
          <br />
          <button onClick={onClick} className="login-button">
            Login{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
