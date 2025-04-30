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
        <ListadoGenerico
            titulo="Autos"
            elementos={autos}
            campo1="patente"
            campo2="marca"
            campo3="modelo"
            encabezado1="Patente"
            encabezado2="Marca"
            encabezado3="Modelo"
            acciones={Acciones}
            botonVolver={<BotonVolver entidad="" />}
        />
    );
};
