import React from 'react';
import emailjs from 'emailjs-com';

//CSS import
import "../css/components/Contact.css";

const Contact = () => {
    
      const sendEmail =(e)=> {
        e.preventDefault();
        console.log(process.env)
        emailjs.sendForm('service_rjcqkrf', 'portfolio_template', e.target, process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    
      return (
        <div id='contact' className= "contact-div">
        <h3 className="center-align">Contact Me</h3>
        <form className="contact-form text-white" onSubmit={sendEmail}>
          <input className="contact-input" type="hidden" name="contact_number" />
          <label className="contact-label">Name</label>
          <input type="text" name="from_name" />
          <label className="contact-label">Email</label>
          <input className="contact-input"type="email" name="from_email" />
          <label className="contact-label">Message</label>
          <textarea name="message" />
          <input className="send-button contact-input btn" type="submit" value="Send" />
        </form>
        </div>
      );


}

export default Contact;