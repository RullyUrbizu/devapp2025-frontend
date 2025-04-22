import { useState, useEffect } from 'react';
import { Auto } from '../../modelo/Auto';
import apiClient from '../../api/apiService';
import { BotonVer } from '../Botones/BotonVerInfo';
import { BotonEditar } from '../Botones/BotonEditar';
import { BotonEliminar } from '../Botones/BotonEliminar';
import { BotonVolver } from '../Botones/BotonVolver';

export const AutosListados = () => {
    const OBTENERVEHICULOS = '/autos';
    const [autos, setAutos] = useState<Auto[]>([]);
    const [, setError] = useState<string | null>(null);

    useEffect(() => {
        const obtenerVehiculos = async () => {
            try {
                const response = await apiClient.get<Auto[]>(OBTENERVEHICULOS);
                setAutos(response.data);
            } catch (err: unknown) {
                setError('Error al obtener los vehículos' + err);
            }
        };
        obtenerVehiculos();
    }, []);

    return (
        <div>
            <h2>Autos</h2>
            <table border={1} cellPadding={8} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Patente</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map((auto) => (
                        <tr key={auto.patente}>
                            <td>{auto.patente}</td>
                            <td>{auto.marca}</td>
                            <td>{auto.modelo}</td>
                            <td>
                                <BotonVer entidad={'auto'} id={auto.id} />
                                <BotonEditar entidad={'auto'} id={auto.id} />
                                <BotonEliminar entidad={'auto'} id={auto.id} />
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
