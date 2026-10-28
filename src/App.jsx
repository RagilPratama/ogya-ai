import { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Arsitektur from './pages/Arsitektur.jsx'
import SolusiHealthCare from './pages/SolusiHealthCare.jsx'
import SolusiSupplyChain from './pages/SolusiSupplyChain.jsx'

if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

function HashScroll() {
  const location = useLocation()
  const { pathname, hash, key } = location

  useLayoutEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [key, pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <HashScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arsitektur" element={<Arsitektur />} />
        <Route path="/solusi/healthcare" element={<SolusiHealthCare />} />
        <Route path="/solusi/supplychain" element={<SolusiSupplyChain />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
