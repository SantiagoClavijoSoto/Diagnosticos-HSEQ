import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';
import "../App.css";
import "../index.css";
import { NavLink } from 'react-router-dom';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';

const Navigation = () => {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);

    return (
        <>
            <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white sidebar">
                <div className="position-sticky">
                    <MDBListGroup flush className="mx-3 mt-4">

                        <MDBListGroupItem tag='a' href='/manage' action className='border-0 border-bottom rounded'>
                            <MDBIcon fas icon="fas fa-user me-3" />
                            Consultores
                        </MDBListGroupItem>

                        <MDBListGroupItem tag='a' href='/empresas' action className='border-0 border-bottom rounded'>
                            <MDBIcon fas icon="fas fa-list-ol me-3" />
                            Lista de empresas
                        </MDBListGroupItem>

                        <MDBListGroupItem tag='a' href='/diagnosticos' action className='border-0 border-bottom rounded'>
                            <MDBIcon far icon="chart-bar me-3" />
                            Diagnósticos
                        </MDBListGroupItem>

                        <MDBListGroupItem tag='a' href='/dashboard' action className='border-0 border-bottom rounded'>
                            <MDBIcon fas icon="tachometer-alt me-3" />
                            Dashboard
                        </MDBListGroupItem>

                    </MDBListGroup>
                </div>
            </MDBCollapse>

            <MDBNavbar expand='lg' light bgColor='light' className='h-divider pt-0 position-fixed z-3'>
                <MDBContainer fluid className='shadow'>
                    <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
                        <MDBNavbarToggler
                            type='button'
                            aria-label='Toggle navigation'
                            onClick={toggleShow}
                            className='m-3'
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                        <MDBNavbarBrand href='#'>
                            <img
                                src={logo}
                                height='40'
                                alt=''
                                loading='lazy'
                            />
                        </MDBNavbarBrand>
                    </MDBNavbarNav>
                    <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
                        <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
                            <MDBDropdown>
                                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" className="rounded-circle border border-info" height="40" alt="" loading="lazy" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem>
                                        <MDBListGroupItem tag='a' className="font-size-perfil" href="/perfil"><MDBIcon fas size='sm' icon="user-alt mx-3" />Mi perfil</MDBListGroupItem>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBListGroupItem tag='a' className="font-size-perfil" href="/logout"><MDBIcon fas size='sm' icon="sign-out-alt mx-3" />Cerrar sesión</MDBListGroupItem>
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default Navigation;