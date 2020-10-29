import React from "react";
import HeroCTA from "./HeroCTA";
import heroImg from "./images/illustration-intro.svg";
import classes from "./styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.Hero}>
      <HeroCTA />
      <img
        src={heroImg}
        alt="Manage Statistics"
        className={classes["Hero-Img"]}
      />
    </div>
  );
};

export default Hero;
