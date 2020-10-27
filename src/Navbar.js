import React from "react";
import classes from "./styles/Navbar.module.css";

const Navbar = (props) => {
  const hideNavClass = props.isHidden ? "hide" : "";
  return (
    <nav className={`${classes.Navbar} ${hideNavClass}`}>
      <ul>
        <li className={classes["nav-link"]}>Pricing</li>
        <li className={classes["nav-link"]}>Product</li>
        <li className={classes["nav-link"]}>About Us</li>
        <li className={classes["nav-link"]}>Careers</li>
        <li className={classes["nav-link"]}>Community</li>
      </ul>
    </nav>
  );
};

export default Navbar;
