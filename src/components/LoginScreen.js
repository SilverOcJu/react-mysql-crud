import React from 'react'

// Material UI
import Box from '@mui/material/Box';
import { Typography, TextField, Stack, Button } from '@mui/material';
// Íconos
import { Engineering, Login } from '@mui/icons-material';
// Para trabajar con Rutas
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  const url='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FI%2Fipn-national-polytechnic-institute-logo-C93A7AFE65-seeklogo.com.png&f=1&nofb=1';

  return(
    <Box sx={{ 
      height: '100vh',
      backgroundImage: (theme) =>
        `linear-gradient(to Right Bottom, #009688, ${theme.palette.secondary.dark})`,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
      }}>
    <Box sx={{ 
      mx: 'auto', 
      width: '400px', 
      height: '500px',
      justifyContent: 'center', 
      alignItems: 'center', 
      display: 'flex', 
      flexDirection: 'column',
      borderRadius: '17px',
      bgcolor: 'white'
    }}>
      <Box sx={{ mb: 5 }}>
        <Engineering 
          sx={{ fontSize: 100, color: '#335566' }}
        />
      </Box>
      <Box>
        <Typography variant="h4" align="center" color="#335566">Login</Typography>
        <Typography variant="body1" align="left" component="div" color="#335566">Ingrese sus datos para iniciar sesión</Typography>
      </Box>
      {/* Formulario */}
      <Stack
        component="form"
        spacing={3}
        mt={2}
      >
        <TextField size="small" id="usuario" label="Usuario" variant="outlined" fullWidth />
        <TextField size="small" id="contrasena" label="Contraseña" type="password" variant="outlined" fullWidth />
        <Button
          variant="outlined" 
          fullWidth 
          startIcon={<Login />}
          onClick={() => { navigate("/carrera") }}
        >
          Iniciar sesión
        </Button>
      </Stack>
    </Box>
    </Box>
  ) 
}

export default LoginScreen
