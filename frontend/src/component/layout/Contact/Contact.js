import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:priyanksinha63@gmail.com">
        <Button>Contact: priyanksinha63@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
