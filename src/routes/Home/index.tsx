import { Link, useNavigate } from "react-router-dom";
import ButtonCard from "../../components/ButtonCard";
import logoImg from "../../../public/assets/logo.png";

export default function Home() {
    const navigate = useNavigate();

    const handleNavigate = (destination: string) => {
      navigate(destination);
    };

    return (
      <>
        <div className="logo">
          <Link to={"/"}>
            <img src={logoImg} alt="logo" />
          </Link>
        </div>
        <main>
          <section>
            <div className="title-container container">
              <div className="rda-title">
                <h1>Boas Vindas!</h1>
              </div>
              <div className="rda-subtitle">
                <p>
                  Escolha uma das opções abaixo para buscar a peça certa para
                  seu carro:
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="card-container">
              <ButtonCard
                content="BUSCAR PEÇA"
                onClick={() => handleNavigate("/searchcatalog")}
              />
              <ButtonCard
                content="MEU CADASTRO"
                onClick={() => handleNavigate("/login")}
              />
              <ButtonCard
                content="VIDEO PITCH"
                onClick={() => handleNavigate("/pitch")}
              />
              <ButtonCard
                content="SOBRE O PROJETO"
                onClick={() => handleNavigate("/aboutproject")}
              />
            </div>
          </section>
        </main>
      </>
    );
  }
