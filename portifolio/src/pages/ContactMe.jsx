import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/ContactMe.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Captured form data:', formData);

    navigate('/');
  };

  return (
    <>
      <NavBar />
      <Header title={'Let’s Get in Touch!'} subtitle={'I’m available for freelance work, collaboration, or just a chat about the latest in tech.'}/>
      <section className="container-contactme">
        <div className="grid-container-contactme">
          <div className="grid-item-contactme">
            <form className="form-contactme" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-field-contactme"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-field-contactme"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                className="form-field-contactme"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="form-field-contactme"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="form-field-contactme"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="form-button-contactme">
                Send Message
              </button>
            </form>
          </div>
          <div className="grid-item-contactme">
            <div className="contact-info-contactme">
              <h3 className="contact-title-contactme">Contact Information</h3>
              <p className="contact-text-contactme">
                <strong>Email:</strong> familiafkrosa@gmail.com
              </p>
              <p className="contact-text-contactme">
                <strong>Phone:</strong> +1 437-255-1774
              </p>
              <p className="contact-text-contactme">
                <strong>LinkedIn:</strong>{' '}
                <a href="https://www.linkedin.com/in/felipe-rosa/" className="contact-link-contactme">
                  LinkedIn Profile
                </a>
              </p>
              <p className="contact-text-contactme">
                <strong>GitHub:</strong>{' '}
                <a href="https://github.com/rosadigital" className="contact-link-contactme">
                  GitHub Profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer /> 

    </>
  );
};

export default Contact;
