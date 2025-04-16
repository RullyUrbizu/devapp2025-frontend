import { Link } from 'react-router-dom';
import { BotonProps } from './BotonProps';

export const BotonVer = ({ entidad, id }: BotonProps) => {
    return (
        <>
            <Link to={`/${entidad}/ver/${id}`}>
                <button
                    className="info-button"
                    data-tooltip="Ver Info"
                    style={{ backgroundColor: 'blue', color: 'white', marginRight: 5 }}
                >
                    ver
                </button>
            </Link>
        </>
    );
};
