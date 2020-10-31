import React from "react";
import Desc from "./Desc";
import classes from "./styles/Feature.module.css";

const Feature = (props) => {
  return (
    <div className={classes.Feature}>
      <h3 className={classes.title}>
        <span className={classes.No}>{props.no}</span>
        {props.title}
      </h3>
      <Desc content={props.detail} />
    </div>
  );
};

export default Feature;
