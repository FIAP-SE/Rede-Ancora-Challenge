import Header from "../../../components/Header";
import LoginCard from "../../../components/LoginCard";


export default function Login() {
  return (
    <>
            <header>
                <Header />
            </header>
            <main className="center">
                <section>
                    <LoginCard/>
                </section>
            </main>
        </>
  )
}