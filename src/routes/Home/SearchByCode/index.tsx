import Header from "../../../components/Header";
import SearchCard from "../../../components/SearchCard";

export default function SearchByCode() {

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <SearchCard title="BUSCA POR CÓDIGO" description="Caso você tenha o código da peça, digite abaixo para encontrar a peça certa:"/>
                </section>
            </main>
        </>
    )
}