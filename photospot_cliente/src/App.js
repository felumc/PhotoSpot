import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Inicio from './pages/Inicio';
import ContactoPage from './pages/ContactoPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Contacto" element={<ContactoPage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default App;
