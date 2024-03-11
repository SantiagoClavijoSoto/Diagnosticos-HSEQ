import axios from 'axios';

export async function getVehiculos() {
    const response = await axios.get('http://127.0.0.1:8000/flota_vehiculos/');
    return response.data;
}

export async function addVehiculos(vehiculos) {
    const response = await axios.post('http://127.0.0.1:8000/flota_vehiculos/', {
        numero_motocicletas_patinetas_propios: vehiculos.numero_motocicletas_patinetas_propios,
        numero_motocicletas_patinetas_terceros: vehiculos.numero_motocicletas_patinetas_terceros,
        numero_vehiculos_livianos_propios: vehiculos.numero_vehiculos_livianos_propios,
        numero_vehiculos_livianos_terceros: vehiculos.numero_vehiculos_livianos_terceros,
        numero_vehiculos_pesados_propios: vehiculos.numero_vehiculos_pesados_propios,
        numero_vehiculos_pesados_terceros: vehiculos.numero_vehiculos_pesados_terceros,
        numero_vehiculos_furgon_propios: vehiculos.numero_vehiculos_furgon_propios,
        numero_vehiculos_furgon_terceros: vehiculos.numero_vehiculos_furgon_terceros,
        numero_vehiculos_carga_propios: vehiculos.numero_vehiculos_carga_propios,
        numero_vehiculos_carga_terceros: vehiculos.numero_vehiculos_carga_terceros,
        numero_maquinaria_amarilla_propios: vehiculos.numero_maquinaria_amarilla_propios,
        numero_maquinaria_amarilla_terceros: vehiculos.numero_maquinaria_amarilla_terceros,
        numero_vehiculos_no_automotores_propios: vehiculos.numero_vehiculos_no_automotores_propios,
        numero_vehiculos_no_automotores_terceros: vehiculos.numero_vehiculos_no_automotores_terceros,
    });
    return response.data;
}

export async function updateVehiculos(stuid, vehiculos) {
    const response = await axios.put('http://127.0.0.1:8000/flota_vehiculos/' + stuid + '/', {
        numero_motocicletas_patinetas_propios: vehiculos.numero_motocicletas_patinetas_propios,
        numero_motocicletas_patinetas_terceros: vehiculos.numero_motocicletas_patinetas_terceros,
        numero_vehiculos_livianos_propios: vehiculos.numero_vehiculos_livianos_propios,
        numero_vehiculos_livianos_terceros: vehiculos.numero_vehiculos_livianos_terceros,
        numero_vehiculos_pesados_propios: vehiculos.numero_vehiculos_pesados_propios,
        numero_vehiculos_pesados_terceros: vehiculos.numero_vehiculos_pesados_terceros,
        numero_vehiculos_furgon_propios: vehiculos.numero_vehiculos_furgon_propios,
        numero_vehiculos_furgon_terceros: vehiculos.numero_vehiculos_furgon_terceros,
        numero_vehiculos_carga_propios: vehiculos.numero_vehiculos_carga_propios,
        numero_vehiculos_carga_terceros: vehiculos.numero_vehiculos_carga_terceros,
        numero_maquinaria_amarilla_propios: vehiculos.numero_maquinaria_amarilla_propios,
        numero_maquinaria_amarilla_terceros: vehiculos.numero_maquinaria_amarilla_terceros,
        numero_vehiculos_no_automotores_propios: vehiculos.numero_vehiculos_no_automotores_propios,
        numero_vehiculos_no_automotores_terceros: vehiculos.numero_vehiculos_no_automotores_terceros,
    });
    return response.data;
}

export async function deleteVehiculos(id_flota_vehiculos) {
    const response = await axios.delete('http://127.0.0.1:8000/flota_vehiculos/' + id_flota_vehiculos + '/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}