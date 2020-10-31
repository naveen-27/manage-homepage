import classes from "./styles/Testimonial.module.css";
import React from "react";
import Desc from "./Desc";

const Testimonial = (props) => {
  const { review } = props;

  return (
    <div className={classes.Testimonial}>
      <img src={review.img} alt={`${review.name} DP`} />
      <h3 className={classes.Name}>{review.name}</h3>
      <Desc content={review.review} />
    </div>
  );
};

export default Testimonial;
