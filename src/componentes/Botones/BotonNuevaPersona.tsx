import { Link } from 'react-router-dom';
import { BotonPropsSimple } from './BotonProps';

export const BotonNuevaPersona = ({ entidad }: BotonPropsSimple) => {
    return (
        <>
            <Link to={`/${entidad}`}>
                <button style={{ backgroundColor: 'green', color: 'white', marginBottom: '10px' }}>
                    Agregar nueva
                </button>
            </Link>
        </>
    );
};
