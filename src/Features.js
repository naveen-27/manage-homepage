import React from "react";
import Desc from "./Desc";
import Feature from "./Feature";
import classes from "./styles/Features.module.css";

const Features = () => {
  const diffDesc =
    "Manage provides all the functionality your team needs, without all the complexity. Our software is tailor-made for modern digital product teams.";

  const featuresDesc = [
    {
      no: "01",
      title: "Track company-wide progress",
      desc:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },

    {
      no: "02",
      title: "Advance built-in reports",
      desc:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you need to keep key stakeholders informed.",
    },

    {
      no: "03",
      title: "Everything you need in one place",
      desc:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  return (
    <section className={classes.Features}>
      <div className={classes["Features-Hero"]}>
        <h1>What's different about Manage?</h1>
        <Desc content={diffDesc} />
      </div>

      <aside className={classes["Features-Aside"]}>
        {featuresDesc.map((feature) => {
          return (
            <Feature
              no={feature.no}
              title={feature.title}
              detail={feature.desc}
              key={feature.no}
            />
          );
        })}
      </aside>
    </section>
  );
};

export default Features;
