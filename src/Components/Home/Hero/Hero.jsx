import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "/images/heroImg.png";
import CTA from "/images/CTA.png";
import "./Hero.css"

const Hero = () => {
  return (
    <section className="padding">
      <div className="hero">
        <div className="text">
          <h1>
            The <span>Perfect</span> IT Solutions For Your Business
          </h1>
        </div>
        <div className="heroImg">
          <img src={HeroImg} alt="" />
        </div>
      </div>

      <div className="hero_action">
        <div className="hero_button">
          {/* <Link to="/home"> */}
          <span>
            Start your Journey With Us <img src={CTA} alt="" />
          </span>
          {/* </Link> */}
        </div>
        <p>
          Dosh is a technology company that offers valuable business solutions
          by understanding the client's needs and designing the best solution
          towards the business goals.
        </p>
      </div>
    </section>
  );
};

export default Hero;
