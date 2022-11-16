import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import foto from '../../images/DSC09067.jpg';
import logo from '../../images/My project.png'

function LoginUsers() {
    const register = () => {
        window.location.href = '/Register';
    };
    const navigate = useNavigate();

    // Envio de formulario
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/login', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    correo: correo,
                    contrasenia: contrasenia
                }),
            });
            if (res.status === 201) {
                navigate('/Inicio');
            }
            else if (res.status === 200){
                navigate('/Dashboard');
            }
            else {
                alert("Error al iniciar sesión, verifique sus datos");
                console.log("ocurrio un error")
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (  
        <div className="CuadroLogin">
            <div className="Izquierda">
                <a href="/#"><img src={foto} alt="Logo" /></a>
            </div>
            <div className="Derecha">
                <form method="post" onSubmit={handleSubmit} className="Form" >
                    <a href="/#"><img src={logo} alt="Logo" /></a>
                    <input type="text" id="correo" className="input font" placeholder="Usuario" required onChange={(e) => setCorreo(e.target.value)} />
                    <input type="password" className="input font" name="password" id="password" placeholder="Contraseña" required onChange={(e) => setContrasenia(e.target.value)} />
                    <button className="Entrar" type="submit">
                        Login
                    </button>
                    <button  className="button2" onClick={register}>
                        Sign up
                    </button>
                </form>
            </div>
        </div>

    )
    
}
export default LoginUsers;