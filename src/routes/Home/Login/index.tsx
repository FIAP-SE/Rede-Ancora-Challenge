import React from 'react'
import Header from "../../../components/Header";
import LoginCard from "../../../components/LoginCard";


function Login() {
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

export default Login