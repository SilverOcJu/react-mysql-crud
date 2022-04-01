// React
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// Navigation
import { useNavigate } from 'react-router-dom';
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// Componentes
import NavigationBar from './NavigationBar';
// Axios
import axios from 'axios';

const CarreraConsulta = () => {
  const navigate = useNavigate();
  const [carreras, setCarreras] = useState([]);

  function getCarreras() {
    axios.get('http://localhost:80/api/carrera/').then(function (response) {
      console.log(response.data);
      setCarreras(response.data);
    });
  };

  const deleteCarrera = (id) => {
    axios.delete(`http://localhost:80/api/carreras/${id}/delete`).then(function(response){
      console.log(response.data);
      getCarreras();
    })
  }

  useEffect(() => {
    getCarreras();
  }, []);

  return (
    <Box>
      <NavigationBar />
      <Box sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          m: 5,
          p: 5
      }}>
        <Typography variant="h5">Lista de carreras</Typography>
        <Button sx={{ m: 4 }} variant="outlined" color="secondary" onClick={() => navigate('/carrera')}>IR A INSERTAR</Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="tabla de carreras">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="right">CAR_ID</TableCell>
                <TableCell align="right">CAR_NOMBRE_CARRERA</TableCell>
                <TableCell align="center">Editar</TableCell>
                <TableCell align="center">Eliminar</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {carreras.map((carrera) => (
                <TableRow
                  key={carrera.CAR_ID}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{carrera.id}</TableCell>
                  <TableCell align="right">{carrera.CAR_ID}</TableCell>
                  <TableCell align="right">{carrera.CAR_NOMBRE_CARRERA}</TableCell>
                  <TableCell align="right"><Button onClick={() => navigate(`/carrera/${carrera.id}/edit`)}>EDITAR</Button></TableCell>
                  <TableCell align="right"><Button color="error" onClick={() => deleteCarrera(carrera.id)}>ELIMINAR</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  ) 
}

export default CarreraConsulta
