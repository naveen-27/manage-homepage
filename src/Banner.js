import React from "react";
import Button from "./Button";
import bg from "./images/bg-tablet-pattern.svg";
import classes from "./styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.Banner}>
      <h1 className={classes["Banner-Text"]}>
        Simplify how your team works today.
      </h1>
      <Button label="Get Started" isHidden={false} />
      <img id="banner-bg-left" src={bg} alt="" />
      <img id="banner-bg-right" src={bg} alt="" />
    </div>
  );
};

export default Banner;
