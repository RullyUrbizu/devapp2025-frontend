import { useState, useEffect } from 'react';
import { Auto } from '../../modelo/Auto';
import apiClient from '../../api/apiService';
import { BotonVer } from '../Botones/BotonVerInfo';
import { BotonEditar } from '../Botones/BotonEditar';
import { BotonEliminar } from '../Botones/BotonEliminar';
import { BotonVolver } from '../Botones/BotonVolver';
import { ListadoGenerico } from '../ListadoGenerico';

interface Duenio {
    unDuenio: string;
}

export const ListarAutos = ({ unDuenio }: Duenio) => {
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

    const Acciones = (auto: Auto) => (
        <div className="acciones">
            <BotonVer entidad="auto" id={auto.id} />
            <BotonEditar entidad="auto" id={auto.id} />
            <BotonEliminar entidad="auto" id={auto.id} />
        </div>
    );

    return (
        <ListadoGenerico<Auto>
            titulo="Autos"
            elementos={autos}
            valor1="patente"
            valor2="marca"
            valor3="modelo"
            columna1="Patente"
            columna2="Marca"
            columna3="Modelo"
            acciones={Acciones}
            botonVolver={<BotonVolver entidad="" />}
        />
    );
};
