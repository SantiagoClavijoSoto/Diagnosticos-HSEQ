import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Table } from 'react-bootstrap';
import Navigation from "./Navigation";
import { getConsultores } from '../services/ConsultorService';
import "../App.css";

const Consultores = () => {
  const [consultores, setConsultores] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let mounted = true;
    getConsultores()
      .then(data => {
        if (mounted) {
          setConsultores(data)
        }
      })
    return () => mounted = false;
  }, []);

  if (localStorage.getItem('access_token') === null) {
    window.location.href = '/'
  }
  else {
    (async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:8000/manage/', {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        );
        setMessage(data.message);
      } catch (e) {
        console.log('not auth')
      }
    })()
  };

  return (
    <>
      <Navigation />
      <div className="col py-3 padding-content">
        <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-tabe" id="dataTable" responsive="sm">
          <thead>
            <tr>
              <th>Id.</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Cédula</th>
              <th>Correo electrónico</th>
              <th>Último ingreso</th>
              <th>Cargo</th>
              <th>Licencia SST</th>
            </tr>
          </thead>
          <tbody>
            {consultores.map((stu) =>
              <tr key={stu.id_consultor}>
                <td>{stu.id_consultor}</td>
                <td>{stu.nombres}</td>
                <td>{stu.apellidos}</td>
                <td>{stu.numero_cedula}</td>
                <td>{stu.correo_electronico}</td>
                <td>{stu.ultimo_ingreso}</td>
                <td>{stu.cargo}</td>
                <td>{stu.licencia_SST}</td>
              </tr>)}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Consultores;