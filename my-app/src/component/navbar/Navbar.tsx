import React from "react";
import { useCart } from "../context/CartContext"
import { Link , useNavigate} from "react-router-dom";
import "./Navbar.css";
import { FaShopify, FaCartPlus } from "react-icons/fa";

function NavBar() {
  const { cartItems, getTotalItems } = useCart()

  const navigate = useNavigate();

  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate("/Cart");
  };

  return (
      <>
        <nav className="navbar-container">
          <ul className="navbar-wrapper">
            <li className="navbar-list">
              <FaShopify />
            </li>
            <li className="navbar-list">
              <Link  to="/Homepage">
                Home
              </Link>
            </li>
            <li className="navbar-list">
              <Link  to="/Products">
                Product
              </Link>
            </li>
            <li className="navbar-list">
              <Link  to="/Aboutus">
                About us
              </Link>
            </li>
            <li className="navbar-list">
              <Link  to="/Contactus">
                Contact us
              </Link>
            </li>
            <li className="navbar-list"> 
              <Link to="/">
                Logout
              </Link>
            </li>
            <li className="navbar-list">
            <FaCartPlus  onClick= {onClick} id="itemsInCart"/>
              {getTotalItems(cartItems)}
            </li>
          </ul>
        </nav>
        </>
  );
}

export default NavBar;
