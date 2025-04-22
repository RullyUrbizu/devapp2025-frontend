import { Link } from 'react-router-dom';
import { BotonPropsSimple } from './BotonProps';

export const BotonNuevoAuto = ({ entidad }: BotonPropsSimple) => {
    return (
        <>
            <Link to={`/${entidad}`}>
                <button style={{ backgroundColor: 'green', color: 'white', marginBottom: '10px' }}>
                    Agregar nuevo auto
                </button>
            </Link>
        </>
    );
};
