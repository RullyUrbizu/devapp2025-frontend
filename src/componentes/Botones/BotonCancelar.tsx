import { Link } from 'react-router-dom';
import { BotonPropsSimple } from './BotonProps';

export const BotonCancelar = ({ entidad }: BotonPropsSimple) => {
    return (
        <>
            <Link to={`/${entidad}`}>
                <button type="button" className="btn btn-danger">
                    Cancelar
                </button>
            </Link>
        </>
    );
};
