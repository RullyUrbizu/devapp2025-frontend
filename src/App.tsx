import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ListarAutos } from './componentes/Autos/ListarAutos';
import { PersonasListadas } from './componentes/Personas/ListarPersonas';
import { CrearPersona } from './componentes/Personas/AgregarPersona';
import { Home } from './componentes/Home';
import { EliminarPersona } from './componentes/Personas/EliminarPersona';
import { EditarPersona } from './componentes/Personas/EditarPersona';
import { VerPersona } from './componentes/Personas/VerPersona';
import { CrearAuto } from './componentes/Autos/CrearAuto';
import { EditarAuto } from './componentes/Autos/EditarAuto';
import { VerAuto } from './componentes/Autos/VerAuto';
import { EliminarAuto } from './componentes/Autos/EliminarAuto';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/autos" element={<ListarAutos unDuenio="" />} />
                <Route path="/personas" element={<PersonasListadas />} />
                <Route path="/persona" element={<CrearPersona />} />
                <Route path="/persona/eliminar/:id" element={<EliminarPersona />} />
                <Route path="/persona/editar/:id" element={<EditarPersona />} />
                <Route path="/persona/ver/:id" element={<VerPersona />} />

                <Route path="/auto/:id" element={<CrearAuto />} />
                <Route path="/auto/editar/:id" element={<EditarAuto />} />
                <Route path="/auto/ver/:id" element={<VerAuto />} />
                <Route path="/auto/eliminar/:id" element={<EliminarAuto />} />
            </Routes>
        </Router>
    );
};

export default App;
