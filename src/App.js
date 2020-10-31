import React from "react";
import Header from "./Header";
import bg from "./images/bg.svg";
import Hero from "./Hero";
import Features from "./Features";
import Banner from "./Banner";
import Footer from "./Footer";
import "./styles/Root.css";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Banner />
      <Footer />
      <img src={bg} alt="" className="bg bg-right" />
      {/* <img src={bg} alt="" className="bg bg-left" /> */}
    </>
  );
};

export default App;
