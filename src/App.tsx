import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AutosListados } from './componentes/Autos/AutosListados';
import { PersonasListadas } from './componentes/Personas/PersonasListadas';
import { CrearPersona } from './componentes/Personas/AgregarPersona';
import { Home } from './componentes/Home';
import { EliminarPersona } from './componentes/Personas/EliminarPersona';
import { EditarPersona } from './componentes/Personas/EditarPersona';
import { VerPersona } from './componentes/Personas/VerPersona';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/autos" element={<AutosListados />} />
                <Route path="/personas" element={<PersonasListadas />} />
                <Route path="/persona" element={<CrearPersona />} />
                <Route path="/persona/eliminar/:id" element={<EliminarPersona />} />
                <Route path="/persona/editar/:id" element={<EditarPersona />} />
                <Route path="/persona/ver/:id" element={<VerPersona />} />
            </Routes>
        </Router>
    );
};

export default App;
