import React from 'react'
import Header from "../../../components/Header";
import SignupCard from "../../../components/SignupCard";


function Registration() {
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

export default Registration