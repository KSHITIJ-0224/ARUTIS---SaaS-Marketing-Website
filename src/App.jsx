import React, { useState } from 'react'
import MainLayout from './layout/Mainlayout'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import About from './components/About'
import CareerPage from '../carrer/page'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  // Listen for hash changes to navigate
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === 'careers') {
        setCurrentPage('careers')
      } else {
        setCurrentPage('home')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (currentPage === 'careers') {
    return (
      <>
        <MainLayout>
          <div className="mt-20">
            <CareerPage />
          </div>
        </MainLayout>
      </>
    )
  }

  return (
    <MainLayout>
      <Hero />
      <Services />
      <Features />
      <About />
    </MainLayout>
  )
}

export default App
