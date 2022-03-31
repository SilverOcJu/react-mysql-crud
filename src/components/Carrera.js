import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Components
import NavigationBar from './NavigationBar';
//Axios
import axios from "axios";

const Carrera = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:80/api/carreras/save', inputs)
    console.log(inputs);
  }
return (
  <Box>
    <NavigationBar />
    <Box sx={{
      display: 'inline-flex',
      flexDirection: 'column',
      m: 5,
      p: 5
    }}>
      <TextField sx={{m:1}} id="CAR_ID" label="CAR_ID" name="CAR_ID" onChange={handleChange}/>
      <TextField sx={{m:1}} id="CAR_NOMBRE_CARRERA" label="CAR_NOMBRE_CARRERA" name="CAR_NOMBRE_CARRERA" onChange={handleChange}/>
      <Button sx={{m:1}} variant="outlined" onClick={handleSubmit}>Guardar</Button> 
    </Box>
  </Box>
  )
}

export default Carrera
