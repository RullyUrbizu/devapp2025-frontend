import apiClient from '../../api/apiService';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BotonConfirmar } from '../Botones/BotonConfirmar';
import { BotonCancelar } from '../Botones/BotonCancelar';

import './Eliminar.css';

export const EliminarAuto = () => {
    const { id } = useParams<{ id: string }>();
    const [errMsg, setErrMsg] = useState<string>('');
    const navigate = useNavigate();

    const ELIMINAR_AUTO = `/auto/${id}`;

    const handleDelete = async () => {
        try {
            await apiClient.delete(ELIMINAR_AUTO);

            navigate('/autos');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            if (!err?.response) {
                setErrMsg('El servicio no responde');
            } else if (err.response?.status === 404) {
                setErrMsg('El auto no se encontro');
            } else {
                setErrMsg('Error al eliminar el auto');
            }
        }
    };

    return (
        <div className="modal-overlay">
            <div className="contenedorVerificarEliminar">
                <h2>Eliminar Auto</h2>
                {errMsg && <p className="alert alert-danger">{errMsg}</p>}
                <p>¿Estás seguro de que deseas eliminar el auto?</p>
                <BotonConfirmar funcion={handleDelete} />
                <BotonCancelar entidad={'autos'} />
            </div>
        </div>
    );
};
