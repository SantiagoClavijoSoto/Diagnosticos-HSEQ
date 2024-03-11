import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { updateVehiculos } from '../services/FlotaVehiculosService';

const UpdateFlotaVehiculosModal = (props) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (props.vehiculos) {
                const formData = new FormData(e.target);
                const data = {};
                console.log(data);

                formData.forEach((value, key) => {
                    data[key] = value;
                });

                const result = await updateVehiculos(props.vehiculos.id_flota_vehiculos, data);

                alert(result);
                props.setUpdated(true);
                props.onHide();
            } else {
                console.error('Error: props.vehiculos is undefined');
            }
        } catch (error) {
            alert("No se pudo actualizar vehículos.");
        }
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
                        Actualizar información de los vehículos
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="nombres">
                                    <Form.Label>Nombre del campo</Form.Label>
                                    <Form.Control type="text" name="" placeholder="" readOnly />
                                </Form.Group>
                                <Form.Group controlId="apellidos">
                                    <Form.Label>Cantidad propios</Form.Label>
                                    <Form.Control type="text" name="numero_motocicletas_patinetas_propios" placeholder="" defaultValue={props.vehiculos.numero_motocicletas_patinetas_propios} />
                                </Form.Group>
                                <Form.Group controlId="numero_cedula">
                                    <Form.Label>Cantidad terceros (Arrendados, contratistas, intermediación, leasing, renting)</Form.Label>
                                    <Form.Control type="text" name="numero_motocicletas_patinetas_terceros" placeholder="" defaultValue={props.vehiculos.numero_motocicletas_patinetas_terceros} />
                                </Form.Group>
                                <Form.Group >
                                    <Button variant="primary" type="submit">
                                        Enviar
                                    </Button>
                                    <Button variant="danger" type="submit" onClick={props.onHide}>
                                        Close
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default UpdateFlotaVehiculosModal;