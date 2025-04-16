import { Link } from 'react-router-dom';

export const BotonVolver = ({ entidad }) => {
    return (
        <>
            <Link to={`/${entidad}`}>
                <button
                    type="button"
                    className="btn btn-danger"
                    style={{ backgroundColor: '#009de0', color: 'black', marginRight: 5 }}
                >
                    Volver
                </button>
            </Link>
        </>
    );
};
