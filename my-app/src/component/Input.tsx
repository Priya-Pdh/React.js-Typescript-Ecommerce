import React from "react";
import { useState, useContext } from "react";

interface UserDetailsProps {
  id?: string;
  type: string;
  name: string;
  placeholder: string;
  className: string;
  value?: string | number;
}



export const valueContext =  React.createContext("");

export function useCart() {
  return useContext(valueContext )
}

const Input = (props: UserDetailsProps) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  setValue(e.target.value)
  
  return (
    <input
      id={props.id}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className={props.className}
      onChange={onChange}
      value={value}
      required
    />
  );
};

export default Input;
