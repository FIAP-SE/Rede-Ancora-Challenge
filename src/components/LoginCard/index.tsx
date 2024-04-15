import './styles.css';
import { useNavigate } from "react-router-dom";

export default function LoginCard() {

    const navigate = useNavigate();
    const handleNavigate = (destination: string) => {
      navigate(destination);
    };
    return (
            <div className='rda-LoginCard'>
                <div className='rda-LoginCard-header'>
                    <button onClick={() => handleNavigate('../registration')} className= 'login-button-login-page'>LOGIN</button>
                    <button className='signup-button-login-page'>CADASTRO</button>

                </div>
                <div className='rda-LoginCard-content'>
                    <h2>Faça seu login ou cadastre-se:</h2>
                    <input className='input-box' type="email" placeholder="Email"/>
                    <input className='input-box' type="password" placeholder="Senha"/>
                    <a href='/' className='forgot-pass'>
                        <h3>Esqueci minha senha</h3>
                    </a>
                    <button className='enter-button-login-page'>ENTRAR</button>
                </div>
            </div>
    );
}