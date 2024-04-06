import Header from "../../../components/Header";
import SearchCard from "../../../components/SearchCard";
import './styles.css';

export default function SearchByFilter() {

    return (
        <>
            <header>
                <Header />
            </header>
            <main className="center">
                <section>
                    <SearchCard title="BUSCA POR FILTROS" description="Selecione os filtros abaixo para encontrar a peça certa"/>
                </section>
            </main>
        </>
    )
}