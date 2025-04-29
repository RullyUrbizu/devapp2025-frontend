import { Link } from 'react-router-dom';
import { BotonProps } from './BotonProps';

export const BotonNuevoAuto = ({ entidad, id }: BotonProps) => {
    return (
        <>
            <Link to={`/${entidad}/${id}`}>
                <button style={{ backgroundColor: 'green', color: 'white', marginBottom: '10px' }}>
                    Agregar nuevo auto
                </button>
            </Link>
        </>
    );
};
