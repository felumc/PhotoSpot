import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Inicio from './pages/Inicio';
import ContactoPage from './pages/ContactoPage';
import DashboardRolesPage from './pages/DashboardRolesPage';
import DashboardUsuariosPage from './pages/DashboardUsuariosPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Contacto" element={<ContactoPage />} />
        <Route path="/DashboardRoles" element={<DashboardRolesPage />} />
        <Route path="/DashboardUsuarios" element={<DashboardUsuariosPage />} />
      </Routes>
    </>
  );
}

export default App;
