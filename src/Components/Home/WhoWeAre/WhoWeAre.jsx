import React from "react";
import WHO from "/images/WhoAreWe.png";
import "./WhoWeAre.css";
import Button from "../../Common/Button";

const WhoWeAre = () => {
  return (
    <section className="bg-gray who padding">
      <div className="whoweare">
        <div className="section_one">
          <h2>Who Are We ?</h2>
          <img src={WHO} alt="" />
        </div>

        <div className="section_two">
          <h3>A Leading Nigeria-based Information Technology Provider</h3>
          <h6>
            Since inception, We have been dedicated to delivering exceptional IT
            solutions that have consistently propelled businesses to the next
            level. Our commitment to excellence extends to a comprehensive range
            of services, including web applications and cutting-edge security
            solutions, all tailored to bring your unique ideas to life. Our Team
            is comprised of experienced IT professionals to give you the best
            experience in information technology, web development and Customer
            services. We are the technology partner you need to accomplish your
            business goals.
          </h6>
          {/* <button></button> */}
          <Button link="#" title="About Us" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
