import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/ContactMe.css';

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="container-contact">
        <h2 className="title-contact">
          Let’s Get in Touch!
        </h2>
        <p className="subtitle-contact">
          I’m available for freelance work, collaboration, or just a chat about the latest in tech.
        </p>
        <div className="grid-container-contact">
          <div className="grid-item-contact">
            <form>
              <input
                type="text"
                placeholder="First Name"
                className="form-field-contact"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-field-contact"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="form-field-contact"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="form-field-contact"
              />
              <textarea
                placeholder="Message"
                className="form-field-contact"
                rows="4"
              ></textarea>
              <button 
                type="submit" 
                className="form-button-contact"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="grid-item-contact">
            <div className="contact-info-contact">
              <h3 className="contact-title-contact">Contact Information</h3>
              <p className="contact-text-contact">
                <strong>Email:</strong> familiafkrosa@gmail.com
              </p>
              <p className="contact-text-contact">
                <strong>Phone:</strong> +1 437-255-1774
              </p>
              <p className="contact-text-contact">
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/felipe-rosa/" className="contact-link-contact">LinkedIn Profile</a>
              </p>
              <p className="contact-text-contact">
                <strong>GitHub:</strong> <a href="https://github.com/rosadigital" className="contact-link-contact">GitHub Profile</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
