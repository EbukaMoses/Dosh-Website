import React from "react";
import TECH from "/images/TechConsulting.png";

const WhatWeDoCard = ({icon, num, title, text, link}) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={icon} alt="" />
              <h4>{num}</h4>
      </div>
      <h2 className="title">{title}</h2>
      <p>
        {text}
      </p>
      <a href={link}>Read More</a>
    </div>
  );
};

export default WhatWeDoCard;
