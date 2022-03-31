import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavigationBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link to="/alumnos">Alumnos</Link>
          <Link to="/carrera">Carrera</Link>
          <Link to="/escuela">Escuela</Link>
          <Link to="/grupo">Grupo</Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavigationBar
