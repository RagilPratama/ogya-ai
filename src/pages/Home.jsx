import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection.jsx'
import HeroBackdrop from '../components/HeroBackdrop.jsx'
import Icon from '../components/Icon.jsx'
import {
  PAINS, DIFFERENTIATORS, SOLUTIONS, BLOCKS, ROUTING_ROWS, STEPS,
  CAPABILITIES, EFFICIENCY, DEPLOYMENT, COST_ROWS,
  VALUE_PROPS, PLATFORM_MODES, SECURITY_CONTROLS, SECURITY_POINTS, ADOPTION_STEPS,
} from '../content.js'

const COST_GROUPS = COST_ROWS.reduce((kelompok, baris) => {
  const ada = kelompok.find((k) => k.sifat === baris.sifat)
  if (ada) ada.rows.push(baris)
  else kelompok.push({ sifat: baris.sifat, rows: [baris] })
  return kelompok
}, [])

const COST_CELLS = COST_GROUPS.flatMap((kelompok) =>
  kelompok.rows.map((baris) => ({ ...baris, utama: kelompok.rows.length === 1 })),
)

export default function Home() {
  useEffect(() => { document.title = 'Ogya AI Platform: Beranda' }, [])

  return (
    <main>
      <section id="atas" className="hero">
        <HeroBackdrop />
        <div className="container hero-inner">
          <div className="hero-main">
            <h1 className="hero-title">Contact center berbasis AI yang siap dikustomisasi untuk bisnis Anda</h1>
            <p className="hero-sub">
              Satu platform omnichannel dengan agent AI yang dapat dipakai ulang, berdiri di atas backbone middleware:
              integrasi, API gateway, AI gateway, identitas, workflow, dan observability. Terhubung ke sistem yang
              sudah berjalan, tanpa mengunci Anda pada satu vendor atau satu model.
            </p>
            <div className="hero-actions">
              <Link to="/#kontak" className="btn btn-solid-white">Jadwalkan demo</Link>
              <Link to="/#arsitektur" className="btn btn-outline-light">Lihat arsitektur</Link>
            </div>
          </div>
          <aside className="diff-pane">
            <div className="pane-label">Yang membuatnya berbeda</div>
            <div className="diff-list">
              {DIFFERENTIATORS.map((item) => (
                <div key={item.title}>
                  <div className="diff-title">{item.title}</div>
                  <div className="diff-text">{item.text}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <div className="value-strip">
        <div className="container value-strip-grid">
          {VALUE_PROPS.map((item) => (
            <div key={item.title} className="value-item">
              <Icon name={item.icon} size={22} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="pains">
        <div className="container">
          <div className="pains-intro">
            <div className="eyebrow">Mengapa berubah</div>
            <h2>Jangan biarkan proses bisnis terjebak di antara aplikasi.</h2>
            <p>
              Perusahaan membutuhkan lebih dari chatbot atau integrasi satu kali. Mereka membutuhkan
              alur kerja yang menghubungkan interaksi, data, keputusan, dan tindakan.
            </p>
          </div>
          <div className="pains-grid">
            {PAINS.map((pain) => (
              <div key={pain.title}>
                <div className="pain-title">{pain.title}</div>
                <div className="pain-text">{pain.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solusi" className="solutions">
        <div className="container sol-intro">
          <div className="eyebrow">Jenis solusi</div>
          <h2 className="section-title">Satu platform, enam bentuk penerapan yang paling relevan</h2>
          <p className="lead">
            Setiap solusi memakai agent dan backbone yang sama. Yang disiapkan khusus untuk Anda adalah pengetahuan,
            aturan bisnis, alur eskalasi, dan konektor ke sistem yang sudah berjalan.
          </p>
        </div>
        <div className="container">
          <div className="sol-grid">
            {SOLUTIONS.map((sol) => (
              <article key={sol.kicker} className="sol-card">
                <span className="sol-icon"><Icon name={sol.icon} size={26} /></span>
                <div className="sol-kicker">{sol.kicker}</div>
                <h3 className="sol-title">{sol.title}</h3>
                <p className="sol-desc">{sol.desc}</p>
                <ul className="sol-list">
                  {sol.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                {sol.to
                  ? <Link to={sol.to} className="sol-link">Pelajari solusi ini</Link>
                  : <span className="sol-soon">Halaman detail belum tersedia</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="modes">
        <div className="container modes-inner">
          <div className="modes-head">
            <div className="eyebrow">Bentuk penerapan</div>
            <h2>Yang dapat dijalankan di atas platform</h2>
            <p>
              Enam bentuk penerapan berikut memakai agent, workflow, dan backbone yang sama. Yang
              disiapkan khusus adalah pengetahuan, aturan, konektor, dan jalur eskalasi.
            </p>
          </div>
          <div className="mode-grid">
            {PLATFORM_MODES.map((mode) => (
              <article key={mode.title} className="mode-item">
                <span className="mode-icon"><Icon name={mode.icon} size={24} /></span>
                <div>
                  <div className="mode-tag">{mode.tag}</div>
                  <h3 className="mode-title">{mode.title}</h3>
                  <p className="mode-text">{mode.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="arsitektur" className="dark-section">
        <div className="container section-pad">
          <div className="dark-eyebrow">Arsitektur</div>
          <h2 className="dark-title">Ekosistem enam building block, dengan dynamic context routing sebagai lapisan keputusan</h2>
          <p className="dark-lead">
            Struktur menjawab pertanyaan <em>dengan apa sistem dibangun</em>; routing menjawab{' '}
            <em>bagaimana setiap permintaan memilih konteks, sumber yang berwenang, dan kapan harus berhenti</em>.
            Memisahkan keduanya membuat satu lapisan dapat diganti tanpa membongkar yang lain.
          </p>
          <div className="hero-actions">
            <Link to="/arsitektur" className="btn btn-solid-white">Buka arsitektur lengkap</Link>
          </div>
        </div>
      </section>

      <section className="solutions">
        <div className="container blocks-intro">
          <h2>Enam building block</h2>
          <p>Setiap blok punya tugas yang jelas, teknologi yang dapat dipilih, dan titik keputusan routing yang menjadi miliknya.</p>
        </div>
        <div className="container">
          <div className="blocks-list">
            {BLOCKS.map((block) => (
              <div key={block.num} className="block-card">
                <div className="block-num">
                  <Icon name={block.icon} size={28} />
                  <span>{block.num}</span>
                </div>
                <div className="block-body">
                  <div className="block-title">{block.name}</div>
                  <p className="block-desc">{block.desc}</p>
                  {block.chip && <div className="block-chip">{block.chip}</div>}
                </div>
                <div className="block-side">
                  <div className="side-label">Isi lapisan</div>
                  <div className="side-text">{block.side}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="routing" className="dark-section">
        <div className="container section-pad">
          <div className="dark-eyebrow">Dynamic context routing</div>
          <h2 className="dark-title" style={{ fontSize: 36, lineHeight: 1.16 }}>
            Bukan blok ketujuh, melainkan lapisan keputusan yang tinggal di dalam blok-blok itu
          </h2>
          <p className="dark-lead">
            Setiap jenis keputusan punya satu pemilik. Bila dua lapisan memutuskan hal yang sama, aturannya cepat
            atau lambat akan berbeda. Misalnya, cache yang tidak mengenal peran pengguna bisa membocorkan jawaban
            internal, atau failover yang memindahkan pemrosesan ke cloud padahal kontrak mensyaratkan pemrosesan
            lokal.
          </p>
          <div className="table-wrap">
            <table className="routing-table">
              <thead>
                <tr>
                  <th>Keputusan</th>
                  <th>Pemiliknya</th>
                  <th>Yang dijaga</th>
                </tr>
              </thead>
              <tbody>
                {ROUTING_ROWS.map((row) => (
                  <tr key={row.decision}>
                    <td>{row.decision}</td>
                    <td>{row.owner}</td>
                    <td>{row.guard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="jalur" className="jalur">
        <div className="container" style={{ paddingBlock: 80 }}>
          <h2>Jalur satu permintaan</h2>
          <p className="jalur-lead">
            Lapisan bukan urutan tunggal: satu permintaan dapat melewatinya berulang kali.
            Contoh: pelanggan mengirim foto dokumen melalui kanal pesan.
          </p>
          <ol className="steps-row">
            {STEPS.map((step) => (
              <li key={step.num} className={step.gateway ? 'step-card is-gateway' : 'step-card'}>
                <div className="step-num">{step.num}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-text">{step.text}</div>
                {step.gateway && (
                  <div className="step-gateway">
                    <Icon name="gateway" size={16} />
                    <span>lewat AI Gateway</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
          <div className="note-dark">
            Setiap panggilan model pada langkah 3 dan 4 tetap melewati gateway: cache diperiksa lebih dulu,
            lalu model dipilih sesuai beban tugas dan batas kontrak.
          </div>
        </div>
      </section>

      <section id="kapabilitas" className="capabilities">
        <div className="container" style={{ paddingBlock: 88 }}>
          <div className="eyebrow">Kapabilitas</div>
          <h2 className="section-title">Kelengkapan yang dituntut operasi skala besar</h2>
          <dl className="cap-list">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="cap-row">
                <dt className="cap-title">{cap.title}</dt>
                <dd className="cap-text">{cap.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="efisiensi" className="efficiency">
        <div className="container" style={{ paddingBlock: 80 }}>
          <div className="eyebrow">Efisiensi</div>
          <div className="eff-panel">
            <div className="eff-head">
              <span className="eff-head-mark"><Icon name="gateway" size={30} /></span>
              <div className="eff-head-text">
                <h2>Biaya AI dikendalikan di gateway, bukan ditebak</h2>
                <p>
                  Keputusan tentang model, cache, dan kuota hidup di satu lapisan, sehingga dapat diubah tanpa
                  menulis ulang aplikasi, dan dapat dilaporkan per unit bisnis.
                </p>
              </div>
            </div>
            <div className="eff-grid">
              {EFFICIENCY.map((item) => (
                <div key={item.title} className="eff-item">
                  <div className="eff-item-title">{item.title}</div>
                  <div className="eff-item-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="keamanan" className="security">
        <div className="container security-inner">
          <div className="security-panel">
            <div className="dark-eyebrow">Enterprise-ready by design</div>
            <h2>Kontrol tetap di tangan perusahaan.</h2>
            <p>
              Arsitektur dapat disesuaikan dengan kebijakan keamanan, sensitivitas data, serta
              kebutuhan deployment cloud, on-premises, atau hybrid.
            </p>
            <div className="security-controls">
              {SECURITY_CONTROLS.map((control) => (
                <div key={control} className="security-control">
                  <Icon name="check" size={17} />
                  <span>{control}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="security-copy">
            <div className="eyebrow">Teknologi mengikuti kebutuhan</div>
            <h2>Fleksibel untuk lingkungan enterprise.</h2>
            <p>
              Gunakan layanan cloud saat memberi nilai, pertahankan pemrosesan sensitif di
              lingkungan yang sesuai, dan integrasikan sistem yang telah menjadi bagian dari operasi.
            </p>
            <div className="security-points">
              {SECURITY_POINTS.map((point) => (
                <div key={point.title} className="security-point">
                  <span className="security-point-icon"><Icon name={point.icon} size={22} /></span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="adoption">
        <div className="container adoption-inner">
          <div className="adoption-intro">
            <div className="eyebrow">Cara memulai</div>
            <h2>Implementasi bertahap, dengan manfaat yang bisa diukur.</h2>
            <p>
              Tidak harus memulai dari AI yang paling kompleks. Pilih langkah awal berdasarkan pain
              point, kesiapan data, dan risiko operasional.
            </p>
          </div>
          <ol className="adoption-list">
            {ADOPTION_STEPS.map((step, index) => (
              <li key={step.title} className="adoption-item">
                <span className="adoption-num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <div className="adoption-title">{step.title}</div>
                  <div className="adoption-text">{step.text}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="penerapan" className="placement" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ paddingBlock: 88 }}>
          <div className="eyebrow">Penerapan</div>
          <h2 className="section-title">Pilih penempatan dan bentuk kerja sama</h2>
          <div className="deploy-grid">
            {DEPLOYMENT.map((col) => (
              <div key={col.heading} className="deploy-card">
                <h3>{col.heading}</h3>
                <ul className="deploy-list">
                  {col.items.map(([strong, rest]) => (
                    <li key={strong + rest}>
                      {strong && <strong>{strong}</strong>}
                      {rest}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="biaya" className="costing">
        <div className="container" style={{ paddingBlock: 80 }}>
          <div className="eyebrow">Biaya</div>
          <div className="cost-bento">
            <div className="cost-cell cost-intro">
              <h2 className="cost-intro-title">Bagaimana biaya dihitung</h2>
              <p className="cost-intro-lead">
                Setiap komponen biaya punya penentu skalanya sendiri, sehingga penawaran dapat dihitung dan
                ditelusuri, bukan ditebak.
              </p>
            </div>
            {COST_CELLS.map((sel) => (
              <article
                key={sel.component}
                className={sel.utama ? 'cost-cell is-utama' : 'cost-cell'}
              >
                <h3 className="cost-cell-name">{sel.component}</h3>
                <p className="cost-cell-drivers">{sel.scale}</p>
                <div className="cost-cell-sifat">{sel.sifat}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
