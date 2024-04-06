import Header from "../../../components/Header";
import SearchCard from "../../../components/SearchCard";
import './styles.css';

export default function SearchByCode() {

    return (
        <>
            <header>
                <Header />
            </header>
            <main className="center">
                <section>
                    <SearchCard title="BUSCA POR CÓDIGO" description="Caso você tenha o código da peça, digite abaixo para encontrar a peça certa:" label="Código da Peça" children="BUSCAR"/>
                </section>
            </main>
        </>
    )
}