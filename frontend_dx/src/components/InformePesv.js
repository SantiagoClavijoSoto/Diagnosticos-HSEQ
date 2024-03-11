import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    MDBTypography,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
} from 'mdb-react-ui-kit';
import Navigation from "./Navigation";
import DataTable from 'react-data-table-component';

const Pesv = () => {

    const [data, setData] = useState([]);


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
        setData(prevData => {
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
                            porcentaje = 0 + '%';
                    }
                    return { ...row, valor_obtenido1: porcentaje, rol: newValue };
                }
                return row;
            });
            return newData;
        });
    };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:8000/fases/2/');
    //         setData(response.data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    const generarInforme = async () => {
        try {
            const response = await axios.get('http://localhost:8000/generar-informe/', {
                responseType: 'blob',  // Configurar el tipo de respuesta como blob
            });

            // Crear un enlace de descarga y hacer clic en él
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'informe.docx');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error al generar el informe:', error);
        }
    };

    return (
        <>
            <Navigation />
            <div className='padding-content'>
                <div className="text-center my-3">
                    <MDBTypography className='fw-bold' variant='h1'>Diagnóstico del Plan Estrategico de Seguridad Vial</MDBTypography>
                    <hr className="hr" />
                    <MDBTypography className='fw-bold' variant='h3'>Lista de verificación del PESV</MDBTypography>
                    <hr className="hr" />
                </div>
                <div className="card my-2">
                    <div className='text-center'>
                        <button onClick={generarInforme}>Generar Informe</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pesv;