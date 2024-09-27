import React from 'react';
import NavBar from '../components/NavBar';
import profilePhoto from '../assets/img_profileHOme.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <NavBar />

      <div className="container-home">
        <div className="grid-container">
          <div className="grid-item">
            <div>
              <h1 className="headline">
                Hi, I’m Felipe Rosa – Software Developer
              </h1>
              <h2 className="subheadline">
                Building innovative software solutions and delivering results through modern technologies.
              </h2>
              <div className="button-container">
                <a href="/about" className="learn-more-button">
                  Learn More About Me
                </a>
                <a href="/projects" className="explore-projects-button">
                  Explore My Projects
                </a>
              </div>
            </div>
          </div>

          <div className="grid-item">
            <div className="profile-photo-container">
              <img
                src={profilePhoto}
                alt="Felipe Rosa"
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="welcome-box">
        <h2 className="welcome-title">
          Welcome to My Portfolio
        </h2>
        <p className="welcome-text">
          I specialize in backend development, cloud services, and AI-powered applications.
          Whether you're here to explore my projects or looking to collaborate, I’m excited to connect with you.
          Discover more about my journey, skills, and the services I offer through the links above.
        </p>

        <h3 className="mission-title">
          My Mission
        </h3>
        <p className="mission-statement">
          Create software that empowers businesses and enhances user experiences through robust and scalable solutions.
        </p>
      </div>
    </>
  );
};

export default Home;
