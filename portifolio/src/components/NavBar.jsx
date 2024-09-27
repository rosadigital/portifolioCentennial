import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Meu Portfólio
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            Sobre Mim
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projetos
          </Button>
          <Button color="inherit" component={Link} to="/services">
            Serviços
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contato
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
