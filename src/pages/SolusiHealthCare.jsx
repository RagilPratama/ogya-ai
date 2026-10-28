import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CtaLain } from '../components/ContactSection.jsx'
import { HEALTHCARE_DAILY, HEALTHCARE_BOUNDS, COMP_PLATFORM, COMP_CUSTOM, STAGES } from '../content.js'

export default function SolusiHealthCare() {
  useEffect(() => {
    document.title = 'Ogya AI Platform: Contact center AI untuk layanan pasien'
  }, [])

  return (
    <main>
      <section className="sol-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/#solusi">Solusi</Link>
            <span>›</span>
            Health Care
          </div>
          <div className="sol-kicker-line">Contoh penerapan: Health Care</div>
          <h1 className="sol-hero-title">Contact center AI untuk layanan pasien</h1>
          <p className="sol-hero-sub">
            Pendaftaran, jadwal, tagihan, dan permintaan dokumen hasil pemeriksaan dilayani dari kanal yang sudah
            dipakai pasien, dengan batas yang tegas, jejak yang lengkap, dan perpindahan ke petugas yang mulus
            ketika percakapan melampaui kewenangan AI.
          </p>
          <div className="sol-hero-actions">
            <Link to="/#kontak" className="btn btn-solid-navy">Jadwalkan demo</Link>
            <Link to="/arsitektur" className="btn btn-outline-dark">Lihat arsitektur</Link>
          </div>
        </div>
      </section>

      <section className="daily" style={{ borderTop: 'none' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div className="daily-main">
            <h2>Yang berubah di operasi harian</h2>
            <div className="num-list">
              {HEALTHCARE_DAILY.map((item, i) => (
                <div key={item.title} className="num-item">
                  <div className="num-badge">{i + 1}</div>
                  <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                    <div className="num-title">{item.title}</div>
                    <div className="num-text">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bounds-card">
            <h3>Batas yang ditegakkan</h3>
            <ul className="bounds-list">
              {HEALTHCARE_BOUNDS.map((bound) => <li key={bound}>{bound}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="components">
        <div className="container content-block" style={{ paddingBlock: 72 }}>
          <h2>Komponen yang dipakai</h2>
          <p>
            Kolom kiri sudah tersedia sebagai bagian dari platform. Kolom kanan adalah yang disiapkan khusus untuk
            organisasi Anda pada masa implementasi.
          </p>
          <div className="comp-grid">
            <div className="comp-card">
              <h3>Siap pakai dari platform</h3>
              <ul className="comp-list">
                {COMP_PLATFORM.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="comp-card">
              <h3>Disiapkan khusus untuk Anda</h3>
              <ul className="comp-list">
                {COMP_CUSTOM.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="stages" style={{ background: '#ffffff' }}>
        <div className="container content-block" style={{ paddingBlock: 72 }}>
          <h2>Cara penerapannya</h2>
          <div className="stage-grid">
            {STAGES.map((stage) => (
              <div key={stage.kicker} className="stage-card">
                <div className="stage-kicker">{stage.kicker}</div>
                <div className="stage-title">{stage.title}</div>
                <div className="stage-text">{stage.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaLain />
    </main>
  )
}
