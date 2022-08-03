import React from "react";
import { useState } from "react";

const FormInput = (props) => {
  const { id, label, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
const inputStyle = {
    fontSize: "1rem",
    padding: "12px",
    margin: "10px 0px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
}
  return (
    <div style={{ display: "flex",flexDirection: "column",width: "100%"}}>
      <label htmlFor="username">{label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        {...inputProps}
        style={inputStyle}
      />
      <span>{props.errormessage}</span>
    </div>
  );
};

export default FormInput;