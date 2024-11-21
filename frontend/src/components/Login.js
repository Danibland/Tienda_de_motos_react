import React from "react";
import Logincss from "../components/login.css";

function Login() {
  return (
    
    <form class="login" action="/login"method="post">
        <img src="../imagenes/avatar.png" alt="user-img"/>
        <div class="social-networks">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-tiktok"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
        </div>
        <label for="username">Correo de usuario</label>
        <input type="text" id="usuario" name="usuario" placeholder="" required/>
        <label for="password"id="password"name="password">Contraseña</label>
        <input type="password" id="password" placeholder="" required/>
        <button type="submit" id="submit">Iniciar Sesión</button>
        <a href="/registrar">Registro</a>
    </form>


  );
};

export default Login;
