import React from "react";
import Header from "./Header";
import bg from "./images/bg.svg";
import Hero from "./Hero";
import "./styles/Root.css";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <img src={bg} alt="" className="bg bg-right" />
      {/* <img src={bg} alt="" className="bg bg-left" /> */}
    </>
  );
};

export default App;
