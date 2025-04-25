import { useState, useEffect } from 'react';
import { Auto } from '../../modelo/Auto';
import apiClient from '../../api/apiService';
import { BotonVer } from '../Botones/BotonVerInfo';
import { BotonEditar } from '../Botones/BotonEditar';
import { BotonEliminar } from '../Botones/BotonEliminar';
import { BotonVolver } from '../Botones/BotonVolver';
import '../../css/Listados.css';

interface duenio {
    unDuenio: string;
}

export const ListarAutos = ({ unDuenio }: duenio) => {
    const [autos, setAutos] = useState<Auto[]>([]);
    const [, setError] = useState<string | null>(null);

    useEffect(() => {
        const obtenerVehiculos = async () => {
            try {
                const url = unDuenio ? `/autos?id=${unDuenio}` : '/autos';
                const response = await apiClient.get<Auto[]>(url);
                setAutos(response.data);
            } catch (err: unknown) {
                setError('Error al obtener los vehículos: ' + err);
            }
        };
        obtenerVehiculos();
    }, [unDuenio]);

    return (
        <div className="autos-container">
            <h2>Autos</h2>
            <table className="autos-table">
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
                        <tr key={auto.id}>
                            <td>{auto.patente}</td>
                            <td>{auto.marca}</td>
                            <td>{auto.modelo}</td>
                            <td className="acciones">
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
