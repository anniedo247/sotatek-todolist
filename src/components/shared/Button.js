import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"} ${
          props.visibility && "button--visibility"
        }`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
