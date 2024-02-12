import React from "react";
import Button from "../Common/Button";

const Form = () => {
  return (
    <div className="form_container">
      <h3>Lets Collaborate</h3>
      <p>Tell us about your project and lets work our magic</p>
      <div className="input_group">
        <label htmlFor="Email">Email</label>
        <input type="text" />
      </div>
      <div className="input_group">
        <label htmlFor="name">Full Name</label>
        <input type="text" />
      </div>
      <div className="input_group">
        <label htmlFor="message">Messages</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <Button title="Send" />
    </div>
  );
};

export default Form;
