import { Link } from 'react-router-dom';
import { BotonProps } from './BotonProps';

export const BotonEliminar = ({ entidad, id }: BotonProps) => {
    return (
        <>
            <Link to={`/${entidad}/eliminar/${id}`}>
                <button
                    className="delete-button"
                    data-tooltip="Eliminar"
                    style={{ backgroundColor: 'red', color: 'white', marginRight: 5 }}
                >
                    eliminar
                </button>
            </Link>
        </>
    );
};
