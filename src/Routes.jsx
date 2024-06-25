import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Base from './pages/base/Base';
import Descritivo from './pages/descritivos/Descritivos';
import Inferencia from './pages/inferencias/Inferencias';
import Cliente from './pages/ci/Cliente';

const Rota = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/base" element={<Base />} />
      <Route path="/descritivo" element={<Descritivo />} />
      <Route path="/inferencia" element={<Inferencia />} />
      <Route path="/clientes-impactados" element={<Cliente />} />
    </Routes>
  </Router>
);

export default Rota;
