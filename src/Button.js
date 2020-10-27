import React from "react";
import classes from "./styles/Button.module.css";

const Button = (props) => {
  const hideBtnClass = props.isHidden ? "hide" : "";
  return (
    <button className={[classes.Btn, hideBtnClass].join(" ")}>
      {props.label}
    </button>
  );
};

export default Button;
