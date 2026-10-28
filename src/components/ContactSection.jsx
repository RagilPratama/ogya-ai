import { useState } from 'react'
import { Link } from 'react-router-dom'
import { KONTAK, kontakSiap } from '../content.js'

const SIAP = kontakSiap()

function validasi({ nama, surel, kebutuhan }) {
  const galat = {}
  if (!nama.trim()) galat.nama = 'Isi nama dan perusahaan Anda.'
  if (!surel.trim()) galat.surel = 'Isi email kerja Anda.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(surel)) galat.surel = 'Format email belum benar, contoh: nama@perusahaan.co.id'
  if (!kebutuhan.trim()) galat.kebutuhan = 'Sebutkan proses yang ingin diotomasi.'
  return galat
}

export default function ContactSection() {
  const [isian, setIsian] = useState({ nama: '', surel: '', kebutuhan: '' })
  const [galat, setGalat] = useState({})
  const [terkirim, setTerkirim] = useState(false)

  const ubah = (kunci) => (e) => {
    setIsian((lama) => ({ ...lama, [kunci]: e.target.value }))
    if (galat[kunci]) setGalat((lama) => ({ ...lama, [kunci]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const hasil = validasi(isian)
    setGalat(hasil)
    if (Object.keys(hasil).length > 0) return

    const judul = encodeURIComponent(`Permintaan demo dari ${isian.nama}`)
    const isi = encodeURIComponent(
      `Nama dan perusahaan: ${isian.nama}\nEmail kerja: ${isian.surel}\n\nProses yang ingin diotomasi:\n${isian.kebutuhan}\n`,
    )
    window.location.href = `mailto:${KONTAK.email}?subject=${judul}&body=${isi}`
    setTerkirim(true)
  }

  return (
    <section id="kontak" className="contact">
      <div className="container contact-inner">
        <div className="contact-main">
          <h2>Mulai dari pembuktian konsep dua minggu</h2>
          <p>
            Kami memetakan proses yang paling layak diotomasi, menguji satu alur nyata di lingkungan Anda, lalu
            menyusun perhitungan biaya berdasarkan beban kerja yang terukur.
          </p>
          <dl className="contact-channels">
            <div className="contact-alamat"><dt>Kantor</dt><dd>{KONTAK.alamat}</dd></div>
            <div><dt>Telepon</dt><dd>{KONTAK.telepon}</dd></div>
            <div><dt>Email</dt><dd>{KONTAK.email}</dd></div>
          </dl>
        </div>
        <div className="contact-card">
          <h3>Hubungi kami</h3>
          <form className="contact-fields" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="nama" className="field-label">Nama dan perusahaan</label>
              <input
                id="nama"
                type="text"
                className="input"
                placeholder="Nama, perusahaan"
                value={isian.nama}
                onChange={ubah('nama')}
                aria-invalid={Boolean(galat.nama)}
                aria-describedby={galat.nama ? 'galat-nama' : undefined}
              />
              {galat.nama && <p id="galat-nama" className="field-error">{galat.nama}</p>}
            </div>
            <div>
              <label htmlFor="surel" className="field-label">Email kerja</label>
              <input
                id="surel"
                type="email"
                className="input"
                placeholder="nama@perusahaan.co.id"
                value={isian.surel}
                onChange={ubah('surel')}
                aria-invalid={Boolean(galat.surel)}
                aria-describedby={galat.surel ? 'galat-surel' : undefined}
              />
              {galat.surel && <p id="galat-surel" className="field-error">{galat.surel}</p>}
            </div>
            <div>
              <label htmlFor="kebutuhan" className="field-label">Proses yang ingin diotomasi</label>
              <textarea
                id="kebutuhan"
                rows={3}
                className="textarea"
                placeholder="Misalnya: penanganan komplain mitra, klaim, atau layanan pelanggan 24 jam"
                value={isian.kebutuhan}
                onChange={ubah('kebutuhan')}
                aria-invalid={Boolean(galat.kebutuhan)}
                aria-describedby={galat.kebutuhan ? 'galat-kebutuhan' : undefined}
              />
              {galat.kebutuhan && <p id="galat-kebutuhan" className="field-error">{galat.kebutuhan}</p>}
            </div>
            <button type="submit" className="btn btn-solid-white" disabled={!SIAP}>Kirim permintaan</button>
            {!SIAP && (
              <p className="contact-note">
                Formulir ini belum terhubung. Alamat email tujuan masih berupa placeholder, jadi tombol kirim
                dimatikan sampai data kontak di atas diisi.
              </p>
            )}
            <p className="contact-note" role="status">
              {terkirim
                ? 'Aplikasi email Anda terbuka dengan isian ini. Permintaan terkirim setelah Anda menekan kirim di sana.'
                : 'Tombol ini membuka aplikasi email Anda dengan isian di atas sudah tersusun.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export function CtaLain() {
  return (
    <section className="dark-section">
      <div className="container content-block">
        <div className="cta-row">
          <div className="cta-text">
            <h2>Pola yang sama berlaku untuk industri lain</h2>
            <p style={{ color: 'var(--light)' }}>
              Agent, alur kerja, dan backbone tidak berubah. Yang berbeda hanya pengetahuan, aturan, konektor, dan
              jalur eskalasi, termasuk untuk asuransi, reasuransi, energi, distribusi, dan lembaga publik.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/solusi/supplychain" className="btn btn-solid-white">Lihat solusi lain</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
