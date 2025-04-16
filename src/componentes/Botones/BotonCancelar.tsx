import { Link } from 'react-router-dom';

export const BotonCancelar = ({ entidad }) => {
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
