import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
// import { FormControl, Form.Group, FormLabel } from 'react-bootstrap';
import { updateConsultor } from '../services/ConsultorService';


const UpdateConsultorModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateConsultor(props.consultores.Id_consultor, e.target)
            .then((result) => {
                alert(result);
                props.setUpdated(true);
            },
                (error) => {
                    alert("No se pudo actualizar Consultor.");
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
                        Actualizar información del estudiante
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="nombres">
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control type="text" name="nombres" required defaultValue={props.consultores.Nombres} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="apellidos">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control type="text" name="apellidos" required defaultValue={props.consultores.Apellidos} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="numero_cedula">
                                    <Form.Label>Cédula</Form.Label>
                                    <Form.Control type="text" name="numero_cedula" required defaultValue={props.consultores.Cedula} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="contrasena">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name="contrasena" required defaultValue={props.consultores.Contrasena} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="correo_electronico">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="text" name="correo_electronico" required defaultValue={props.consultores.Correo_electronico} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="ultimo_ingreso">
                                    <Form.Label>Último ingreso</Form.Label>
                                    <Form.Control type="text" name="ultimo_ingreso" required defaultValue={props.consultores.Ultimo_ingreso} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="cargo">
                                    <Form.Label>Cargo</Form.Label>
                                    <Form.Control type="text" name="cargo" required defaultValue={props.consultores.Cargo} placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="licencia_SST">
                                    <Form.Label>Licencia SST</Form.Label>
                                    <Form.Control type="text" name="licencia_SST" required defaultValue={props.consultores.Licencia_SST} placeholder="" />
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

export default UpdateConsultorModal;