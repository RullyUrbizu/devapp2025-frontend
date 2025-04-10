import { useState, useEffect } from 'react';
import { Auto } from '../../modelo/Auto';
import axios from 'axios';

export const AutosListados = () => {
    const OBTENERVEHICULOS = '/autos';
    const [autos, setAutos] = useState<Auto[]>([]);
    const [error, setError] = useState<string | null>(null);
    const server = 'http://localhost:3000';

    useEffect(() => {
        const obtenerVehiculos = async () => {
            try {
                const response = await axios.get<Auto[]>(server + OBTENERVEHICULOS);
                setAutos(response.data);
            } catch (err: unknown) {
                setError('Error al obtener los vehículos' + err);
            }
        };
        obtenerVehiculos();
    }, []);

    return (
        <div>
            <h2>Lista de Autos</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {autos.map((auto, index) => (
                    <li key={index}>
                        {auto.patente} - {auto.marca} - {auto.modelo}
                    </li>
                ))}
            </ul>
        </div>
    );
};
