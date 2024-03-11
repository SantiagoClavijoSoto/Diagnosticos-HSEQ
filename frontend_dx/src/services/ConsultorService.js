import axios from 'axios';

export async function getConsultores() {
    const response = await axios.get('http://127.0.0.1:8000/consultores/');
    return response.data;
}

export async function addConsultor(consultor) {
    const response = await axios.post('http://127.0.0.1:8000/consultores/', {
        nombres: consultor.nombres.value,
        apellidos: consultor.apellidos.value,
        numero_cedula: consultor.numero_cedula.value,
        contrasena: consultor.contrasena.value,
        correo_electronico: consultor.correo_electronico.value,
        ultimo_ingreso: consultor.ultimo_ingreso.value,
        cargo: consultor.cargo.value,
        licencia_SST: consultor.licencia_SST.value
    });
    return response.data;
}

export async function updateConsultor(stuid, consultor) {
    const response = await axios.put('http://127.0.0.1:8000/consultores/' + stuid + '/', {
        nombres: consultor.nombres.value,
        apellidos: consultor.apellidos.value,
        numero_cedula: consultor.numero_cedula.value,
        contrasena: consultor.contrasena.value,
        correo_electronico: consultor.correo_electronico.value,
        ultimo_ingreso: consultor.ultimo_ingreso.value,
        cargo: consultor.cargo.value,
        licencia_SST: consultor.licencia_SST.value
    });
    return response.data;
}

export async function deleteConsultor(id_consultor) {
    const response = await axios.delete('http://127.0.0.1:8000/consultores/' + id_consultor + '/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}