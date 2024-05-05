import Header from "../../../components/Header";
import SignupCard from "../../../components/SignupCard";


export default function Registration() {
  return (
    <>
            <header>
                <Header />
            </header>
            <main className="center">
                <section>
                    <SignupCard/>
                </section>
            </main>
        </>
  )
}