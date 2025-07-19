import './contact.css';
import linkedinIcon from '../../assets/linkedin.png';
import instagramIcon from '../../assets/instagram.png';
import githubIcon from '../../assets/github.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_nncrzsp',      //  Your EmailJS service ID
      'template_m5bs3o9',     //  Your template ID
      form.current,
      'qnujvwVsD-lZhFrhc'     //  Your public API key
    ).then(
      (result) => {
        console.log(result.text);
        alert("✅ Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.error(error.text);
        alert("❌ Failed to send message.");
      }
    );
  };

  return (
    <div id='contactPage'>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your name' name='name' required />
          <input type="email" className="email" placeholder='Your Email' name='email' required />
          <textarea name="message" placeholder='Your Message' rows={5} className='msg' required></textarea>
          <input type="hidden" name="time" value={new Date().toLocaleString()} />
          <input type="hidden" name="title" value="New Message From Portfolio Site" />
          <button type="submit" className='submitBtn'>Submit</button>
        </form>

        <div className="links">
          <a href="https://www.linkedin.com/in/kushagrapareek/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="link" />
          </a>
          <a href="https://www.instagram.com/kushagraapareek/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="link" />
          </a>
          <a href="https://github.com/7Kushagra" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;