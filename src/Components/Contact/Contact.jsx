import React from "react";
import Form from "./Form"
import CONTACTIMG from "/images/ContactUs.png";
import  EMAIL  from "/images/EmailIcon.png";
import LOCATION from "/images/Location.png";
import PHONE from "/images/Phone.png";
import  "./Contact.css";


const Contact = () => {
  return (
    <section className="padding">
      <div className="contact flex">
        <div className="contact_left flex">
          <img src={CONTACTIMG} alt="" />
          
          <div className="contact_address flex">
            <p>You can also reach us at</p>
            <span>
              <img src={EMAIL} alt="" className="email_icon" />
              info@doshservices.com
            </span>
            <span className="border">
              <img src={LOCATION} alt="" className="location_icon" />
              54, Moleye street, Alagomeji, Yaba, Lagos State
            </span>
            <span>
              <img src={PHONE} alt="" className="phone_icon" />
              +234 809 454 3296
            </span>
          </div>
        </div>
        <div className="contact_right">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
