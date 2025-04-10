import { useState, useEffect } from 'react';
import { Persona } from '../../modelo/Persona';
import axios from 'axios';

export const PersonasListadas = () => {
    const OBTENERVEHICULOS = '/personas';
    const [personas, setPersonas] = useState<Persona[]>([]);
    const [error, setError] = useState<string | null>(null);
    const server = 'http://localhost:3000';

    useEffect(() => {
        const obtenerPersonas = async () => {
            try {
                const response = await axios.get<Persona[]>(server + OBTENERVEHICULOS);
                setPersonas(response.data);
            } catch (err: unknown) {
                setError('Error al obtener los vehículos' + err);
            }
        };
        obtenerPersonas();
    }, []);

    return (
        <div>
            <h2>Lista de Personas</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {personas.map((persona, index) => (
                    <li key={index}>
                        {persona.nombre} - {persona.apellido} - {persona.dni}
                    </li>
                ))}
            </ul>
        </div>
    );
};
