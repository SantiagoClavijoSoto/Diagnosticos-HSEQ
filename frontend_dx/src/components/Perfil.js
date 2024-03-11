import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBTypography,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import Navigation from "./Navigation";
import { Link } from 'react-router-dom';

const PaginaPerfil = () => {

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

    return (
        <>
            <Navigation />
            <section style={{ backgroundColor: '#EEEEEE' }} className='padding-content'>
                <MDBContainer className="py-5">

                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: '150px' }}
                                        fluid />
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4 mb-lg-0">
                                <MDBCardBody className="p-0">
                                    <MDBListGroup flush className="rounded-3">
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                            <MDBIcon fas icon="envelope" />
                                            <Link target={"_blank"} to={'https://mail.google.com/'}><MDBBtn className='mx-2' tag='input' type='submit' value='Ir al correo electrónico' /></Link>
                                        </MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="8">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText tag='strong'>Nombre:</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">Andrés Felipe Rodríguez Lamus</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText tag='strong'>Correo electrónico:</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">soporte@consultoriaycapacitacionhseq.com</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText tag='strong'>Celular:</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">320 220 4522</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText tag='strong'>Licencia SST:</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">Resolución 3100 de 2021</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBRow>
                                <MDBCol md="6">
                                    <MDBCard className="mb-4 mb-md-0">
                                        <MDBCardBody>
                                            <MDBCardText className='mb-4'>
                                                <MDBTypography tag='strong' >
                                                    Empresas asignadas
                                                </MDBTypography>
                                            </MDBCardText>
                                            <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Ejemplo 1</MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Ejemplo 2</MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Ejemplo 3</MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Ejemplo 4</MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Ejemplo 5</MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                            </MDBProgress>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol md="6">
                                    <MDBCard className="mb-4 mb-md-0">
                                        <MDBCardBody>
                                            <MDBCardText className='mb-4'>
                                                <MDBTypography tag='strong' >
                                                    Diagnósticos realizados
                                                </MDBTypography>
                                            </MDBCardText>
                                            <MDBCardText className="mb-2">
                                                <MDBTypography tag='strong' style={{ fontSize: '.87rem' }}>
                                                    PESV
                                                </MDBTypography>
                                            </MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1">
                                                <MDBTypography tag='strong' style={{ fontSize: '.87rem' }}>
                                                    Riesgo Químico
                                                </MDBTypography>
                                            </MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                            </MDBProgress>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
};
export default PaginaPerfil;