import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function SignupCard() {
    const navigate = useNavigate();

    const handleNavigate = (destination: string) => {
        navigate(destination);
    };

    return (
        <div className="rda-SignupCard">
            <div className="rda-SignupCard-header">
                <button
                    onClick={() => handleNavigate("../login")}
                    className="login-button-signup-page"
                >
                    LOGIN
                </button>
                <button className="signup-button-signup-page">CADASTRO</button>
            </div>
            <h2>DADOS PESSOAIS</h2>
            <div className="rda-SignupCard-content">
                <input className="input-box-signup" type="text" placeholder="Nome" />
                <input className="input-box-signup" type="email" placeholder="Email" />
                <input className="input-box-signup" type="tel" placeholder="Telefone" />
                <input className="input-box-signup" type="text" placeholder="Cidade" />
            </div>

            <h2>MEU CARRO</h2>
            <div className="rda-SignupCard-content">
                <input className="input-box-signup" type="text" placeholder="Marca" />
                <input className="input-box-signup" type="text" placeholder="Modelo" />
                <input className="input-box-signup" type="text" placeholder="Ano" />
                <input className="input-box-signup" type="text" placeholder="Kilometragem" />
                <button className="addcar-button">Adicionar mais um carro</button>
                <button className="enter-button-signup-page">CADASTRAR</button>
            </div>
        </div>
    );
}
