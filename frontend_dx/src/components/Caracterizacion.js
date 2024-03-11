import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    MDBValidation,
    MDBInputGroup,
    MDBValidationItem,
    MDBInput,
    MDBTypography,
    MDBBtn
} from 'mdb-react-ui-kit';
import Navigation from "./Navigation";
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import UpdateFlotaVehiculosModal from "./UpdateFlotaVehiculosModal";
import { getVehiculos } from '../services/FlotaVehiculosService';
import { Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';

const Caracterizacion = () => {
    const [vehiculos, setVehiculos] = useState([]);
    const [data, setData] = useState([]);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editVehiculos, setEditVehiculos] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (vehiculos.length && !isUpdated) {
            return;
        }
        getVehiculos()
            .then(data => {
                if (mounted) {
                    setVehiculos(data);
                }
            })
        return () => {
            mounted = false;
            setIsUpdated(false);
        }
    }, [isUpdated, vehiculos])

    const handleUpdate = (e, data) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditVehiculos(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/flota_vehiculos/1/');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    let EditModelClose = () => setEditModalShow(false);

    const transposeData = () => {
        var total_vehiculos_propios = parseInt(data.numero_motocicletas_patinetas_propios) + parseInt(data.numero_vehiculos_livianos_propios) + parseInt(data.numero_vehiculos_pesados_propios) + parseInt(data.numero_vehiculos_furgon_propios) + parseInt(data.numero_vehiculos_carga_propios) + parseInt(data.numero_maquinaria_amarilla_propios,) + parseInt(data.numero_vehiculos_no_automotores_propios);

        var total_vehiculos_terceros = parseInt(data.numero_motocicletas_patinetas_terceros) + parseInt(data.numero_vehiculos_pesados_terceros) + parseInt(data.numero_vehiculos_furgon_terceros) + parseInt(data.numero_vehiculos_carga_terceros) + parseInt(data.numero_maquinaria_amarilla_terceros) + parseInt(data.numero_vehiculos_no_automotores_terceros);


        var total_vehiculos_caracterizacion = parseInt(data.numero_motocicletas_patinetas_propios) + parseInt(data.numero_motocicletas_patinetas_terceros) + parseInt(data.numero_vehiculos_livianos_propios) + parseInt(data.numero_vehiculos_livianos_terceros) + parseInt(data.numero_vehiculos_pesados_propios) + parseInt(data.numero_vehiculos_pesados_terceros) + parseInt(data.numero_vehiculos_furgon_propios) + parseInt(data.numero_vehiculos_furgon_terceros) + parseInt(data.numero_vehiculos_carga_propios) + parseInt(data.numero_vehiculos_carga_terceros) + parseInt(data.numero_maquinaria_amarilla_propios,) + parseInt(data.numero_maquinaria_amarilla_terceros) + parseInt(data.numero_vehiculos_no_automotores_propios) + parseInt(data.numero_vehiculos_no_automotores_terceros);
        return [
            { campo: 'Número de motocicletas, patinetas', valor: data.numero_motocicletas_patinetas_propios, valor1: data.numero_motocicletas_patinetas_terceros },
            { campo: 'Número de vehículos livianos (automóvil, camioneta, servicio técnico, camiones)', valor: data.numero_vehiculos_livianos_propios, valor1: data.numero_vehiculos_livianos_terceros },
            { campo: 'Número de vehículos pesados', valor: data.numero_vehiculos_pesados_propios, valor1: data.numero_vehiculos_pesados_terceros },
            { campo: 'Número de vehículos furgón', valor: data.numero_vehiculos_furgon_propios, valor1: data.numero_vehiculos_furgon_terceros },
            { campo: 'Número de vehículos de carga (camiones, volquetas, tractocamiones, camabajas)', valor: data.numero_vehiculos_carga_propios, valor1: data.numero_vehiculos_carga_terceros },
            { campo: 'Número de maquinaria amarilla (Manlift, tijeras y Octupus)', valor: data.numero_maquinaria_amarilla_propios, valor1: data.numero_maquinaria_amarilla_terceros },
            { campo: 'Número de vehículos no automotores (bicicletas, triciclo o similares)', valor: data.numero_vehiculos_no_automotores_propios, valor1: data.numero_vehiculos_no_automotores_terceros },
            { campo: 'TOTAL VEHÍCULOS', valor1: total_vehiculos_caracterizacion },
        ];
    };

    const customStyles = {
        rows: {
            style: {
                minHeight: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
            },
        },
        headRow: {
            style: {
                backgroundColor: '#0066b2',
                color: 'white',
                minHeight: '52px',
                borderBottomWidth: '1px',
                borderBottomColor: '#000000',
                borderBottomStyle: 'solid',
                fontSize: '12px',
                fontWeight: 800,
            },
            denseStyle: {
                minHeight: '32px',
            },
        },
    };

    const columns_vehiculos = [
        {
            name: 'FLOTA DE VEHICULOS AUTOMOTORES',
            selector: row => row.campo,
            sortable: true,
        },
        {
            name: 'CANTIDAD PROPIOS',
            selector: row => row.valor,
            sortable: true,
            editable: true,
            center: true,
        },
        {
            name: 'CANTIDAD TERCEROS (Arrendados, contratistas, intermediación, leasing, renting)',
            selector: row => row.valor1,
            sortable: true,
            editable: true,
            center: true,
        },
        {
            name: 'ACCIONES',
            cell: (row) => (
                <div>
                    <Button className="mr-2"
                        onClick={event => handleUpdate(event, data)}>
                        <FaEdit />
                    </Button>
                    <UpdateFlotaVehiculosModal show={editModalShow} vehiculos={editVehiculos} setUpdated={setIsUpdated} onHide={EditModelClose}></UpdateFlotaVehiculosModal>
                </div>
            ),
            center: true,
        },
    ];

    const transposedDataVehiculos = transposeData();

    const columns_personas = [
        {
            name: 'PERSONAS QUE CONDUCEN CON FINES MISIONALES',
            selector: row => row.item,
        },
        {
            name: 'CANTIDAD',
            selector: row => row.cantidad_personas,
        },
    ];

    const data_personas = [
        {
            id: 1,
            item: 'Cantidad de trabajadores directos contratados en el cargo de conductores',
            cantidad_personas: '3',
        },
        {
            id: 2,
            item: 'Cantidad de trabajadores administrativos, directivos, operativos o de apoyo que conducen para fines misionales',
            cantidad_personas: '2',
        },
        {
            id: 3,
            item: 'Cantidad de contratistas y/o afiliados que conducen para cumplir su contrato con la empresa',
            cantidad_personas: '0',
        },
        {
            id: 4,
            item: 'Cantidad de personal vinculado mediante tercerización, Subcontratación, outsourcing o intermediación laboral que conduce para desarrollar sus funciones',
            cantidad_personas: '0',
        },
        {
            id: 5,
            item: 'Otros conductores que conducen para desarrollar sus funciones contratadas',
            cantidad_personas: '0',
        },
    ];

    const [formValue, setFormValue] = useState({
        fdate: '10 de octubre de 2023',
        fempresa: 'Hseq sas',
        fnit: '900767160-7',
        factividad: 'Servicios',
        ftamano_empresa: '50 trabajadores',
        fsegmento: 'Servicios',
        fcontacto_cargo: 'Ejemplo - Cargo',
        fcertificaciones: 'Ninguna',
    });

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Navigation />
            <div class="content padding-content">
                <div className="text-center my-3">
                    <MDBTypography className='fw-bold' variant='h1'>Diagnóstico del Plan Estrategico de Seguridad Vial</MDBTypography>
                    <hr className="hr" />
                    <MDBTypography className='fw-bold' variant='h3'>Caracterización de la empresa</MDBTypography>
                </div>
                <div>
                    <MDBValidation className='row g-3'>
                        <MDBValidationItem className='col-md-4 fw-bold'>
                            <MDBInput
                                value={formValue.fdate}
                                name='fdate'
                                onChange={onChange}
                                id='validationCustom01'
                                required
                                label='Fecha de elaboración del diagnóstico'
                                className='border border-secondary'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem className='col-md-4 fw-bold'>
                            <MDBInput
                                value={formValue.fempresa}
                                name='fempresa'
                                onChange={onChange}
                                id='validationCustom02'
                                required
                                label='Empresa'
                                className='border border-secondary'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4 fw-bold '>
                            <MDBInput
                                value={formValue.fnit}
                                name='fnit'
                                onChange={onChange}
                                id='validationCustom02'
                                required
                                label='Nit'
                                className='border border-secondary'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem className='col-md-6 fw-bold' feedback='Please provide a valid city.' invalid>
                            <MDBInput
                                value={formValue.factividad}
                                name='factividad'
                                onChange={onChange}
                                id='validationCustom03'
                                required
                                label='Actividades que realiza'
                                className='border border-secondary'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem className='col-md-6 fw-bold' feedback='Please provide a valid zip.' invalid>
                            <MDBInput
                                value={formValue.ftamano_empresa}
                                name='ftamano_empresa'
                                onChange={onChange}
                                id='validationCustom05'
                                required
                                label='Tamaño de la empresa'
                                className='border border-secondary'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem className='col-md-6 fw-bold' feedback='Please provide a valid zip.' invalid>
                            <MDBInput
                                value={formValue.fsegmento}
                                name='fsegmento'
                                onChange={onChange}
                                id='validationCustom05'
                                required
                                label='Segmento al que pertenece'
                                className='border border-secondary'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem className='col-md-6 fw-bold' feedback='Please provide a valid zip.' invalid>
                            <MDBInput
                                value={formValue.fcontacto_cargo}
                                name='fcontacto_cargo'
                                onChange={onChange}
                                id='validationCustom05'
                                required
                                label='Contacto y cargo'
                                className='border border-secondary'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem className='col-md-6 fw-bold' feedback='Please provide a valid zip.' invalid>
                            <MDBInput
                                value={formValue.fcertificaciones}
                                name='fcertificaciones'
                                onChange={onChange}
                                id='validationCustom05'
                                required
                                label='Certificaciones adquiridas (Normas ISO)'
                                className='border border-secondary'
                            />
                        </MDBValidationItem>
                    </MDBValidation>
                </div>
                <div className="text-center my-3 pb-1">
                    <hr className="hr" />
                    <MDBTypography className='fw-bold' variant='h3'>Flota de vehículos</MDBTypography>
                </div>
                <div>
                    <label htmlFor='number-motocicletas-propios' className='form-label fw-bold'>
                        Número de motocicletas, patinetas:
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-motocicletas-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>

                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-motocicletas-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                    <hr />
                    <label htmlFor='number-livianos-propios' className='form-label fw-bold'>
                        Número de vehículos livianos (automóvil, camioneta, servicio técnico, camiones):
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-livianos-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>

                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-livianos-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                    <hr />
                    <label htmlFor='number-pesados-propios' className='form-label fw-bold'>
                        Número de vehículos pesados:
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-pesados-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>

                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-pesados-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                    <hr />
                    <label htmlFor='number-furgon-propios' className='form-label fw-bold'>
                        Número de vehículos furgón:
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-furgon-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>

                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-furgon-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                    <hr />
                    <label htmlFor='number-carga-propios' className='form-label fw-bold'>
                        Número de vehículos de carga (camiones, volquetas, tractocamiones, camabajas):
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-carga-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>

                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-carga-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                    <hr />
                    <label htmlFor='number-amarilla-propios' className='form-label fw-bold'>
                        Número de maquinaria amarilla (Manlift, tijeras y Octupus):
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-amarilla-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>

                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-amarilla-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                    <hr />
                    <label htmlFor='number-no-automores-propios' className='form-label fw-bold'>
                        Número de vehículos no automotores (bicicletas, triciclo o similares):
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-no-automores-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-no-automores-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                </div>
                {/* <div className="card my-2">
                    <DataTable
                        columns={columns_vehiculos}
                        data={transposedDataVehiculos}
                        customStyles={customStyles}
                        responsive={true}
                        noHeader
                        editable={{
                            onRowUpdate: async (newData, oldData) => {
                            },
                        }}
                    />
                </div> */}
                <div className="text-center my-3 pb-1">
                    <hr className="hr" />
                    <MDBTypography className='fw-bold' variant='h3'>Personas que conducen</MDBTypography>
                </div>
                <div>
                    <label htmlFor='number-no-automores-propios' className='form-label fw-bold'>
                        Cantidad de trabajadores directos contratados en el cargo de conductores
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-no-automores-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-no-automores-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                    <hr />
                    <label htmlFor='number-no-automores-propios' className='form-label fw-bold'>
                        Cantidad de trabajadores administrativos, directivos, operativos o de apoyo que conducen para fines misionales
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-no-automores-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-no-automores-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                    <hr />
                    <label htmlFor='number-no-automores-propios' className='form-label fw-bold'>
                        Cantidad de contratistas y/o afiliados que conducen para cumplir su contrato con la empresa
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-no-automores-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-no-automores-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                    <hr />
                    <label htmlFor='number-no-automores-propios' className='form-label fw-bold'>
                        Cantidad de personal vinculado mediante tercerización, Subcontratación, outsourcing o intermediación laboral que conduce para desarrollar sus funciones
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-no-automores-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-no-automores-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                    <hr />
                    <label htmlFor='number-no-automores-propios' className='form-label fw-bold'>
                        Otros conductores que conducen para desarrollar sus funciones contratadas
                    </label>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos propios'>
                        <input className='form-control' id='number-no-automores-propios' type='text' placeholder="Digite el número de vehículos propios..." />
                    </MDBInputGroup>
                    <MDBInputGroup className='mb-3' textBefore='Vehículos terceros'>
                        <input className='form-control' id='number-no-automores-terceros' type='text' placeholder="Digite el número de vehículos terceros (Arrendados, contratistas, intermediación, leasing, renting)..." />
                    </MDBInputGroup>
                </div>
                {/* <div className="card my-2">
                    <DataTable
                        columns={columns_personas}
                        data={data_personas}
                        customStyles={customStyles}
                        responsive={true}
                    />
                </div> */}
                <div>
                    <div className="text-center my-3 pb-1">
                        <hr className="hr" />
                        <MDBTypography className='fw-bold text-center' variant='h4'>Resumen grupos PESV en función de la misionalidad y tamaño de la organización</MDBTypography>
                    </div>
                    <table class="table table-bordered border-primary card">
                        <thead>
                            <tr>
                                <th scope="col" colspan="2" rowspan="2" className='text-center color-corporativo'>NIVEL DE DISEÑO E IMPLEMENTACIÓN DEL PESV</th>
                                <th scope="col" colspan="2" rowspan="" className='text-center color-corporativo'>MISIONALIDAD DE LA ORGANIZACIÓN</th>
                            </tr>
                            <tr>
                                <th scope="col" colspan="" rowspan="" className='text-center color-corporativo'>1. EMPRESAS DEDICADAS A LA PRESTACIÓN DEL SERVICIO DE TRANSPORTE TERRESTRE AUTOMOTOR</th>
                                <th scope="col" colspan="" rowspan="" className='text-center color-corporativo'>2. ORGANIZACIONES DEDICADAS A ACTIVIDAD DIFERENTE AL TRANSPORTE</th>
                            </tr>
                            <tr>
                                <th scope="row" colspan="" rowspan="3" className='text-center color-corporativo'>TAMAÑO DE LA ORGANIZACIÓN</th>
                                <td className='text-center fw-bold color-corporativo'>1. BÁSICO</td>
                                <td>Entre 11 y 19 vehículos o entre 2 y 19 conductores.</td>
                                <td>Entre 11 y 49 vehículos o entre 2 y 49 conductores.</td>
                            </tr>
                            <tr>
                                <td className='text-center fw-bold color-corporativo'>2. ESTÁNDAR</td>
                                <td>Entre 20 y 50 vehículos o entre 20 y 50 conductores.</td>
                                <td>Entre 50 y 100 vehículos o entre 50 y 100 conductores.</td>
                            </tr>
                            <tr>
                                <td className='text-center fw-bold color-corporativo'>3. AVANZADO</td>
                                <td>Más de 50 vehículos o más de 50 conductores.</td>
                                <td>Más de 100 vehículos o más de 100 conductores.</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="text-center my-3">
                    <Link to={'/fase1'}><MDBBtn className='mx-2' tag='input' href="" value='Continuar...' /></Link>
                </div>
            </div >
        </>
    );
};

export default Caracterizacion;