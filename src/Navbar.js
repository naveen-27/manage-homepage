import React from "react";
import classes from "./styles/Navbar.module.css";

const Navbar = (props) => {
  const hideNavClass = props.isHidden ? "hide" : "";

  if (window.innerWidth <= 800) {
    if (props.isHidden) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }

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
