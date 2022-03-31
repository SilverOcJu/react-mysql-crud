import React from 'react';
// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import LoginScreen from '../components/LoginScreen';
import Tables from '../components/Tables';
import Alumnos from '../components/Alumnos';
import Carrera from '../components/Carrera';
import Escuela from '../components/Escuela';
import Grupo from '../components/Grupo';

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/tablas" element={<Tables />} />
        <Route exact path="/alumnos" element={<Alumnos />} />
        <Route exact path="/carrera" element={<Carrera />} />
        <Route exact path="/escuela" element={<Escuela />} />
        <Route exact path="/grupo" element={<Grupo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router 
