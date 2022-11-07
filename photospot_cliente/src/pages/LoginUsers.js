import React from "react";
import '../styles/loginUsers.css';
import foto from '../images/DSC09067.jpg'
import logo from '../images/My project.png'

function LoginUsers() {
    return (
        <>
            <body>
                <div className="mainWrapper">

                    <div className="CuadroLogin">
                        <div className="Izquierda">
                            <a><img src={foto} alt="Logo"/></a>
                        </div>
                        <div className="Derecha">
                            <a href="#"><img src={logo} alt="Logo"/></a>
                            <input type="text" id="user" className="input font" placeholder="Usuario"/>
                            <input type="password" className="input font" name="password" id="password" placeholder="Contraseña" required/>
                            <button type="submit">
                                Login
                            </button>
                            <a href="registerUsers.html" className="button2">Sign Up</a>
                            <a className="RecoverPass">
                                Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
export default LoginUsers;