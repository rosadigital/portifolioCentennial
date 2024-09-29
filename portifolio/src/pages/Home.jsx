/**
 * File Name: Home.jsx
 * Student’s Name: Felipe Rosa
 * Student ID: 301415379
 * Date: September 28, 2024
 */
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import profilePhoto from '../assets/img_profileHome.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <NavBar />
      <Header title={''} subtitle={''}/>
      <section className="container-home">
        <div className="grid-container-home">
          <div className="grid-item-home">
          <Header
            title={<h1>Hi, I’m Felipe Rosa<br />Software Developer & Product Manager</h1>}
            subtitle={<h2>Building innovative software solutions and <br></br>delivering results through modern technologies.</h2>}
            />
              <div className="button-container-home">
                <a href="/about" className="learn-more-button-home">Learn More About Me</a>
                <a href="/projects" className="explore-projects-button-home">Explore My Projects</a>
              </div>
          </div>

          <div className="grid-item-home">
            <div className="profile-photo-container-home">
              <img src={profilePhoto} alt="Felipe Rosa" className="profile-photo-home" />
            </div>
          </div>
        </div>
      </section>

      <section className="welcome-box-home">
        <h2 className="welcome-title-home">Welcome to My Portfolio</h2>
        <p className="welcome-text-home">
          I specialize in backend development, cloud services, and AI-powered applications.
          Whether you're here to explore my projects or looking to collaborate, I’m excited to connect with you.
          Discover more about my journey, skills, and the services I offer through the links above.

        </p>

        <h3 className="mission-title-home">My Mission</h3>
        <p className="mission-statement-home">
          Create software that empowers businesses and enhances user experiences through robust and scalable solutions.
        </p>
      </section>

      <Footer /> 

    </>
  );
};

export default Home;



