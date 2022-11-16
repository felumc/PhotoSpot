import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import foto from '../../images/DSC09067.jpg';
import logo from '../../images/My project.png';

function RegisterUsers() {
    const login = () => {
        window.location.href = '/';
    };
    const navigate = useNavigate();

    // Envio de formulario

    const [nombre, setNombre] = useState("");
    const [apepat, setApepat] = useState("");
    const [apemat, setApemat] = useState("");
    const [correo, setCorreo] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/registrar', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apepat: apepat,
                    apemat: apemat,
                    correo: correo,
                    usuario: usuario,
                    contrasenia: contrasenia,
                    rolId: "2"
                }),
            });
            if (res.status === 200) {
                alert("Usuario creado correctamente");
                navigate('/');
            } else {
                alert("Error al registrar");
                console.log("ocurrio un error")
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="CuadroLoginR">
            <div className="IzquierdaR">
                <a href="/#"><img src={foto} alt="Logo" /></a>
            </div>
            <div className="DerechaR">
                <form method="post" onSubmit={handleSubmit} className="FormR">
                    <a href="/#"><img src={logo} alt="Logo" /></a>
                    <input type="text" id="nombre" className="input font" placeholder="Nombre" required onChange={(e) => setNombre(e.target.value)}/>
                    <input type="text" id="apepat" className="input font" placeholder="Apellido Paterno" required onChange={(e) => setApepat(e.target.value)}/>
                    <input type="text" id="apemat" className="input font" placeholder="Apellido Materno" required onChange={(e) => setApemat(e.target.value)}/>
                    <input type="text" id="correo" className="input font" placeholder="Correo" required onChange={(e) => setCorreo(e.target.value)}/>
                    <input type="text" id="usuario" className="input font" placeholder="Usuario" required onChange={(e) => setUsuario(e.target.value)}/>
                    <input type="password" className="input font" name="password" id="password" placeholder="Contraseña" required onChange={(e) => setContrasenia(e.target.value)}/>
                    <button className="EntrarR" type="submit">
                        Registrarse
                    </button>
                    <button className="EntrarR" onClick={login}>
                        Tienes una cuenta? Sign In
                    </button>
                </form>
            </div>
        </div>

    );
}

export default RegisterUsers;