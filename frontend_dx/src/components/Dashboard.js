import React, { useEffect, useState } from 'react';

function App() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/obtener_fase1/')
            .then(response => response.json())
            .then(data => {
                // Parsea la cadena JSON
                const datosParseados = JSON.parse(data.fase_1);
                setDatos(datosParseados);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Fase 1</h1>
            <ul>
                {datos.map(item => (
                    <li key={item._id}>{`${item.descripcion}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;