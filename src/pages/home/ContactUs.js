import React from "react";
import ContactEmail from "./ContactEmail";
import OtherChannels from "./Channels";
import OurAgents from "./OurAgents";

function ContactUs() {
  return (
    <div className='contactus'>
      <h1>Contáctenos</h1>
      <OtherChannels />
      <OurAgents />
      <ContactEmail />
    </div>
  );
}

export default ContactUs;
