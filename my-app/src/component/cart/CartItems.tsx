import { useCart } from  "../context/CartContext";
import { productsProps } from "../../pages/Products"
import "./CartItems.css";

type CartItemsProps = {
  item: productsProps;
 
};

export default function CartItem(props: CartItemsProps) {
  const { handleAddToCart, handleRemoveFromCart } = useCart()
  return (
    <>
      <div>
        <div>
          <img
            className="cartItem-img"
            src={props.item.image}
            alt={props.item.title}
          />
          <h3>{props.item.title}</h3>
          <p>Price: SEK {props.item.price}</p>
          <p>Total: SEK {props.item.price * props.item.amount}</p>
        </div>
        <div className="buttons">
          <button id="add-button" onClick={() => handleAddToCart(props.item)}>
            Add{" "}
          </button>
          <p>{props.item.amount}</p>
          <button
            id="remove-button"
            onClick={() => handleRemoveFromCart(props.item.id)}
          >
            Remove
          </button>
          
        </div>
      </div>
    </>
  );
}
