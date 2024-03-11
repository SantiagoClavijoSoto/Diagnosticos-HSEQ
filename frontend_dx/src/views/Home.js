import React from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import logo from '../static/logo.png'
import "../Home.css";

function Home() {
  return (

    <div className="bg-image bg-img-login">
      <div className="mask mask-bg-login">
        <div className="d-flex justify-content-center align-items-center h-100">
          <MDBContainer flui>
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
                    <MDBInput wrapperClass='mb-4 w-100 fw-bold' label='Correo electrónico' id='formControlLg' type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4 w-100 fw-bold' label='Contraseña' id='formControlLg' type='password' size="lg" />
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Recordar contraseña' />
                    <MDBBtn size='lg' className='color-bg-login fw-bolder'>
                      Iniciar sesión
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}

export default Home;