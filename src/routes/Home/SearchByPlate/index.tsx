import Header from "../../../components/Header";
import SearchCard from "../../../components/SearchCard";

export default function SearchByPlate() {

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <SearchCard title="BUSCA POR PLACA" description="Digite abaixo a placa do seu carro para encontrar a peça certa:"/>
                </section>
            </main>
        </>
    )
}