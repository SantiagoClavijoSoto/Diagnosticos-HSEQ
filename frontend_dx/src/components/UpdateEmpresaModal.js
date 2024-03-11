import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { updateEmpresa } from '../services/EmpresasService';


const UpdateEmpresaModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmpresa(props.empresas.id_empresa, e.target)
            .then((result) => {
                alert(result);
                props.setUpdated(true);
            },
                (error) => {
                    alert("No se pudo actualizar Empresa.");
                })
    };

    return (
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Actualizar información de la empresa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="nombre_empresa">
                                    <Form.Label>Nombre de la empresa</Form.Label>
                                    <Form.Control type="text" name="nombre_empresa" required defaultValue={props.empresas.nombre_empresa} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="nit_empresa">
                                    <Form.Label>Nit de la empresa</Form.Label>
                                    <Form.Control type="text" name="nit_empresa" required defaultValue={props.empresas.nit_empresa} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="actividades_CIIU">
                                    <Form.Label>Actividades CIIU</Form.Label>
                                    <Form.Control type="text" name="actividades_CIIU" required defaultValue={props.empresas.actividades_CIIU} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="tamano_empresa">
                                    <Form.Label>Tamaño de la empresa</Form.Label>
                                    <Form.Control type="text" name="tamano_empresa" required defaultValue={props.empresas.tamano_empresa} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="correo_electronico">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="email" name="correo_electronico" required defaultValue={props.empresas.correo_electronico} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="segmento_perteneciente">
                                    <Form.Label>Segmento al que pertene</Form.Label>
                                    <Form.Control type="text" name="segmento_perteneciente" required defaultValue={props.empresas.segmento_perteneciente} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="contacto_cargo">
                                    <Form.Label>Contacto - cargo</Form.Label>
                                    <Form.Control type="text" name="contacto_cargo" required defaultValue={props.empresas.contacto_cargo} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="certificaciones_adquiridas">
                                    <Form.Label>Certificaciones adquiridas (Normas ISO)</Form.Label>
                                    <Form.Control type="text" name="certificaciones_adquiridas" required defaultValue={props.empresas.certificaciones_adquiridas} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="dx_realizados">
                                    <Form.Label>Diagnósticos realizados</Form.Label>
                                    <Form.Control type="text" name="dx_realizados" required defaultValue={props.empresas.dx_realizados} placeholder="" />
                                </Form.Group>
                                <Form.Group>
                                    <p></p>
                                    <Button variant="primary" type="submit">
                                        Enviar
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UpdateEmpresaModal;