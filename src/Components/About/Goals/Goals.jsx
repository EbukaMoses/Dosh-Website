import React from "react";
import "./Goals.css";
import GOAL from "/images/Goals.png";
import Button from "../../Common/Button";

const Goals = () => {
  return (
    <section className="padding">
      <div className="goal">
        <div className="goal_img">
          <h2>
            Our <span>Goals</span>
          </h2>
          <img src={GOAL} alt="" />
        </div>

        <div className="goal_content">
          <h3>We Are Expert In IT Solutions Services</h3>
          <p>
            Since Inception, we have provided outstanding IT solutions including
            Web Applications and Security services that takes businesses to the
            next level and bring our clients ideas to life. From requirement
            assembling to IT framework strategy, we furnish our clients with
            fair-minded and target perspective to adjust technology to their
            business goals. We can help you in accomplishing your business goals
            using technology and build out your digital transformation roadmap.
          </p>
          <Button title="Let’s Work Magic" />
        </div>
      </div>
    </section>
  );
};

export default Goals;
