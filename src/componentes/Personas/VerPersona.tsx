import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../api/apiService';
import { BotonVolver } from '../Botones/BotonVolver';
import { BotonNuevoAuto } from '../Botones/BotonNuevoAuto';
import { ListarAutos } from '../Autos/ListarAutos';
import { BotonEditar } from '../Botones/BotonEditar';
import { BotonEliminar } from '../Botones/BotonEliminar';
import { Persona } from '../../modelo/Persona';

import '../../css/Ver.css';

export const VerPersona = () => {
    const { id } = useParams<{ id: string }>();
    const [persona, setPersona] = useState<Persona | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPersona = async () => {
            try {
                const res = await apiClient.get<Persona>(`/persona/${id}`);
                setPersona(res.data);
            } catch {
                setError('Error al obtener la persona');
            }
        };

        fetchPersona();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!persona) return <p>No se encontro la persona.</p>;

    return (
        <div className="detalle-container">
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
            <div className="botones-container">
                <BotonEditar entidad={'persona'} id={persona.id} />

                <BotonEliminar entidad={'persona'} id={persona.id} />

                <BotonNuevoAuto entidad={'auto'} />
            </div>
            <BotonVolver entidad={'personas'} />
            <ListarAutos unDuenio={`${persona.id}`} />
        </div>
    );
};
