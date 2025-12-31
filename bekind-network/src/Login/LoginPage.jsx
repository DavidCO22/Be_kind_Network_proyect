import './LoginStyles.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const activeLoginButton = (email !== '') && (password !== '');

const loginButtonStyle = {
    background: !activeLoginButton ? 'rgb(163, 163, 172)' : 'rgb(7, 7, 88)',
    color: !activeLoginButton ?  'rgb(113, 113, 122)':'white' ,
    cursor: !activeLoginButton ? 'default':'pointer'
}



return (
    <div className="login-background">
        <div className="login-container">
            <img src="logo-bekind.svg" alt="bekind-logo" className="login-image" />
            <h2 className="login-title">¡Empieza a conectar tu comunidad ante buenas acciones!</h2>
            <div className="login-input-group">
                <label className="email-label">Correo Electrónico*</label>
                <input type="email" className='info-input email' value={email} onChange={e=>setEmail(e.target.value)} placeholder="Ingresar correo"/>
                <label className="input-label">Contraseña*</label>
                <input type="password" className='info-input password' value={password} onChange={e=>setPassword(e.target.value)} placeholder="Ingresar contraseña"/>
            </div>
            <a className='forgot-password-button' href="#">Recuperar contraseña</a>

            <button 
            className="login-button" 
            disabled={!activeLoginButton}
            onClick={() => navigate("/home")}
            style={loginButtonStyle}>

                Ingresar

            </button>
        </div>
    </div>
)

}

export default Login;