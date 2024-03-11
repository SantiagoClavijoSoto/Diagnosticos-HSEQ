import axios from "axios";
import React, { useState, useEffect } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import logo from '../assets/img/logo.png';
import "../Home.css";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [setMessage] = useState('');

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {

        }
        else {
            window.location.href = '/manage';
        };
    })

    const submit = async e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        };
        try {
            // Create the POST requuest
            const { data } = await axios.post('http://localhost:8000/token/', user, { headers: { 'Content-Type': 'application/json' } }, { withCredentials: true })

            // Initialize the access & refresh token in localstorage.      
            localStorage.clear();
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
            window.location.href = '/manage';
        } catch (error) {
            console.log('Credenciales invalidas');
            alert('Credenciales invalidas');
        }
    };

    return (
        <div className="bg-image bg-img-login">
            <div className="mask mask-bg-login">
                <form className="Auth-form" onSubmit={submit}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <MDBContainer fluid>
                            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                                <MDBCol col='12'>
                                    <MDBCard className='bg-light my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                                        <MDBCardBody className='p-5 w-10 d-flex flex-column'>
                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <img
                                                    src={logo}
                                                    width="   "
                                                    height="80"
                                                    className="d-inline-block align-center"
                                                    alt="React Bootstrap logo"
                                                />
                                            </div>
                                            <MDBInput wrapperClass='mb-4 w-100 fw-bold' label='Correo electrónico' id='username' name='username' type='text' size="lg" value={username} required onChange={e => setUsername(e.target.value)} />
                                            <MDBInput wrapperClass='mb-4 w-100 fw-bold' label='Contraseña' id='password' name='password' type='password' size="lg" value={password} required onChange={e => setPassword(e.target.value)} />
                                            <MDBBtn className='mx-2' tag='input' type='submit' value='Iniciar sesión' />
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </form>
            </div>
        </div>
    )
}