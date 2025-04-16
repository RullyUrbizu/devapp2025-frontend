import { Link } from 'react-router-dom';
import { BotonProps } from './BotonProps';

export const BotonEditar = ({ entidad, id }: BotonProps) => {
    return (
        <>
            <Link to={`/${entidad}/editar/${id}`}>
                <button
                    className="edit-button"
                    data-tooltip="Editar"
                    style={{ backgroundColor: 'goldenrod', color: 'white', marginRight: 5 }}
                >
                    editar
                </button>
            </Link>
        </>
    );
};
