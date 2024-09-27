import React from 'react';
import NavBar from '../components/NavBar';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import profilePhoto from '../assets/img_profileHOme.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <NavBar />
      
      <Container className="container">
        <Grid container spacing={6} alignItems="center" className="grid-container">
          
          <Grid item xs={12} md={6}>
            <Box>
              <Typography 
                variant="h3" 
                gutterBottom 
                className={`headline ${window.innerWidth >= 960 ? 'headline-md' : ''}`}
              >
                Hi, I’m Felipe Rosa – Software Developer
              </Typography>
              <Typography 
                variant="h5" 
                gutterBottom 
                className={`subheadline ${window.innerWidth >= 960 ? 'subheadline-md' : ''}`}
              >
                Building innovative software solutions and delivering results through modern technologies.
              </Typography>
              <Box className="button-container">
                <Button 
                  variant="contained" 
                  color="primary" 
                  href="/about" 
                  className="learn-more-button"
                >
                  Learn More About Me
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  href="/projects"
                  className="explore-projects-button"
                >
                  Explore My Projects
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="profile-photo-container">
              <img 
                src={profilePhoto} 
                alt="Felipe Rosa" 
                className="profile-photo"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box className="welcome-box">
        <Typography 
          variant="h4" 
          gutterBottom 
          className="welcome-title"
        >
          Welcome to My Portfolio
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          className={`welcome-text ${window.innerWidth >= 960 ? 'welcome-text-md' : ''}`}
        >
          I specialize in backend development, cloud services, and AI-powered applications. 
          Whether you're here to explore my projects or looking to collaborate, I’m excited to connect with you. 
          Discover more about my journey, skills, and the services I offer through the links above.
        </Typography>

        <Typography 
          variant="h5" 
          gutterBottom 
          className="mission-title"
        >
          My Mission
        </Typography>
        <Typography 
          variant="h6" 
          className={`mission-statement ${window.innerWidth >= 960 ? 'mission-statement-md' : ''}`}
        >
          Create software that empowers businesses and enhances user experiences through robust and scalable solutions.
        </Typography>
      </Box>
    </>
  );
};

export default Home;
