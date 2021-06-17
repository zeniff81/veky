import React from "react";
import ContactEmail from "./ContactEmail";
import OtherChannels from "./Channels";
import OurAgents from "./OurAgents";

function Contact() {
  return (
    <div className='contact'>
      <OtherChannels />
      <OurAgents />
      <ContactEmail />
    </div>
  );
}

export default Contact;
