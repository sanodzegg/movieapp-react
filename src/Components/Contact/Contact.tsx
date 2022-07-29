import React, { useState } from "react";

import "./Contact.css";
import ContactForm from "./ContactForm/ContactForm";
import EmailSent from "./ContactForm/EmailSent";
import ContactHeading from "./ContactHeading/ContactHeading";

export default function Contact() {

  const [formSent, setFormSent] = useState(false);


  return (
    <div className="contactWrapper">
      {!formSent ? 
        <div className="contactFormWrapper">
            <ContactHeading />
            <ContactForm setFormSent={setFormSent} />
        </div> : <EmailSent />}
    </div>
  );
}
