import { useState, useEffect } from 'react';
import { Persona } from '../../modelo/Persona';
import apiClient from '../../api/apiService';
import { BotonEliminar } from '../Botones/BotonEliminar';
import { BotonEditar } from '../Botones/BotonEditar';
import { BotonVer } from '../Botones/BotonVerInfo';
import { BotonVolver } from '../Botones/BotonVolver';
import { BotonNuevaPersona } from '../Botones/BotonNuevaPersona';
import { ListadoGenerico } from '../ListadoGenerico.tsx';

export const PersonasListadas = () => {
    const [personas, setPersonas] = useState<Persona[]>([]);
    const [, setError] = useState<string | null>(null);

    useEffect(() => {
        const obtenerPersonas = async () => {
            try {
                const response = await apiClient.get<Persona[]>('/personas');
                setPersonas(response.data);
            } catch (err) {
                setError('Error al obtener las personas: ' + (err as Error).message);
            }
        };
        obtenerPersonas();
    }, []);

    const Acciones = (persona: Persona) => (
        <>
            <BotonVer entidad="persona" id={persona.id} />
            <BotonEditar entidad="persona" id={persona.id} />
            <BotonEliminar entidad="persona" id={persona.id} />
        </>
    );

    return (
        <ListadoGenerico<Persona>
            titulo="Personas"
            elementos={personas}
            valor1="dni"
            valor2="nombre"
            valor3="apellido"
            columna1="DNI"
            columna2="Nombre"
            columna3="Apellido"
            acciones={Acciones}
            botonNuevo={<BotonNuevaPersona entidad="persona" />}
            botonVolver={<BotonVolver entidad="" />}
        />
    );
};
