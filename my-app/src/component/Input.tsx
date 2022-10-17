import React from "react";
import { useState } from "react";

interface UserDetails {
  id?: string;
  type: string;
  name: string;
  placeholder: string;
  className: string;
  value?: string | number;
}

const Input = (props: UserDetails) => {
  const [value, setValue] = useState("");
  return (
    <input
      id={props.id}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className={props.className}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
      value={value}
      required
    />
  );
};

export default Input;
