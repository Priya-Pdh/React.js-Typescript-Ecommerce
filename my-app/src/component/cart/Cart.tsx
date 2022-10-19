import React from "react";
import { useCart } from "../context/CartContext";

import CartItem from "./CartItems";
import "./Cart.css";

//Types
import { productsProps } from "../../pages/Products";
import { useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

export default function Cart() {
  const { cartItems } = useCart();

  const calculateTotal = (items: productsProps[]) => {
    return items.reduce(
      (ack: number, item) => ack + item.amount * item.price,
      0
    );
  };

  const navigate = useNavigate();

  const handleCheckout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return <button disabled />;
    else navigate("/Checkout");
  };

  return (
    <>
      <div className="main-cart-container">
        <h2>
          Your Shopping Cart Section <FaShoppingBag />
        </h2>
        <div className="cart-container">
          {cartItems.length === 0 ? <p>No items in cart.</p> : null}
          {cartItems.map((item: productsProps) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="total">
          <p>Total: {calculateTotal(cartItems)}</p>
        </div>

        <div className="checkout-conatiner">
          <div className="starRationContainer"></div>

          <button id="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
