import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../api/apiService';
import { BotonVolver } from '../Botones/BotonVolver';
import { BotonNuevoAuto } from '../Botones/BotonNuevoAuto';
import { AutosListados } from '../Autos/AutosListados';
import { BotonEditar } from '../Botones/BotonEditar';
import { BotonEliminar } from '../Botones/BotonEliminar';

export const VerPersona = () => {
    const { id } = useParams<{ id: string }>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [persona, setPersona] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPersona = async () => {
            try {
                const res = await apiClient.get(`/persona/${id}`);
                setPersona(res.data);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError('Error al obtener la persona');
            }
        };

        fetchPersona();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!persona) return <p>No se encontro la persona.</p>;

    return (
        <div>
            <h2>Detalles de la Persona</h2>
            <p>
                <strong>Nombre:</strong> {persona.nombre}
            </p>
            <p>
                <strong>Apellido:</strong> {persona.apellido}
            </p>
            <p>
                <strong>DNI:</strong> {persona.dni}
            </p>
            <p>
                <strong>Genero:</strong> {persona.genero}
            </p>
            <p>
                <strong>Fecha de nacimiento:</strong> {new Date(persona.fechaNacimiento).toLocaleDateString()}
            </p>
            <p>
                <strong>Es donante:</strong> {persona.esDonante ? 'Si' : 'No'}
            </p>

            <BotonEditar entidad={'persona'} id={persona.id} />

            <BotonEliminar entidad={'persona'} id={persona.id} />

            <BotonVolver entidad={'personas'} />
            <br />
            <br />
            <BotonNuevoAuto entidad={'auto'} />
            <br />
            <AutosListados />
        </div>
    );
};
