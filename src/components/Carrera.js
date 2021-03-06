import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Navigation
import { useNavigate } from 'react-router-dom';
// Components
import NavigationBar from './NavigationBar';
//Axios
import axios from "axios";

const Carrera = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:80/api/carreras/save', inputs).then(function (response) {
      console.log(response.data);
      navigate("/carreraConsulta");

    });
    console.log(inputs);
  }
return (
  <Box>
    <NavigationBar />
    <Box sx={{
      display: 'inline-flex',
      flexDirection: 'column',
      m: 2,
      p: 2
    }}>
      <Typography variant="h5">Insertar una nueva carrera</Typography>
      <TextField sx={{m:1}} id="CAR_ID" label="CAR_ID" name="CAR_ID" onChange={handleChange}/>
      <TextField sx={{m:1}} id="CAR_NOMBRE_CARRERA" label="CAR_NOMBRE_CARRERA" name="CAR_NOMBRE_CARRERA" onChange={handleChange}/>
      <Button sx={{m:1}} variant="outlined" onClick={handleSubmit}>Guardar</Button> 
      <Button sx={{m:1}} variant="outlined" color="secondary" onClick={ () => navigate("/carreraConsulta")}>Ir a la tabla</Button> 
    </Box>
  </Box>
  )
}

export default Carrera
