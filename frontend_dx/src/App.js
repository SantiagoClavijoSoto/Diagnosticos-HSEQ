import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Consultores from './components/Consultores';
import Manage from './components/Manage';
import { Login } from "./components/Login";
import { Logout } from './components/Logout';
import Diagnosticos from './components/Diagnosticos';
import Empresas from './components/Empresas';
import PaginaPerfil from './components/Perfil';
import Caracterizacion from './components/Caracterizacion';
import Fase1 from './components/Fase1';
import Fase2 from './components/Fase2';
import Fase3 from './components/Fase3';
import Fase4 from './components/Fase4';
import InformePesv from './components/InformePesv';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/consultores" element={<Consultores />} />
        <Route path="/manage" element={<Manage />} />
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route path="/logout" element={<Logout />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/diagnosticos" element={<Diagnosticos />} />
        <Route path="/perfil" element={<PaginaPerfil />} />
        <Route path="/caracterizacion" element={<Caracterizacion />} />
        <Route path="/fase1" element={<Fase1 />} />
        <Route path="/fase2" element={<Fase2 />} />
        <Route path="/fase3" element={<Fase3 />} />
        <Route path="/fase4" element={<Fase4 />} />
        <Route path="/informepesv" element={<InformePesv />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
