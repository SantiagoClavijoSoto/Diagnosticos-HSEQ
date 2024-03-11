import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { addConsultor } from '../services/ConsultorService';

const AddConsultorModal = (props) => {

    const submitConsultor = (e) => {
        e.preventDefault();
        addConsultor(e.target)
            .then((result) => {
                alert(result);
                props.setUpdated(true);
            },
                (error) => {
                    alert("No se pudo agregar consultor.");
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
                        Complete la información del consultor
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={submitConsultor}>
                                <Form.Group controlId="nombres" >
                                    <Form.Label >Nombres</Form.Label>
                                    <Form.Control type="text" name="nombres" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="apellidos">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control type="text" name="apellidos" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="numero_cedula">
                                    <Form.Label>Cédula</Form.Label>
                                    <Form.Control type="text" name="numero_cedula" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="contrasena">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name="contrasena" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="correo_electronico">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="text" name="correo_electronico" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="ultimo_ingreso">
                                    <Form.Label>Último ingreso</Form.Label>
                                    <Form.Control type="text" name="ultimo_ingreso" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="cargo">
                                    <Form.Label>Cargo</Form.Label>
                                    <Form.Control type="text" name="cargo" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="licencia_SST">
                                    <Form.Label>Licencia SST</Form.Label>
                                    <Form.Control type="text" name="licencia_SST" required placeholder="" />
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
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddConsultorModal;