import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    MDBTypography,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
    MDBPopover,
    MDBPopoverBody,
    MDBPopoverHeader
} from 'mdb-react-ui-kit';
import Navigation from "./Navigation";
import DataTable from 'react-data-table-component';

const Fase1 = () => {

    const [combinedData, setCombinedData] = useState([]);
    const [selectedPaso, setSelectedPaso] = useState(null);


    const CustomDropdown = ({ row, updateValueObtenido }) => {

        const handleChange = (e) => {
            const newValue = e.target.value;
            updateValueObtenido(row.id, newValue, row.valor_variable);
            console.log(`Nivel de cumplimiento ${row.id}: ${newValue}`);
        };

        useEffect(() => {
        }, [row.rol]);

        return (
            <select onChange={handleChange} value={row.rol}>
                <option value="">Seleccione una opción</option>
                <option value="cumple">Cumple</option>
                <option value="cumpleParcialmente">Cumple parcialmente</option>
                <option value="noCumple">No cumple</option>
            </select>
        );
    };

    const updateValueObtenido = (rowId, newValue, valorVariable) => {
        setCombinedData(prevData => {
            const newData = prevData.map(row => {
                if (row.id === rowId) {
                    var porcentaje = 0;
                    switch (newValue) {
                        case 'cumple':
                            var porcentaje = valorVariable + '%';
                            break;
                        case 'cumpleParcialmente':
                            porcentaje = (valorVariable / 2) + '%';
                            break;
                        case 'noCumple':
                            porcentaje = 0 + '%';
                            break;
                        default:
                            porcentaje = '';
                    }
                    return { ...row, valor_obtenido1: porcentaje, rol: newValue };
                }
                return row;
            });
            return newData;
        });
    };

    const fetchDataFase1 = async () => {
        try {
            const responseMySQL = await axios.get('http://localhost:8000/fases/1/');
            const responseMongoDB = await axios.get('http://localhost:8000/obtener_fase1/');
            console.log(responseMongoDB.data);
            const combinedData = mergeData(responseMySQL.data, responseMongoDB.data);
            setCombinedData(combinedData);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    //Terminar de conectar mysql y mongoDB
    const mergeData = (dataMySQL, dataMongoDB) => {
        let combinedData = [];

        // Mapear datos de MySQL
        combinedData = dataMySQL.map(item => ({ ...item, source: 'MySQL' }));

        // Verificar si hay datos de MongoDB y combinar con datos de MySQL
        if (typeof dataMongoDB === 'object' && dataMongoDB !== null && !Array.isArray(dataMongoDB)) {
            // Si dataMongoDB es un objeto y no un array, agregamos paso a cada objeto de combinedData
            combinedData = combinedData.map(row => ({
                ...row,
                paso: dataMongoDB.paso, // Aquí seleccionamos el paso del documento en MongoDB
                descripcion: dataMongoDB.descripcion,
                source: 'MongoDB'
            }));
        } else if (Array.isArray(dataMongoDB)) {
            // Si dataMongoDB es un array, entonces hacemos la búsqueda como antes
            combinedData = combinedData.map(row => {
                const mongoDBRow = dataMongoDB.find(item => item._id.$oid === row._id);
                if (mongoDBRow) {
                    return { ...row, paso: mongoDBRow.paso, descripcion: mongoDBRow.descripcion, source: 'MongoDB' };
                }
                return row;
            });
        } else {
            console.error('Los datos de MongoDB no están en el formato esperado');
        }

        return combinedData;
    };
    
    useEffect(() => {
        fetchDataFase1();
    }, []);

    const customStyles = {
        rows: {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        cells: {
            style: {
                paddingLeft: '6px',
                paddingRight: '6px',
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

    const columns_pesv = [
        {
            name: 'Ítem',
            selector: row => row.item_pesv,
            wrap: true,
            maxWidth: '10px',
            center: true,
        },
        {
            name: 'Ciclo (PHVA)',
            selector: row => row.ciclo,
            wrap: true,
            maxWidth: '10px',
            center: true,
        },
        {
            name: 'Paso (PESV)',
            selector: row => row.paso_pesv,
            wrap: true,
            maxWidth: '10px',
            center: true,
        },
        {
            name: 'Requisito',
            selector: row => row.requisito,
            wrap: true,

        },
        {
            name: 'Criterio de verificación',
            selector: row =>
            (
                <>
                    {row.criterio}
                    <MDBPopover>
                        <MDBPopoverHeader>Información sobre el requisito</MDBPopoverHeader>
                        <MDBPopoverBody>{row.paso}</MDBPopoverBody>
                    </MDBPopover>
                </>
            ),
            wrap: true,
            minWidth: '500px',

        },
        {
            name: 'Documento a verificar',
            selector: row => row.documento_verificar,
            wrap: true,
            maxWidth: '10px',
            height: '200px',
            center: true,
        },
        {
            name: 'Nivel de cumplimiento',
            selector: 'rol',
            cell: (row) => <CustomDropdown row={row} updateValueObtenido={updateValueObtenido} />,
            wrap: true,
            minWidth: '50px',
            center: true,
        },
        {
            name: 'Valor de la variable',
            selector: row => row.valor_variable + '%',
            wrap: true,
            maxWidth: '10px',
            center: true,
        },
        {
            name: 'Valor obtenido',
            selector: row => row.valor_obtenido1,
            wrap: true,
            maxWidth: '10px',
            center: true,
        },
        {
            name: 'Observaciones',
            selector: row => row.observaciones,
            wrap: true,
            maxWidth: '10px',
            center: true,
        },
    ];

    return (
        <>
            <Navigation />
            <div className='padding-content'>
                <div className="text-center my-3">
                    <MDBTypography className='fw-bold' variant='h1'>Diagnóstico del Plan Estrategico de Seguridad Vial</MDBTypography>
                    <hr className="hr z-n1 position-relative" />
                    <MDBTypography className='fw-bold' variant='h3'>Lista de verificación del PESV</MDBTypography>
                    <hr className="hr z-n1 position-relative" />
                    <MDBTypography className='fw-bold text-start' variant='h4'>Fase 1. Planificación del PESV</MDBTypography>
                </div>
                <div className="card my-2">
                    <DataTable
                        title=""
                        columns={columns_pesv}
                        data={combinedData}
                        customStyles={customStyles}
                        responsive={true}
                        className='z-0 position-relative'
                    />
                </div>
                <nav aria-label='Page navigation example text-end'>
                    <MDBPagination center className='mb-0 py-4'>
                        <MDBPaginationItem active aria-current='page'>
                            <MDBPaginationLink href='/fase1' className='bg-button-pagination'>Fase 1</MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem>
                            <MDBPaginationLink href='/fase2' className='color-text-pagination border-button-pagination'>Fase 2</MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem>
                            <MDBPaginationLink href='/fase3' className='color-text-pagination border-button-pagination'>Fase 3</MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem>
                            <MDBPaginationLink href='/fase4' className='color-text-pagination border-button-pagination'>Fase 4</MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem>
                            <MDBPaginationLink href='/fase2' className='color-text-pagination border-button-pagination'>Siguiente</MDBPaginationLink>
                        </MDBPaginationItem>
                    </MDBPagination>
                </nav>
            </div>
        </>
    );
};

export default Fase1;