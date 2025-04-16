import { useState, useEffect } from 'react';
import { Persona } from '../../modelo/Persona';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/apiService';
import { BotonEliminar } from '../Botones/BotonEliminar';
import { BotonEditar } from '../Botones/BotonEditar';
import { BotonVer } from '../Botones/BotonVerInfo';

export const PersonasListadas = () => {
    const OBTENERPERSONAS = '/personas';
    const [personas, setPersonas] = useState<Persona[]>([]);
    const [, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const obtenerPersonas = async () => {
            try {
                const response = await apiClient.get<Persona[]>(OBTENERPERSONAS);
                setPersonas(response.data);
            } catch (err: unknown) {
                setError('Error al obtener las personas: ' + (err as Error).message);
            }
        };
        obtenerPersonas();
    }, []);

    return (
        <div>
            <h2>Personas</h2>
            <button
                style={{ backgroundColor: 'green', color: 'white', marginBottom: '10px' }}
                onClick={() => navigate('/persona')}
            >
                Agregar nueva
            </button>
            <table border={1} cellPadding={8} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((persona) => (
                        <tr key={persona.id}>
                            <td>{persona.dni}</td>
                            <td>{persona.nombre}</td>
                            <td>{persona.apellido}</td>
                            <td>
                                <BotonVer entidad={'persona'} id={persona.id} />
                                <BotonEditar entidad={'persona'} id={persona.id} />
                                <BotonEliminar entidad={'persona'} id={persona.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
