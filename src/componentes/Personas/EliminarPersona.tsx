import apiClient from '../../api/apiService';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BotonConfirmar } from '../Botones/BotonConfirmar';
import { BotonCancelar } from '../Botones/BotonCancelar';

export const EliminarPersona = () => {
    const { id } = useParams<{ id: string }>();
    const [errMsg, setErrMsg] = useState<string>('');
    const navigate = useNavigate();

    const ELIMINAR_PERSONA = `/persona/${id}`;

    const handleDelete = async () => {
        try {
            await apiClient.delete(ELIMINAR_PERSONA);

            navigate('/personas');
        } catch (err: any) {
            if (!err?.response) {
                setErrMsg('El servicio no responde');
            } else if (err.response?.status === 404) {
                setErrMsg('La persona no se encontró');
            } else {
                setErrMsg('Error al eliminar la persona');
            }
        }
    };

    return (
        <>
            <div className="contenedorVerificarEliminar">
                <h2>Eliminar Persona</h2>
                {errMsg && <p className="alert alert-danger">{errMsg}</p>}
                <p>¿Estas seguro de que deseas eliminar la persona?</p>
                <BotonConfirmar funcion={handleDelete} />
                <BotonCancelar entidad={'personas'} />
            </div>
        </>
    );
};
