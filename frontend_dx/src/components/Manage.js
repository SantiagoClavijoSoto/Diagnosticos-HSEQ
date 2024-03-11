import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getConsultores, deleteConsultor } from '../services/ConsultorService';
import AddConsultorModal from "./AddConsultorModal";
import UpdateConsultorModal from "./UpdateConsultorModal";
import Navigation from "./Navigation";

const Manage = () => {
    const [consultores, setConsultores] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editConsultor, setEditConsultor] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const [setMessage] = useState('');

    useEffect(() => {
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
    })

    useEffect(() => {
        let mounted = true;
        if (consultores.length && !isUpdated) {
            return;
        }
        getConsultores()
            .then(data => {
                if (mounted) {
                    setConsultores(data);
                }
            })
        return () => {
            mounted = false;
            setIsUpdated(false);
        }
    }, [isUpdated, consultores])

    const handleUpdate = (e, stu) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditConsultor(stu);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };

    const handleDelete = (e, id_consultor) => {
        if (window.confirm('¿Está seguro?')) {
            e.preventDefault();
            deleteConsultor(id_consultor)
                .then((result) => {
                    alert(result);
                    setIsUpdated(true);
                },
                    (error) => {
                        alert("No se pudo eliminar al consultor.");
                    })
        }
    };

    let AddModelClose = () => setAddModalShow(false);
    let EditModelClose = () => setEditModalShow(false);

    return (

        <>
            <Navigation />
            <div className="padding-content">
                <p id="manage"></p>
                <h3 className='title-tables'>Consultores</h3>
                <Table striped bordered hover className="react-bootstrap-table" id="dataTable" responsive="sm">
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
                            <th>Acción</th>
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
                                <td>
                                    <Button className="mr-2"
                                        onClick={event => handleUpdate(event, stu)}>
                                        <FaEdit />
                                    </Button>
                                    <span>&nbsp;&nbsp;&nbsp;</span>
                                    <Button className="mr-2" variant="danger"
                                        onClick={event => handleDelete(event, stu.id_consultor)}>
                                        <RiDeleteBin5Line />
                                    </Button>
                                    <UpdateConsultorModal show={editModalShow} consultores={editConsultor} setUpdated={setIsUpdated}
                                        onHide={EditModelClose}></UpdateConsultorModal>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant="primary" onClick={handleAdd}>
                        Añadir consultor
                    </Button>
                    <AddConsultorModal show={addModalShow} setUpdated={setIsUpdated}
                        onHide={AddModelClose}></AddConsultorModal>
                </ButtonToolbar>
            </div>
        </>
    );
};

export default Manage;