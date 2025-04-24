import { useState, useEffect } from 'react';
import { Persona } from '../../modelo/Persona';
import apiClient from '../../api/apiService';
import { BotonEliminar } from '../Botones/BotonEliminar';
import { BotonEditar } from '../Botones/BotonEditar';
import { BotonVer } from '../Botones/BotonVerInfo';
import { BotonVolver } from '../Botones/BotonVolver';
import { BotonNuevaPersona } from '../Botones/BotonNuevaPersona';
import '../../css/Listados.css';

export const PersonasListadas = () => {
    const OBTENERPERSONAS = '/personas';
    const [personas, setPersonas] = useState<Persona[]>([]);
    const [, setError] = useState<string | null>(null);

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
        <div className="personas-container">
            <h2>Personas</h2>
            <BotonNuevaPersona entidad={'persona'} />
            <table className="personas-table">
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
                            <td className="acciones">
                                <BotonVer entidad={'persona'} id={persona.id} />
                                <BotonEditar entidad={'persona'} id={persona.id} />
                                <BotonEliminar entidad={'persona'} id={persona.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <BotonVolver entidad={''} />
        </div>
    );
};
