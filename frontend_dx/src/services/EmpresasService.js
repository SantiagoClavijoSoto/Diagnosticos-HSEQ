import axios from 'axios';

export async function getEmpresas() {
    const response = await axios.get('http://127.0.0.1:8000/empresas/');
    return response.data;
}

export async function addEmpresa(empresa) {
    const response = await axios.post('http://127.0.0.1:8000/empresas/', {
        nombre_empresa: empresa.nombre_empresa.value,
        nit_empresa: empresa.nit_empresa.value,
        actividades_CIIU: empresa.actividades_CIIU.value,
        tamano_empresa: empresa.tamano_empresa.value,
        correo_electronico: empresa.correo_electronico.value,
        segmento_perteneciente: empresa.segmento_perteneciente.value,
        contacto_cargo: empresa.contacto_cargo.value,
        certificaciones_adquiridas: empresa.certificaciones_adquiridas.value,
        dx_realizados: empresa.dx_realizados.value
    });
    return response.data;
}

export async function updateEmpresa(stuid, empresa) {
    const response = await axios.put('http://127.0.0.1:8000/empresas/' + stuid + '/', {
        nombre_empresa: empresa.nombre_empresa.value,
        nit_empresa: empresa.nit_empresa.value,
        actividades_CIIU: empresa.actividades_CIIU.value,
        tamano_empresa: empresa.tamano_empresa.value,
        correo_electronico: empresa.correo_electronico.value,
        segmento_perteneciente: empresa.segmento_perteneciente.value,
        contacto_cargo: empresa.contacto_cargo.value,
        certificaciones_adquiridas: empresa.certificaciones_adquiridas.value,
        dx_realizados: empresa.dx_realizados.value
    });
    return response.data;
}

export async function deleteEmpresa(id_empresa) {
    const response = await axios.delete('http://127.0.0.1:8000/empresas/' + id_empresa + '/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}