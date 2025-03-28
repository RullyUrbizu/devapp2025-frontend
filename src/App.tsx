import react from 'react';
import axios from 'axios';
// import 'app.css';

const serverUrl = 'http://localhost:3000';

const App: react.FC = () => {
    const [message, setMessage] = react.useState<string | undefined>();
    react.useEffect(() => {
        (async () => {
            const response = await axios.get<string>(serverUrl);
            setMessage(response.data);
        })();
    }, []);
    return <>{message === undefined ? <h2>loading...</h2> : <h2>{message}</h2>};</>;
};

export default App;
