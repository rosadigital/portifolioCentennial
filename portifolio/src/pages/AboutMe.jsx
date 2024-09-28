import React from 'react';
import NavBar from '../components/NavBar';
import profilePhoto from '../assets/img_profileAbout.jpg';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <>
      <NavBar />
      <section className="container-about">
        <h1 className="title-about">Felipe Rosa – Software Developer & Product Manager</h1>
        <div className="grid-container-about">
          <div className="grid-item-about">
            <header className="header-about">
              <h2 className="section-title-about">About Me</h2>
              <p className="text-about">
                With over a decade of experience, I am a passionate "Software Developer" and "Product Manager" skilled in transforming
                business challenges into tech solutions. My expertise spans across "full-stack development", "cloud services", and "AI integration".
              </p>
              <a
                href="src/assets/FelipeRosaDeveloperAI2024.pdf"
                className="button-about"
                target="_blank"
                download="FelipeRosaDeveloperAI2024.pdf" 
              >
                Download My Full Resume
              </a>
            </header>
          </div>

          <div className="grid-item-about">
            <div className="image-container-about">
              <img src={profilePhoto} alt="Felipe Rosa" className="profile-photo-about" />
            </div>
          </div>
        </div>
      </section>

      <section className="achievements-box-about">
        <h2 className="achievements-title-about">Key Achievements</h2>
        <p className="text-about">- Successfully led the development of "130+ digital transformation applications".</p>
        <p className="text-about">- Designed and launched "MCS Tools", a platform for automating routines (RPAs).</p>
        <p className="text-about">- Led the development of "Nossa Intranet", optimizing project and financial management.</p>
        <p className="text-about">- Spearheaded the creation of "Nosso Tools", the first SaaS product for tax automation.</p>
      </section>
    </>
  );
};

export default AboutMe;

