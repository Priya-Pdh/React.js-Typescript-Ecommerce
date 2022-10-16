import React from "react";
import Input from "../Input";
import "./Footer.css"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer () {

    const handleEmail = (e:React.SyntheticEvent) => {
        e.preventDefault();
         alert("You have subscribed for newsletters") 
      }
    
      
    return (    
    <>
     <div id="footer-container">
       <p className="footer-text"><b>Shoppers</b></p>
       <p className="footer-text"><b>Since 2020</b></p>
       <br/>
       <p className="footer-text"><em>Subscribe and receive promotions and newsletters</em></p>
       <form className="form-group" autoComplete="off"  onSubmit={handleEmail} >
         <label>Email</label>
         <Input type="email" name='email' placeholder='Email@gmail.com' className="" id="email-input" />
         <br/>
         <button type="submit">Subscribe</button>
        </form>

        <ul className="footer-icons">
          <li className="footer-icons-list"><FaFacebook/></li>
          <li className="footer-icons-list"><FaInstagram /></li>
          <li className="footer-icons-list"><FaTwitter /></li>
        </ul>
       </div>
        
   </>
    )
};

export  default Footer;