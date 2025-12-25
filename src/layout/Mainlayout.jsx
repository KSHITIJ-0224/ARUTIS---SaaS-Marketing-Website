import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="scroll-smooth w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
