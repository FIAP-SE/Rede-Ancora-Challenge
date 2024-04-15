import './styles.css';
import Header from '../../../../components/Header';
import ConfirmationCard from '../../../../components/ConfirmationCard';

export default function OrderConfirmed() {

    return (
        <>
            <header>
                <Header/>
                <main className="center">
                <section>
                    <ConfirmationCard/>
                </section>
            </main>
            </header>
        </>
    )
}
