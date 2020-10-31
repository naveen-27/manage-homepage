import React from "react";
import Button from "./Button";
import logo from "./images/logo-light.svg";
import facebook from "./images/icon-facebook.svg";
import youtube from "./images/icon-youtube.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
import instagram from "./images/icon-instagram.svg";
import classes from "./styles/Footer.module.css";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={classes.Footer}>
      <form className={classes.Form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Updates in your inbox..."
          name="email"
        />
        <Button label="Go" isHiden={false} />
      </form>

      <div className={classes["Ft-links-container"]}>
        <ul className={classes["Footer-Links"]}>
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About US</li>
        </ul>
        <ul className={classes["Footer-Links"]}>
          <li>Careers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className={classes.social}>
        <img src={facebook} alt="Manage Facebook" />
        <img src={youtube} alt="Manage Youtube" />
        <img src={twitter} alt="Manage Twitter" />
        <img src={pinterest} alt="Manage Pinterest" />
        <img src={instagram} alt="Manage Instagram" />
      </div>

      <img src={logo} alt="Manage" />

      <p className={classes.Copyright}>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
