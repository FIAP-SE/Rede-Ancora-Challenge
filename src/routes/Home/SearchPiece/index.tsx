import Header from "../../../components/Header";
import SearchCard from "../../../components/SearchCard";
import './styles.css';

export default function SearchPiece() {

    return (
        <>
            <header>
                <Header />
            </header>
            <main className="center">
                <section>
                    <SearchCard title="BUSCA PEÇA" description="Digite abaixo a placa do seu carro para encontrar a peça certa:" label="Placa" children="BUSCAR"/>
                </section>
            </main>
        </>
    )
}