import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/alumnos")}>Alumnos</Button>
          <Button color="inherit" onClick={() => navigate("/carrera")}>Carrera</Button>
          <Button color="inherit" onClick={() => navigate("/Escuela")}>Escuela</Button>
          <Button color="inherit" onClick={() => navigate("/Grupo")}>Grupo</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavigationBar
