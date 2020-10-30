import React from "react";
import classes from "./styles/Desc.module.css";

const Desc = (props) => {
  return <p className={classes["Desc-Text"]}>{props.content}</p>;
};

export default Desc;
