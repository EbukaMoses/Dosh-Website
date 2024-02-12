import React from 'react'
import "./OurMission.css";
import Button from '../../Common/Button';
import MISSION from "/images/Mission.png";

const OurMission = () => {
  return (
    <section className="padding">
      <div className="mission_section flex">
        <div className="mission_text">
          <h2>
            Our <span>Mission</span>, <br />
            Our <span>Vision.</span>
            <p>
              To provide valuable business solutions via understanding the
              client's needs and designing the best solution towards the
              business goals.
            </p>
            <Button title="Work With Us" />
          </h2>
        </div>
        
        <div className="mission_img">
          <img src={MISSION} alt="" />
        </div>
      </div>
    </section>
  );
}

export default OurMission