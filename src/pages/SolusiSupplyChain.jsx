import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BEFORE_AFTER, PROCESSES, EXPERIENCES, INTEGRATIONS, PORTAL_ITEMS, NEED_FACTORS, INFRA_OPTIONS } from '../content.js'

export default function SolusiSupplyChain() {
  useEffect(() => {
    document.title = 'Ogya AI Platform: Contact center AI supply chain untuk mitra bisnis'
  }, [])

  return (
    <main>
      <section className="sol-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/#solusi">Solusi</Link>
            <span>›</span>
            FMCG &amp; Distribusi
          </div>
          <div className="sol-kicker-line">Contoh penerapan: distribusi produk segar</div>
          <h1 className="sol-hero-title">Contact center AI supply chain untuk mitra bisnis</h1>
          <p className="sol-hero-sub">
            Pelanggan dan mitra distribusi dilayani 24 jam dari kanal pesan yang sudah mereka pakai: melaporkan
            keluhan, melacak pengiriman, dan mengajukan refund atau klaim, dengan data yang diambil langsung dari
            sistem logistik, inventori, dan akuntansi yang sudah berjalan.
          </p>
          <div className="sol-hero-actions">
            <Link to="/#kontak" className="btn btn-solid-navy">Jadwalkan demo</Link>
            <Link to="/arsitektur" className="btn btn-outline-dark">Lihat arsitektur</Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--soft)' }}>
        <div className="container content-block" style={{ paddingBlock: 64 }}>
          <h2>Sebelum dan sesudah</h2>
          <p>
            Sebelumnya setiap tahap dijalankan operator secara manual di antara sistem yang berdiri sendiri,
            tanpa orkestrasi yang menghubungkannya.
          </p>
          <div className="ba-grid">
            <div className="ba-card">
              <h3>{BEFORE_AFTER.before.heading}</h3>
              <ul className="ba-list">
                {BEFORE_AFTER.before.items.map(([strong, rest]) => (
                  <li key={strong}><strong>{strong}</strong>{rest}</li>
                ))}
              </ul>
            </div>
            <div className="ba-card">
              <h3>{BEFORE_AFTER.after.heading}</h3>
              <ul className="ba-list">
                {BEFORE_AFTER.after.items.map(([strong, rest]) => (
                  <li key={strong}><strong>{strong}</strong>{rest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#ffffff' }}>
        <div className="container content-block" style={{ paddingBlock: 72 }}>
          <h2>Tiga proses yang diotomasi</h2>
          <div className="process-grid">
            {PROCESSES.map((proc) => (
              <article key={proc.kicker} className="process-card">
                <div className="process-kicker">{proc.kicker}</div>
                <h3 className="process-title">{proc.title}</h3>
                <p className="process-desc">{proc.desc}</p>
                <div className="process-note">{proc.note}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container content-block" style={{ paddingBlock: 72 }}>
          <h2 style={{ marginTop: 0, fontSize: 30, lineHeight: 1.2, letterSpacing: '-0.02em' }}>Pengalaman percakapan</h2>
          <p className="dark-lead" style={{ marginTop: 14, maxWidth: 820 }}>
            Percakapan dirancang natural dan kontekstual, bukan balasan template yang kaku.
          </p>
          <div className="exp-grid">
            {EXPERIENCES.map((exp) => (
              <div key={exp.title} className="exp-card">
                <div className="exp-title">{exp.title}</div>
                <div className="exp-text">{exp.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="integ">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 40 }}>
          <div className="integ-main">
            <h2 style={{ margin: 0, fontSize: 30, lineHeight: 1.2, letterSpacing: '-0.02em', fontWeight: 700 }}>Integrasi yang dibutuhkan</h2>
            <p style={{ margin: '14px 0 0', color: 'var(--muted)', fontSize: 17 }}>
              Tiga titik integrasi menjadi penentu utama ruang lingkup pekerjaan dan biayanya.
            </p>
            <div className="integ-list">
              {INTEGRATIONS.map((item) => (
                <div key={item.title} className="integ-item">
                  <div className="integ-item-title">{item.title}</div>
                  <div className="integ-item-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="portal">
            <h2 style={{ margin: 0, fontSize: 30, lineHeight: 1.2, letterSpacing: '-0.02em', fontWeight: 700 }}>Portal operator</h2>
            <p style={{ margin: '14px 0 0', color: 'var(--muted)', fontSize: 17 }}>
              Sisi petugas dan manajemen berjalan di satu portal.
            </p>
            <ul className="portal-list">
              {PORTAL_ITEMS.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="portal-note">
              Penghematan biaya AI dijalankan dengan tiga mekanisme: pemampatan konteks, cache jawaban untuk
              pertanyaan yang sering berulang, dan pemilihan model dari yang paling sederhana hingga yang paling
              mampu sesuai kebutuhan.
            </div>
          </div>
        </div>
      </section>
      <section className="costing">
        <div className="container" style={{ paddingBlock: 72 }}>
          <h2 className="section-title">Pilihan infrastruktur</h2>
          <p className="lead">
            Keempat opsi memakai lapisan kapabilitas platform yang sama. Yang berbeda hanya di mana aplikasi dan
            model dijalankan, sehingga pilihan dapat berubah tanpa menulis ulang sistem.
          </p>
          <div className="table-wrap">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Opsi</th>
                  <th>Model AI</th>
                  <th>Biaya per token</th>
                  <th>Paling cocok untuk</th>
                </tr>
              </thead>
              <tbody>
                {INFRA_OPTIONS.map((row) => (
                  <tr key={row.opsi}>
                    <td>{row.opsi}</td>
                    <td>{row.model}</td>
                    <td>{row.token}</td>
                    <td>{row.cocok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="lead" style={{ marginTop: 24 }}>
            Penentu pilihan: volume pesan harian dan konsistensinya, kebijakan privasi data, tingkat kemampuan AI
            yang dibutuhkan, kesiapan tim IT, serta preferensi antara belanja modal dan biaya berlangganan.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--soft)' }}>
        <div className="container content-block" style={{ paddingBlock: 72 }}>
          <h2>Menghitung kebutuhan Anda</h2>
          <p>
            Volume transaksi bisnis tidak sama dengan volume pesan ke chatbot: satu transaksi dapat menghasilkan
            beberapa pesan, dan banyak pesan tidak berkaitan dengan transaksi aktif. Karena itu angka awal selalu
            dikalibrasi ulang setelah pembuktian konsep.
          </p>
          <div className="need-grid">
            {NEED_FACTORS.map((factor) => (
              <div key={factor.title} className="need-card">
                <div className="need-title">{factor.title}</div>
                <div className="need-text">{factor.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container content-block">
          <div className="cta-row">
            <div className="cta-text">
              <h2>Mulai dari satu proses, lalu diperluas</h2>
              <p>
                Pembuktian konsep berjangka pendek pada satu proses sudah cukup untuk mengukur beban kerja nyata,
                mutu jawaban, dan biaya operasionalnya sebelum komitmen penuh.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/#kontak" className="btn btn-solid-white">Hubungi kami</Link>
              <Link to="/#solusi" className="btn btn-outline-light">Solusi lain</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
