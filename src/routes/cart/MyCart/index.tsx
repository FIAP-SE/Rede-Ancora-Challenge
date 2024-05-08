import Header from "../../../components/Header";
import CartCard from "../../../components/CartCard";
import './styles.css';
import ButtonProduct from "../../../components/ButtonQuantityModifier";

export default function MyCart() {

    return (
        <>
            <header>
                <Header />
            </header>
            <main className="center">
                <section>
                    <CartCard/>
                </section>
            </main>
        </>
    )
}