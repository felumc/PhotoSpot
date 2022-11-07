import React from "react";
import '../styles/registerUsers.css';
import foto from '../images/DSC09067.jpg'
import logo from '../images/My project.png'

function RegisterUsers() {
    return (
        <>
            <body>
                <div class="mainWrapper">
                    <div class="CuadroLogin">
                        <div class="Izquierda">
                            <a><img src={foto} alt="Logo"/></a>
                        </div>
                        <div class="Derecha">
                            <a href="inicio.html"><img src={logo} alt="Logo"/></a>
                            <input type="text" id="Nombre" class="input font" value="" placeholder="Nombre"/>
                            <input type="email" id="email" class="input font" value="" placeholder="E-mail"/>
                            <input type="text" id="Usuario" class="input font" value="" placeholder="Usuario"/>
                            <input type="password" class="input font" name="password" id="password" placeholder="Constraseña" required/>
                            <input type="password" class="input font" name="password" id="Cpassword" placeholder="Confirmar constraseña" required/>
                            <button type="submit">
                                Register
                            </button>
                            <a href="loginUsers.html" class="button2">Tienes una cuenta? Sign In</a>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default RegisterUsers;