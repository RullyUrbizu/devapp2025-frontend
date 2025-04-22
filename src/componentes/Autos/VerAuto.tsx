import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../api/apiService';
import { BotonVolver } from '../Botones/BotonVolver';
import { Auto } from '../../modelo/Auto';
// import { BotonVer } from '../Botones/BotonVerInfo';
// import { Persona } from '../../modelo/Persona';

export const VerAuto = () => {
    const { id } = useParams();
    const [auto, setAuto] = useState<Auto | null>(null);
    const [error, setError] = useState<string | null>(null);
    // const [persona, setPersona] = useState<Persona>();

    useEffect(() => {
        const fetchAuto = async () => {
            try {
                const res = await apiClient.get<Auto>(`/auto/${id}`);
                setAuto(res.data);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError('Error al obtener el auto');
            }
        };

        fetchAuto();
    }, [id]);

    // useEffect(() => {
    //     if (!auto?.duenio) return;
    //     const fetchPersona = async () => {
    //         try {
    //             const laPersona = await apiClient.get<Persona>(`/persona/${auto.duenio}`);
    //             setPersona(laPersona.data);
    //         } catch (err) {
    //             setError('Error al obtener el auto' + err);
    //         }
    //     };
    //     fetchPersona();
    // }, [auto?.duenio]);

    if (error) return <p>{error}</p>;
    if (!auto) return <p>No se encontro el auto.</p>;

    return (
        <div>
            <h2>Detalles del auto</h2>
            <p>
                <strong>Marca:</strong> {auto.marca}
            </p>
            <p>
                <strong>Modelo:</strong> {auto.modelo}
            </p>
            <p>
                <strong>Anio:</strong> {auto.anio}
            </p>
            <p>
                <strong>Patente:</strong> {auto.patente}
            </p>
            <p>
                <strong>Color:</strong> {auto.color}
            </p>
            <p>
                <strong>Numero Chasis:</strong> {auto.numeroChasis}
            </p>
            <p>
                <strong>Numero Motor:</strong> {auto.numeroMotor}
            </p>
            <p>
                <strong>Duenio:</strong> {auto.duenio}
            </p>

            {/* {persona && <BotonVer entidad={'persona'} id={persona.id} />} */}

            <BotonVolver entidad={'autos'} />
        </div>
    );
};
