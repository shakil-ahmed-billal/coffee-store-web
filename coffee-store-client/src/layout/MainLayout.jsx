import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../pages/Products'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
            <Navbar></Navbar>
            <div className="">
              <Outlet></Outlet>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default MainLayout
