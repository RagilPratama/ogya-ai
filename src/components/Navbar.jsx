import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MAIN_NAV = [
  { label: 'Solusi', to: '/#solusi' },
  { label: 'Arsitektur', to: '/arsitektur' },
  { label: 'Kapabilitas', to: '/#kapabilitas' },
  { label: 'Penerapan', to: '/#penerapan' },
  { label: 'Biaya', to: '/#biaya' },
]

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [lastKey, setLastKey] = useState(location.key)

  if (location.key !== lastKey) {
    setLastKey(location.key)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (!open) return
    const query = window.matchMedia('(min-width: 901px)')
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [open])

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span>Ogya AI Platform</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav id="site-nav" className={open ? 'nav is-open' : 'nav'}>
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>Beranda</Link>
          {MAIN_NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/#kontak" className="btn-nav" onClick={() => setOpen(false)}>Minta demo</Link>
        </nav>
      </div>
    </header>
  )
}
