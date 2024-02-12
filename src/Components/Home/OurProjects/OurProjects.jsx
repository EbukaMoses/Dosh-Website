import React from "react";
import "./OurProjects.css";
import Button from "../../Common/Button.jsx";
import IMG from "/images/ourproject.png";
import STAR from "/images/ourproject1.png";

const OurProjects = () => {
  return (
    <section className="padding">
      <div className="ourproject">
        <div className="top">
          <div className="title">
            <h3>Our Projects</h3>
            <p>We provide exclusive services for your business</p>
          </div>
          <div className="button">
            <Button link="" title="" />
          </div>
        </div>

        <div className="box">
          <div className="left">
            <h3>LMC - Web Design</h3>
            <div className="topic">Client</div>
            <div className="sub_topic">Loveworld Medical Center</div>
            <div className="topic">Industry</div>
            <div className="sub_topic">Health</div>
            <div className="topic">Service</div>
            <div className="sub_topic">Website Design & Development</div>
            <Button link="" title="Check Live:" />
          </div>
          <div className="right">
            <img src={IMG} alt="Project Image" />
          </div>
        </div>
        <div className="star">
            <img src={STAR} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
