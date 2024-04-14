import Header from "../../../components/Header";
import SearchFilter from "../../../components/SearchFilter";
import './styles.css';

export default function SearchByFilter() {

    return (
        <>
            <header>
                <Header />
            </header>
            <main className="center">
                <section>
                    <SearchFilter title="BUSCA POR FILTROS" description="Selecione os filtros abaixo para encontrar a peça certa"   label=""  children="BUSCAR"/>
                </section>
            </main>
        </>
    )
}