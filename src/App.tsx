import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AutosListados } from './componentes/Autos/AutosListados';
import { PersonasListadas } from './componentes/Personas/PersonasListadas';
import { Home } from './componentes/Home';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/autos" element={<AutosListados />} />
                <Route path="/personas" element={<PersonasListadas />} />
            </Routes>
        </Router>
    );
};

export default App;
