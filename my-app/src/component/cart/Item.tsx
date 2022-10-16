import React from "react";
import { useCart } from "../context/CartContext"

//Types
import { productsProps } from "../../pages/Products";

import { formatCurrency } from "../utilities/formatCurrency";

import "./Item.css";

interface ItemProps {
  item: productsProps;
}

export default function Item(props: ItemProps) {
  const {  handleAddToCart } = useCart()
  return (
    <div className="products-container">
      {/* Rendering of a list key and  Props*/}

      <ul className="products-wrapper">
        <div className="products-img-wrapper">
          <img
            src={props.item.image}
            alt={props.item.title}
            className="products-img"
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
