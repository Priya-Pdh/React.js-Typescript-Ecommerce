import React from "react";

interface Value {
  src?: string | undefined;
  value: string;
  description: string;
}

function Values(props: Value) {
  
  return (
    <>
      <img src={props.src} alt="" className="value-img" />
      <p> <span style={{color: "rgb(201, 138, 104)", fontWeight: "1000"}}>{props.value}</span></p>
      <p>{props.description}</p>
    </>
  );
}

export default Values;
