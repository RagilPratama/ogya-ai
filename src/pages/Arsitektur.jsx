import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import {
  ARCH_ENTRY_POINTS,
  ARCH_FABRIC,
  ARCH_OUTPUTS,
  ARCH_ROUTING_STEPS,
  ARCH_BLOCKS,
  ARCH_SCENARIOS,
  ARCH_LAYERS,
  ARCH_CONTROLS,
  ARCH_PRINCIPLES,
} from '../content.js'

const ROUTING_SIGNALS = [
  'Request context',
  'Access policy',
  'Data authority',
  'Cost dan latency',
  'Fallback dan HITL',
]

export default function Arsitektur() {
  useEffect(() => {
    document.title = 'Ogya AI Platform: Arsitektur terpadu'
  }, [])

  return (
    <main>
      <section className="arch-hero">
        <div className="container arch-hero-inner">
          <div className="arch-hero-main">
            <div className="dark-eyebrow">Arsitektur terpadu</div>
            <h1 className="arch-hero-title">
              Satu platform. Enam building block. Eksekusi yang sadar konteks.
            </h1>
            <p className="arch-hero-sub">
              Enam building block menyediakan kapabilitas bisnis. Dynamic Context Routing menghubungkan
              kapabilitas itu dengan konteks, sumber data, dan tools yang tepat berdasarkan kebutuhan,
              akses, dan kebijakan perusahaan.
            </p>
            <div className="hero-actions">
              <a href="#overview" className="btn btn-solid-white">Telusuri arsitektur</a>
              <a href="#skenario" className="btn btn-outline-light">Lihat skenario nyata</a>
            </div>
          </div>
          <aside className="arch-hero-note">
            <div className="arch-hero-note-title">Arsitektur sebagai satu kesatuan</div>
            <p>
              Building block menjawab apa yang dapat dilakukan platform. Context routing menjawab
              bagaimana kapabilitas dipilih dan dijalankan dengan tepat.
            </p>
          </aside>
        </div>
      </section>

      <section id="overview" className="arch-overview">
        <div className="container" style={{ paddingBlock: 88 }}>
          <div className="arch-section-head">
            <div className="eyebrow">Ringkasan arsitektur terpadu</div>
            <h2>Kapabilitas terhubung oleh satu mekanisme routing yang sadar konteks.</h2>
            <p>
              Diagram ini menggabungkan enam building block, orchestration, data dan tool fabric,
              serta governance dalam satu pandangan end-to-end.
            </p>
          </div>

          <div className="arch-board">
            <div className="arch-board-head">
              <h3>Ogya Intelligent Automation Platform</h3>
              <span>Arsitektur logis, bukan topologi deployment</span>
            </div>

            <div className="arch-band-label">01 / Titik masuk pengguna dan sistem</div>
            <div className="arch-nodes">
              {ARCH_ENTRY_POINTS.map((entry) => (
                <div key={entry.label} className="arch-node">
                  <Icon name={entry.icon} size={20} />
                  <span>{entry.label}</span>
                </div>
              ))}
            </div>

            <div className="arch-flow" aria-hidden="true">↓</div>

            <div className="arch-routing">
              <h4>Dynamic Context Routing</h4>
              <p>
                Klasifikasi intent dan tugas · Identitas dan otorisasi · Penemuan konteks ·
                Pemilihan rute · Kebijakan tools
              </p>
              <div className="arch-tags">
                {ROUTING_SIGNALS.map((signal) => <span key={signal}>{signal}</span>)}
              </div>
            </div>

            <div className="arch-flow-note">
              Memilih dan memanggil satu atau lebih kapabilitas
            </div>

            <div className="arch-board-blocks">
              {ARCH_BLOCKS.map((block) => (
                <div key={block.num} className="arch-board-block">
                  <span>{block.num}</span>
                  <div>
                    <strong>{block.name}</strong>
                    <small>{block.kicker}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="arch-flow" aria-hidden="true">↓</div>

            <div className="arch-fabric">
              <div className="arch-fabric-title">Context dan tool fabric · akses terkelola</div>
              <div className="arch-fabric-grid">
                {ARCH_FABRIC.map((item) => (
                  <div key={item.name} className="arch-fabric-item">
                    <strong>{item.name}</strong>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="arch-outputs">
              {ARCH_OUTPUTS.map((output) => (
                <span key={output} className="arch-output">{output}</span>
              ))}
            </div>

            <div className="arch-legend">
              <span><i className="dot" /> Routing dan kontrol keputusan</span>
              <span><i className="dot is-green" /> Kapabilitas dan output eksekusi</span>
              <span><i className="dot is-purple" /> Konteks dan tools</span>
            </div>
          </div>
        </div>
      </section>

      <section className="arch-layers">
        <div className="container arch-layers-inner">
          <div className="arch-layers-copy">
            <div className="eyebrow">Dibangun untuk berintegrasi</div>
            <h2>Orchestration menjadi penghubung, bukan pengganti core system.</h2>
            <p>
              Ogya membantu menyatukan kanal, workflow, AI, aturan bisnis, dan sistem yang sudah ada.
              Implementasi dapat dimulai dari proses pendukung yang paling menyita waktu, lalu
              diperluas secara bertahap.
            </p>
            <div className="arch-layer-note">
              <strong>Prinsip implementasi:</strong> mulai dari use case terukur, gunakan komponen
              yang tepat, dan pertahankan keputusan berisiko tinggi di bawah kontrol pemilik proses.
            </div>
          </div>
          <div className="arch-layer-stack">
            {ARCH_LAYERS.map((layer) => (
              <div key={layer.num} className="arch-layer">
                <span>{layer.num}</span>
                <div>
                  <strong>{layer.title}</strong>
                  <small>{layer.text}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="routing" className="arch-routing-section">
        <div className="container" style={{ paddingBlock: 88 }}>
          <div className="arch-section-head">
            <div className="eyebrow">Cara dynamic context routing bekerja</div>
            <h2>Routing memilih jalur kerja, bukan hanya model AI.</h2>
            <p>
              Setiap permintaan melewati kontrol yang menentukan konteks yang dibutuhkan, sumber yang
              berwenang, tools yang boleh dipanggil, dan kapan perlu eskalasi.
            </p>
          </div>
          <div className="arch-routing-grid">
            {ARCH_ROUTING_STEPS.map((step) => (
              <article key={step.num} className="arch-routing-step">
                <div className="arch-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blocks" className="arch-blocks-section">
        <div className="container" style={{ paddingBlock: 88 }}>
          <div className="arch-section-head">
            <div className="eyebrow">Enam building block yang dapat dipakai ulang</div>
            <h2>Kapabilitas modular yang dapat dikombinasikan.</h2>
            <p>Satu use case dapat memakai satu blok atau menggabungkan beberapa blok sesuai kebutuhan.</p>
          </div>
          <div className="arch-block-grid">
            {ARCH_BLOCKS.map((block) => (
              <article key={block.num} className="arch-block-card">
                <div className="arch-block-top">
                  <span className="arch-block-icon"><Icon name={block.icon} size={24} /></span>
                  <span className="arch-block-kicker">{block.num} / {block.kicker}</span>
                </div>
                <h3>{block.name}</h3>
                <p>{block.desc}</p>
                <dl className="arch-block-meta">
                  <div>
                    <dt>Input</dt>
                    <dd>{block.input}</dd>
                  </div>
                  <div>
                    <dt>Output</dt>
                    <dd>{block.output}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skenario" className="arch-scenarios">
        <div className="container" style={{ paddingBlock: 88 }}>
          <div className="arch-section-head">
            <div className="eyebrow">Eksekusi nyata</div>
            <h2>Permintaan berbeda, jalur pemrosesan berbeda.</h2>
            <p>
              Contoh berikut menunjukkan bagaimana routing mengombinasikan building block dan sumber
              konteks secara selektif.
            </p>
          </div>
          <div className="arch-scenario-grid">
            {ARCH_SCENARIOS.map((scenario) => (
              <article key={scenario.kicker} className="arch-scenario">
                <div className="arch-scenario-top">
                  <span className="arch-block-icon"><Icon name={scenario.icon} size={24} /></span>
                  <span className="arch-block-kicker">{scenario.kicker}</span>
                </div>
                <h3>{scenario.title}</h3>
                <div className="arch-flowline">
                  {scenario.flow.map((step, index) => (
                    <span key={step}>
                      <span className="arch-flow-chip">{step}</span>
                      {index < scenario.flow.length - 1 && <b aria-hidden="true">→</b>}
                    </span>
                  ))}
                </div>
                <p>{scenario.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="arch-gov">
        <div className="container arch-gov-inner">
          <div className="arch-gov-panel">
            <div className="dark-eyebrow">Security dan governance</div>
            <h2>Context-aware bukan berarti akses tanpa batas.</h2>
            <p>
              Routing harus mengikuti izin, kebijakan data, otoritas sumber, serta kontrol tindakan.
              Keputusan sensitif dapat mensyaratkan persetujuan manusia.
            </p>
            <div className="arch-controls">
              {ARCH_CONTROLS.map((control) => (
                <div key={control} className="arch-control">
                  <Icon name="check" size={18} />
                  <span>{control}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="arch-principles">
            <div className="eyebrow">Prinsip arsitektur</div>
            <h2>Gunakan teknologi yang tepat untuk setiap tugas.</h2>
            <p>
              Routing tidak memaksakan semua permintaan melewati LLM atau vector database. Ia memilih
              jalur yang sesuai dengan jenis masalah.
            </p>
            {ARCH_PRINCIPLES.map((principle) => (
              <div key={principle.title} className="arch-principle">
                <span className="arch-principle-icon"><Icon name={principle.icon} size={22} /></span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container content-block">
          <div className="cta-row">
            <div className="cta-text">
              <h2>Mulai dari use case. Rancang jalur yang tepat. Perluas secara modular.</h2>
              <p style={{ color: 'var(--light)' }}>
                Petakan kebutuhan bisnis, sumber data, sistem yang ada, kontrol keamanan, dan
                kapabilitas yang diperlukan menggunakan arsitektur terpadu ini.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/#kontak" className="btn btn-solid-white">Diskusikan arsitektur</Link>
              <Link to="/" className="btn btn-outline-light">Kembali ke beranda</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
