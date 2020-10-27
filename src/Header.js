import React, { useEffect, useState } from "react";
import logo from "./images/logo.svg";
import menuOpen from "./images/icon-hamburger.svg";
import menuClose from "./images/icon-close.svg";
import Navbar from "./Navbar";
import Button from "./Button";
import classes from "./styles/Header.module.css";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      if (window.innerWidth > 800) setIsMobileNavOpen(false);
    }

    window.addEventListener("resize", handleResize);
  });

  const handleMenuClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className={classes.Header}>
      <img src={logo} alt="Manage" style={{ width: "max(13%, 150px)" }} />
      <Navbar isHidden={width <= 800 && !isMobileNavOpen} />
      <Button isHidden={width <= 800} label="Get Started" />
      <img
        src={isMobileNavOpen ? menuClose : menuOpen}
        alt=""
        className={classes.Menu}
        onClick={handleMenuClick}
      />
    </header>
  );
};

export default Header;
