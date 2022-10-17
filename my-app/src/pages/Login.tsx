import React, { useState } from "react";
import { useUserContext } from "../component/context/UserContext"
import { FaShopify } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


import Input from "../component/Input";

import "./css/Login.css";

function Login() {
  const { setUser } = useUserContext()
 const [ loginName, setLoginName ] = useState("");

  const navigate = useNavigate();

  const onClick = (e:React.SyntheticEvent)=> {
    setUser(loginName) ;
    if (Input.length !== 0) return(
      navigate("/Homepage")
    )
    
  }
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
        <form className="login-form" autoComplete="off" >
          <h1 className="login-heading">LOGIN</h1>
          <hr></hr>
          <label>Full Name</label>
          <input
            type="name"
            name="name"
            placeholder="Full Name"
            id="name"
            className="U_Name"
            value= {loginName}
            onChange= {(e) => setLoginName(e.target.value)}
          />
         
          <br></br>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            id=""
            className="U_password"
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
            <button onClick={onClick} style = { {width: "50px", height: "20px"}}>Login </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
