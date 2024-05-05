import ClientPageCard from "../../../components/ClientPageCard";
import Header from "../../../components/Header";
import './styles.css';


export default function ClientPage() {

  return (
      <>
          <header>
                <Header />
          </header>

          <main>
            <ClientPageCard />
          </main>
      </>
  )
}