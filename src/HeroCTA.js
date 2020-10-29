import React from "react";
import Button from "./Button";
import classes from "./styles/HeroCTA.module.css";

const HeroCTA = () => {
  return (
    <div className={classes.HeroCTA}>
      <h1 className={classes["Hero-Text"]}>
        Bring everyone <br /> together to build <br /> better products.
      </h1>

      <p className={classes["Hero-Desc"]}>
        Manage makes it simple for software teams to plan day-to-day tasks
        keeping the larger team goals in view.
      </p>

      <Button label="Get Started" isHidden={false} />
    </div>
  );
};

export default HeroCTA;
