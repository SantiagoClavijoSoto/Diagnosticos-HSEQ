import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Navigation from "./Navigation";
import { getEmpresas, deleteEmpresa } from '../services/EmpresasService';
import AddEmpresaModal from "./AddEmpresaModal";
import UpdateEmpresaModal from "./UpdateEmpresaModal";
import "../App.css";

const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editEmpresa, setEditEmpresa] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [setMessage] = useState('');

  useEffect(() => {
    let mounted = true;
    if (empresas.length && !isUpdated) {
      return;
    }
    getEmpresas()
      .then(data => {
        if (mounted) {
          setEmpresas(data);
        }
      })
    return () => {
      mounted = false;
      setIsUpdated(false);
    }
  }, [isUpdated, empresas])

  const handleUpdate = (e, stu) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditEmpresa(stu);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
  };

  const handleDelete = (e, id_empresa) => {
    if (window.confirm('¿Está seguro?')) {
      e.preventDefault();
      deleteEmpresa(id_empresa)
        .then((result) => {
          alert(result);
          setIsUpdated(true);
        },
          (error) => {
            alert("No se pudo eliminar la empresa.");
          })
    }
  };

  let AddModelClose = () => setAddModalShow(false);
  let EditModelClose = () => setEditModalShow(false);

  if (localStorage.getItem('access_token') === null) {
    window.location.href = '/'
  }
  else {
    (async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:8000/empresas/', {
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
      <div class="padding-content">
        <p id="before-table"></p>
        <h3 className='title-tables'>Empresas</h3>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable" responsive="sm">
          <thead>
            <tr>
              <th>Id.</th>
              <th>Nombre empresa</th>
              <th>Nit empresa</th>
              <th>Actividades CIIU</th>
              <th>Tamaño empresa</th>
              <th>Correo electrónico</th>
              <th>Segmento perteneciente</th>
              <th>Contacto-cargo</th>
              <th>Certificaciones adquiridas</th>
              <th>Diagnósticos realizados</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empresas.map((stu) =>
              <tr key={stu.id_empresa}>
                <td>{stu.id_empresa}</td>
                <td>{stu.nombre_empresa}</td>
                <td>{stu.nit_empresa}</td>
                <td>{stu.actividades_CIIU}</td>
                <td>{stu.tamano_empresa}</td>
                <td>{stu.correo_electronico}</td>
                <td>{stu.segmento_perteneciente}</td>
                <td>{stu.contacto_cargo}</td>
                <td>{stu.certificaciones_adquiridas}</td>
                <td>{stu.dx_realizados}</td>
                <td>
                  <Button className="mr-2"
                    onClick={event => handleUpdate(event, stu)}>
                    <FaEdit />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button className="mr-2" variant="danger"
                    onClick={event => handleDelete(event, stu.id_empresa)}>
                    <RiDeleteBin5Line />
                  </Button>
                  <UpdateEmpresaModal show={editModalShow} empresas={editEmpresa} setUpdated={setIsUpdated}
                    onHide={EditModelClose}></UpdateEmpresaModal>
                </td>
              </tr>)}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleAdd}>
            Añadir empresa
          </Button>
          <AddEmpresaModal show={addModalShow} setUpdated={setIsUpdated}
            onHide={AddModelClose}></AddEmpresaModal>
        </ButtonToolbar>
      </div>
    </>
  );
};

export default Empresas;