import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/autos">
                <button type="button">autos</button>
            </Link>
            <Link to="/personas">
                <button type="button">personas</button>
            </Link>
        </div>
    );
};
