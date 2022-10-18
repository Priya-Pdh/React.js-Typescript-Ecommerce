import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

//Types
import { productsProps } from "../../pages/Products";

import { formatCurrency } from "../utilities/formatCurrency";

import "./Item.css";

interface ItemProps {
  item: productsProps;
}

export default function Item(props: ItemProps) {
  const { handleAddToCart } = useCart();
  const navigate = useNavigate();

  const handleClick = (e: React.SyntheticEvent) => {
    navigate("/ProductsDetails");
  };
  return (
    <div className="products-container">
      <ul className="products-wrapper">
        <div className="products-img-wrapper" key={props.item.id}>
          <img
            src={props.item.image}
            alt={props.item.title}
            className="products-img"
            onClick={handleClick}
          />
        </div>
        <div className="list-container">
          <li key={props.item.id}>
            <b>{props.item.title}</b>
          </li>
          <li>
            <b>Price: </b>
            {formatCurrency(props.item.price)}
          </li>
          <li>{props.item.description}</li>

          <button
            className="add-button"
            onClick={() => handleAddToCart(props.item)}
          >
            Add to cart
          </button>
        </div>
      </ul>
    </div>
  );
}
