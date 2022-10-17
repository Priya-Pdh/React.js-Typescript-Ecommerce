import React, { useContext } from "react";
import { productsProps } from "../../pages/Products"



type CartProviderProps = {
    children: React.ReactNode
}

export type CartContextProps = {
  cartItems: productsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<productsProps[]>>;
  handleAddToCart: (clickedItem: productsProps) => void;
  handleRemoveFromCart: (id: number) => void;
 getTotalItems: (items: productsProps[]) => number;
}


export const CartContext = React.createContext({} as CartContextProps);

export function useCart() {
  return useContext(CartContext)
}


 export function CartProvider({ children}: CartProviderProps) {
   const [cartItems, setCartItems] = React.useState([] as productsProps[]);


    //Total amount of products in cart

  const getTotalItems = (items: productsProps[]) =>
  items.reduce((total, item) => total + item.amount, 0);


//Add products in cart

   const handleAddToCart = (clickedItem: productsProps) => {
     setCartItems((prev) => {
       // is item already in the cart??
       const isItemInCart = prev.find((item) => item.id === clickedItem.id);

       if (isItemInCart) {
         return prev.map((item) =>
           item.id === clickedItem.id
             ? { ...item, amount: item.amount + 1 }
             : item
         );
       }
       //First time item is added
      return [...prev, { ...clickedItem, amount: 1 }];
     });
   };

   //Remove products in cart
   const handleRemoveFromCart = (id: number) => {
     setCartItems((prev) =>
            prev.reduce((ack, item) => {
         if (item.id === id) {
           if (item.amount === 1) return ack;
           return [...ack, { ...item, amount: item.amount - 1 }];
         } else {
           return [...ack, item];
         }
       }, [] as productsProps[])
     );
   };
   return (
     <CartContext.Provider
       value={{
        cartItems,
        setCartItems,
         handleAddToCart,
         handleRemoveFromCart,
         getTotalItems,

       }}
     >
       {children}
    </CartContext.Provider>
   );
 };
 
 export default CartProvider;
 