import React from "react";
import { FaShopify } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Input from "../component/Input";
import "./css/Signup.css";
 
function SignUp() {
 
 const navigate = useNavigate();
 const handleSignUp = (e: React.SyntheticEvent) => {
   e.preventDefault();
   navigate("/");
 };
 
 return (
   <>
     <div className="navbar-container-signup">
       <nav>
         <ul className="navbar-wrapper-signup">
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
     <div className="body-container-signup">
       <form
         className="signup-form"
         autoComplete="off"
         onSubmit={handleSignUp}
       >
         <h1 className="signup-heading">SIGNUP</h1>
         <hr></hr>
         <label>Full Name</label>
         <Input
           type="text"
           name="FullName"
           className="signup-text"
           placeholder="Full Name"
         />
 
         <br></br>
         <label>E-Address</label>
         <Input
           type="email"
           name="email"
           className="signup-text"
           placeholder="email@gmail.com"
         />
         <br></br>
         <label>Password</label>
         <Input
           type="password"
           name="password"
           className="signup-text"
           placeholder="password"
         />
         <br></br>
         <div>
           <span className="account-message">
             Already have an account?
             <Link to="/" className="link">
               Login Here
             </Link>
           </span>
           <br />
           <button type="submit" className="signup-button">
             SIGN UP
           </button>
         </div>
       </form>
     </div>
   </>
 );
}
export default SignUp;
 
 
 
 
 
