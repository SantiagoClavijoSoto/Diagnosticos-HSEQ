import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { addEmpresa } from '../services/EmpresasService';

const AddEmpresaModal = (props) => {

    const submitEmpresa = (e) => {
        e.preventDefault();
        addEmpresa(e.target)
            .then((result) => {
                alert(result);
                props.setUpdated(true);
            },
                (error) => {
                    alert("No se pudo agregar empresa.");
                })
    }

    return (
        <div className="container">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Complete la información de la empresa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={submitEmpresa}>
                                <Form.Group controlId="nombre_empresa" >
                                    <Form.Label >Nombre de la empresa</Form.Label>
                                    <Form.Control type="text" name="nombre_empresa" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="nit_empresa">
                                    <Form.Label>Nit de la empresa</Form.Label>
                                    <Form.Control type="text" name="nit_empresa" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="actividades_CIIU">
                                    <Form.Label>Actividades CIIU</Form.Label>
                                    <Form.Control type="text" name="actividades_CIIU" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="tamano_empresa">
                                    <Form.Label>Tamaño de la empresa</Form.Label>
                                    <Form.Control type="text" name="tamano_empresa" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="correo_electronico">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="email" name="correo_electronico" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="segmento_perteneciente">
                                    <Form.Label>Segmento al que pertene</Form.Label>
                                    <Form.Control type="text" name="segmento_perteneciente" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="contacto_cargo">
                                    <Form.Label>Contacto - cargo</Form.Label>
                                    <Form.Control type="text" name="contacto_cargo" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="certificaciones_adquiridas">
                                    <Form.Label>Certificaciones adquiridas (Normas ISO)</Form.Label>
                                    <Form.Control type="text" name="certificaciones_adquiridas" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="dx_realizados">
                                    <Form.Label>Diagnósticos realizados</Form.Label>
                                    <Form.Control type="text" name="dx_realizados" required placeholder="" />
                                </Form.Group>
                                <Form.Group>
                                    <p></p>
                                    <Button variant="primary" type="submit">
                                        Submit
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

export default AddEmpresaModal;