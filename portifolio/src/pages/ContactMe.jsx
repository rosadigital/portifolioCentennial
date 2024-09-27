import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/ContactMe.css';

const Contact = () => {
  return (
    <>
      <NavBar />
      <section className="container-contactme">
        <h2 className="title-contactme">Let’s Get in Touch!</h2>
        <p className="subtitle-contactme">
          I’m available for freelance work, collaboration, or just a chat about the latest in tech.
        </p>
        <div className="grid-container-contactme">
          <div className="grid-item-contactme">
            <form className="form-contactme">
              <input type="text" placeholder="First Name" className="form-field-contactme" />
              <input type="text" placeholder="Last Name" className="form-field-contactme" />
              <input type="text" placeholder="Contact Number" className="form-field-contactme" />
              <input type="email" placeholder="Email Address" className="form-field-contactme" />
              <textarea placeholder="Message" className="form-field-contactme" rows="4"></textarea>
              <button type="submit" className="form-button-contactme">Send Message</button>
            </form>
          </div>
          <div className="grid-item-contactme">
            <div className="contact-info-contactme">
              <h3 className="contact-title-contactme">Contact Information</h3>
              <p className="contact-text-contactme"><strong>Email:</strong> familiafkrosa@gmail.com</p>
              <p className="contact-text-contactme"><strong>Phone:</strong> +1 437-255-1774</p>
              <p className="contact-text-contactme"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/felipe-rosa/" className="contact-link-contactme">LinkedIn Profile</a></p>
              <p className="contact-text-contactme"><strong>GitHub:</strong> <a href="https://github.com/rosadigital" className="contact-link-contactme">GitHub Profile</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
