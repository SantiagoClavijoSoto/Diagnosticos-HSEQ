import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';
import Navigation from "./Navigation";
import { Link } from 'react-router-dom';


const Diagnosticos = () => {
    return (
        <>
            <Navigation />
            <MDBRow className='padding-content justify-content-center padding-top-button color-section-background'>
                <MDBCol sm='4'>
                    <MDBCard alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle>Diagnóstico PESV</MDBCardTitle>
                            <Link to={'/caracterizacion'}><MDBBtn className='mx-2' tag='input' href="" value='Ir al diagnóstico' /></Link>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='4'>
                    <MDBCard alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle>Diagnóstico Riesgo Químico</MDBCardTitle>
                            <MDBBtn className='mx-2' tag='input' href="" value='Ir al diagnóstico' disabled />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    );
};

export default Diagnosticos;