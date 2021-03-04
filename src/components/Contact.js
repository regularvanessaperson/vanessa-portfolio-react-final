import React from 'react';
import emailjs from 'emailjs-com';

//CSS import
import "../css/components/Contact.css";

const Contact = () => {
    
      const sendEmail =(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return (
        <div id='contact' className= "contact-div">
        <h3 className="center-align">Contact Me</h3>
        <form className="contact-form text-white" onSubmit={sendEmail}>
          <input className="contact-input" type="hidden" name="contact_number" />
          <label className="contact-label">Name</label>
          <input type="text" name="user_name" />
          <label className="contact-label">Email</label>
          <input className="contact-input"type="email" name="user_email" />
          <label className="contact-label">Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" className="send-button contact-input btn"/>
        </form>
        </div>
      );


}

export default Contact;