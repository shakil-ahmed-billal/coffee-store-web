import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Auth = () => {
  return (
    <div>
      <header>
        <nav>
            <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <section>
            <Outlet></Outlet>
        </section>
      </main>
    </div>
  )
}

export default Auth
