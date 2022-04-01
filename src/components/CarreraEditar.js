import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Navigation
import { useNavigate, useParams } from 'react-router-dom';
// Components
import NavigationBar from './NavigationBar';
//Axios
import axios from "axios";

const CarreraEditar = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({})

  const {id} = useParams();

  function getCarrera() {
    axios.get(`http://localhost:80/api/carreras/${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  };

  useEffect(() => {
    getCarrera();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:80/api/carreras/${id}/edit`, inputs).then(function (response) {
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
      <Typography variant="h5">Editar carrera</Typography>
      <TextField sx={{m:1}} id="CAR_ID" name="CAR_ID" value={inputs.CAR_ID} onChange={handleChange}/>
      <TextField sx={{m:1}} id="CAR_NOMBRE_CARRERA" name="CAR_NOMBRE_CARRERA" value={inputs.CAR_NOMBRE_CARRERA} onChange={handleChange}/>
      <Button sx={{m:1}} variant="outlined" onClick={handleSubmit}>Guardar</Button> 
      <Button sx={{m:1}} variant="outlined" color="secondary" onClick={ () => navigate("/carreraConsulta")}>Ir a la tabla</Button> 
    </Box>
  </Box>
  ) 
}

export default CarreraEditar
