import React, { useState } from "react";
import Button from "./Button";
import Testimonial from "./Testimonial";
import Ali from "./images/avatar-ali.png";
import Anisha from "./images/avatar-anisha.png";
import Richard from "./images/avatar-richard.png";
import Shanai from "./images/avatar-shanai.png";
import classes from "./styles/Testimonials.module.css";

const Testimonials = () => {
  const userExperiences = [
    {
      name: "Ali Bravo",
      img: Ali,
      review:
        '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."',
    },

    {
      name: "Anisha Li",
      img: Anisha,
      review:
        '"Manage has supercharged our team\'s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."',
    },

    {
      name: "Richard Watts",
      img: Richard,
      review:
        '"Manage allows us to provide structure and process. it keeps us organised and focused. I can\'t stop recommending them to everyone I talk to!"',
    },

    {
      name: "Shanai Gough",
      img: Shanai,
      review:
        '"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."',
    },
  ];

  const [user, setUser] = useState(0);
  const changeUser = (e) => {
    setUser(parseInt(e.target.dataset.user));
  };

  return (
    <div className={classes.Testimonials}>
      <h1>What they have've said</h1>

      <Testimonial review={userExperiences[user]} />

      <div className={classes.Controller}>
        <div
          className={`${classes.Dot} ${user === 0 ? classes.active : ""}`}
          onClick={changeUser}
          data-user="0"
        ></div>
        <div
          className={`${classes.Dot} ${user === 1 ? classes.active : ""}`}
          onClick={changeUser}
          data-user="1"
        ></div>
        <div
          className={`${classes.Dot} ${user === 2 ? classes.active : ""}`}
          onClick={changeUser}
          data-user="2"
        ></div>
        <div
          className={`${classes.Dot} ${user === 3 ? classes.active : ""}`}
          onClick={changeUser}
          data-user="3"
        ></div>
      </div>
      <Button label="Get Started" isHidden={false} />
    </div>
  );
};

export default Testimonials;
