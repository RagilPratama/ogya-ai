import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link to="/" className="brand footer-brand">Ogya AI Platform</Link>
          <p className="footer-desc">
            Otomasi proses bisnis yang menghubungkan interaksi, data, sistem, dan eksekusi dalam
            satu alur yang dapat diaudit.
          </p>
        </div>
        <nav className="footer-links" aria-label="Navigasi footer">
          <Link to="/#solusi">Solusi</Link>
          <Link to="/arsitektur">Arsitektur</Link>
          <Link to="/#kapabilitas">Kapabilitas</Link>
          <Link to="/#penerapan">Penerapan</Link>
          <Link to="/#kontak">Kontak</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© Ogya AI Platform</span>
        <span>Modular · Integrasi terbuka · Otomasi dengan kontrol</span>
      </div>
    </footer>
  )
}
