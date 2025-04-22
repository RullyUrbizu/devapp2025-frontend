import { Link } from 'react-router-dom';
import { BotonPropsSimple } from './BotonProps';

export const BotonVolver = ({ entidad }: BotonPropsSimple) => {
    return (
        <>
            <Link to={`/${entidad}`}>
                <button
                    type="button"
                    className="btn btn-danger"
                    style={{ backgroundColor: '#009de0', color: 'black', marginRight: 5 }}
                >
                    Volver a {entidad !== '' ? entidad : 'home'}
                </button>
            </Link>
        </>
    );
};
