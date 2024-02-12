import React from "react";
import "./Footer.css"
import Button from "../Button";
import LOGO from "/images/logo.png"
import Icon from "../Icon";
import FACEBOOK from "/images/Facebook.png" 
import INSTAGRAM from "/images/Instagram.png"; 
import TWITTER from "/images/Twitter.png"; 
import YOUTUBE from "/images/Youtube.png"; 
import COPYRIGHT from "/images/copyright.png"; 

const Footer = () => {
  return (
    <section className="padding">
      <div className="footer">
        <div className="footer_top">
          <h3>Ready to Unlock your Digital Potential?</h3>
          <Button title="Contact Us" />
        </div>

        <div className="footer_container">
          <div className="footer_content">
            <h2>Company</h2>
            <p>About Us</p>
            <p>Projects</p>
            <p>Careers</p>
          </div>
          <div className="footer_content">
            <h2>Help</h2>
            <p>Customer Support</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer_content">
            <h2>Resources</h2>
            <p>Blog</p>
            <p>Youtube Playlist</p>
            <p>Pricing</p>
          </div>
          <div className="footer_content">
            <h2>Quick Links</h2>
            <p>Customer Support</p>
            <p>Projects</p>
            <p>Careers</p>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="footer_logo">
            <div>
              <img src={LOGO} alt="" />
            </div>
            <p>
              Your business is our business, working with us will provide you
              with the opportunity to access new and leading technological
              innovations that will help increase your sales, grow your customer
              base and ultimately keep you in business.
            </p>
          </div>
          <div className="footer_socials">
            <Icon img={FACEBOOK} />
            <Icon img={INSTAGRAM} />
            <Icon img={TWITTER} />
            <Icon img={YOUTUBE} />
          </div>
        </div>

        <div className="copyright flex">
          <img src={COPYRIGHT} alt="" />
          <span>Copyright 2020 Dosh Services. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
