import Sprite from '../components/Sprite'
import Behavior from '../components/Behavior'

export default function Home(){return (<>
<Sprite/>
<header><div className="nav"><a className="brand" href="#top">ogya<span>.</span></a>
<nav id="nav"><a href="#top" aria-current="true">Beranda</a><a href="#industries">Industri</a><a href="#channels">Kanal</a><a href="#platform">Platform</a><a href="#business-needs">Kebutuhan</a><a href="#ecosystem">Ekosistem</a></nav>
<a className="btn" href="#cta">Diskusikan kebutuhan <svg className="i"><use href="#se"/></svg></a>
<button className="theme" id="theme" aria-label="Ganti mode terang atau gelap" title="Ganti tema"><svg className="i sun"><use href="#sun"/></svg><svg className="i moon"><use href="#moon"/></svg></button>
<button className="menu" id="menu" aria-expanded="false" aria-label="Buka navigasi"><svg className="i"><use href="#menu"/></svg></button></div></header>
<main>

<section id="top"><div className="wrap hero">
 <div>
  <div className="eyebrow">Ogya Intelligent Automation Platform</div>
  <h1>Make complex business operations <em>work intelligently.</em></h1>
  <p>Satu platform untuk menghubungkan kanal interaksi, dokumen, data, AI, workflow, dan sistem enterprise—mengotomasi proses bisnis lintas industri dengan kontrol, keamanan, dan human oversight.</p>
  <div className="actions"><a className="btn" href="#platform">Explore the platform <svg className="i"><use href="#se"/></svg></a><a className="btn light" href="solusi.html">Industry use cases <svg className="i"><use href="#ne"/></svg></a></div>
  <div className="claim"><strong>One platform. Multiple outcomes.</strong> Dikonfigurasi sesuai proses, data, kanal, dan sistem yang sudah dimiliki.</div>
 </div>
 <div className="map" aria-label="Peta interaktif lapisan platform Ogya">
  <div className="hint">Pilih lapisan untuk menjelajah</div>
  <div className="core"><b>Ogya Intelligent Automation Platform</b><small>AI · WORKFLOW · DATA · PEOPLE</small></div>
  <button className="pt p1" data-target="industries"><span className="ico"><svg className="i"><use href="#layers"/></svg></span>Industries</button>
  <button className="pt p2" data-target="channels"><span className="ico wa"><svg className="i f"><use href="#wa"/></svg></span>Omnichannel</button>
  <button className="pt p3" data-target="ecosystem"><span className="ico"><svg className="i"><use href="#plug"/></svg></span>Ecosystem</button>
  <button className="pt p4" data-target="business-needs"><span className="ico"><svg className="i"><use href="#target"/></svg></span>Outcomes</button>
  <button className="pt p5" data-target="platform"><span className="ico"><svg className="i"><use href="#spark"/></svg></span>Capabilities</button>
 </div>
</div></section>

<section id="industries" className="soft"><div className="wrap"><div className="hd"><div><div className="no"><b>01</b> Business reach</div><h2>Berbagai use case lintas industri</h2></div><p>Mulai dari layanan, pemrosesan dokumen, hingga otomasi operasional pada sektor yang berbeda.</p></div>
<div className="row c5">
<article className="card center"><span className="ico"><svg className="i"><use href="#shield"/></svg></span><h3>Reinsurance &amp; Life Insurance</h3><small>Payment &amp; invoice intelligence</small></article>
<article className="card center"><span className="ico"><svg className="i"><use href="#car"/></svg></span><h3>Property &amp; Automotive Insurance</h3><small>Appraisal &amp; claims service</small></article>
<article className="card center"><span className="ico"><svg className="i"><use href="#box"/></svg></span><h3>FMCG &amp; Distribution</h3><small>Supply chain partner service</small></article>
<article className="card center"><span className="ico"><svg className="i"><use href="#health"/></svg></span><h3>Health Care</h3><small>Patient service</small></article>
<article className="card center"><span className="ico"><svg className="i"><use href="#gov"/></svg></span><h3>Government &amp; Public Sector</h3><small>Citizen &amp; staff service</small></article>
</div></div></section>

<section id="channels"><div className="wrap"><div className="hd"><div><div className="no"><b>02</b> Omnichannel &amp; sources</div><h2>Terima permintaan dari kanal dan sumber yang beragam</h2></div><p>Pengguna dan sistem dapat memulai proses lewat kanal percakapan, kanal digital, maupun dokumen bisnis.</p></div>
<div className="row c6">
<div className="card center"><span className="ico wa"><svg className="i f"><use href="#wa"/></svg></span><h3>WhatsApp</h3></div>
<div className="card center"><span className="ico"><svg className="i"><use href="#mail"/></svg></span><h3>Email</h3></div>
<div className="card center"><span className="ico"><svg className="i"><use href="#phone"/></svg></span><h3>Telepon</h3></div>
<div className="card center"><span className="ico"><svg className="i"><use href="#globe"/></svg></span><h3>Web</h3></div>
<div className="card center"><span className="ico"><svg className="i"><use href="#mobile"/></svg></span><h3>Mobile</h3></div>
<div className="card center"><span className="ico"><svg className="i"><use href="#doc"/></svg></span><h3>Document</h3></div>
</div>
<div className="flow"><span>Omni-channel intake</span><svg className="i"><use href="#arr"/></svg><span>Context &amp; intent</span><svg className="i"><use href="#arr"/></svg><span>Platform processing</span></div></div></section>

<section id="platform" className="soft"><div className="wrap"><div className="hd"><div><div className="no"><b>03</b> Core solution</div><h2>Ogya Intelligent Automation Platform</h2></div><p>Kapabilitas yang terlihat bisnis ditopang lapisan teknis untuk alur, AI, data, integrasi, keamanan, dan evaluasi.</p></div>
<div className="shell">
 <div className="shellhead"><h3>One integrated automation core</h3><p>Orchestrate AI, workflow, tools, people, and enterprise systems in one governed flow.</p></div>
 <div className="lbl">Platform capabilities · What the platform does</div>
 <div className="row c6" style={{gap:8}}>
  <div className="cap"><span className="ico"><svg className="i"><use href="#chat"/></svg></span><b>Interact</b><small>Interaksi lintas kanal</small></div>
  <div className="cap"><span className="ico"><svg className="i"><use href="#scan"/></svg></span><b>Understand</b><small>Pahami dokumen &amp; data</small></div>
  <div className="cap"><span className="ico"><svg className="i"><use href="#chart"/></svg></span><b>Analyze</b><small>Olah informasi &amp; insight</small></div>
  <div className="cap"><span className="ico"><svg className="i"><use href="#gear"/></svg></span><b>Execute</b><small>Jalankan aksi &amp; proses</small></div>
  <div className="cap"><span className="ico"><svg className="i"><use href="#plug"/></svg></span><b>Connect</b><small>Integrasi sistem &amp; layanan</small></div>
  <div className="cap"><span className="ico"><svg className="i"><use href="#users"/></svg></span><b>Assign &amp; Escalate</b><small>Alihkan tugas &amp; tindak lanjut</small></div>
 </div>
 <div className="pipe"></div>
 <div className="route"><svg className="i"><use href="#route"/></svg><div><b>Dynamic Context Routing</b><small>Memilih kapabilitas, model, tools, data, dan jalur eksekusi berdasarkan intent, konteks, otorisasi, serta kebijakan.</small></div></div>
 <div className="pipe"></div>
 <div className="lbl">Platform foundation · How the platform is built</div>
 <div className="row c7">
  <div className="fd"><svg className="i"><use href="#swap"/></svg><b>Channel Ingestion</b><small>Omnichannel intake</small></div>
  <div className="fd"><svg className="i"><use href="#flow"/></svg><b>Workflow &amp; Orchestration</b><small>Process control</small></div>
  <div className="fd"><svg className="i"><use href="#db"/></svg><b>AI Ready Data</b><small>Trusted data access</small></div>
  <div className="fd"><svg className="i"><use href="#layers"/></svg><b>Knowledge Base &amp; Tools</b><small>Context and actions</small></div>
  <div className="fd"><svg className="i"><use href="#spark"/></svg><b>AI Gateway</b><small>Model routing</small></div>
  <div className="fd"><svg className="i"><use href="#lock"/></svg><b>Identity &amp; Governance</b><small>Access and policy</small></div>
  <div className="fd"><svg className="i"><use href="#pulse"/></svg><b>Observability &amp; Evaluation</b><small>Monitoring and quality</small></div>
 </div>
</div></div></section>

<section id="business-needs"><div className="wrap"><div className="hd"><div><div className="no"><b>04</b> Business value</div><h2>Model kebutuhan bisnis yang dapat di-address</h2></div><p>Enam model kebutuhan yang dapat dikombinasikan dalam satu solusi sesuai prioritas organisasi.</p></div>
<div className="row c3">
<article className="card"><span className="ico"><svg className="i"><use href="#chat"/></svg></span><h3>Engagement</h3><p>Interaksi cerdas dengan pelanggan, mitra, dan masyarakat.</p></article>
<article className="card"><span className="ico"><svg className="i"><use href="#scan"/></svg></span><h3>Document AI</h3><p>Ekstraksi, klasifikasi, dan validasi informasi dari berbagai dokumen.</p></article>
<article className="card"><span className="ico"><svg className="i"><use href="#gear"/></svg></span><h3>Operations</h3><p>Otomasi proses operasional: alur kerja, approval, dan tindak lanjut.</p></article>
<article className="card"><span className="ico"><svg className="i"><use href="#shield"/></svg></span><h3>Risk &amp; Decision</h3><p>Deteksi, penilaian, dan rekomendasi keputusan berbasis data dan AI.</p></article>
<article className="card"><span className="ico"><svg className="i"><use href="#plug"/></svg></span><h3>Integration</h3><p>Terhubung dengan berbagai sistem, data, dan layanan pihak ketiga.</p></article>
<article className="card"><span className="ico"><svg className="i"><use href="#chart"/></svg></span><h3>Insight</h3><p>Pemantauan kinerja, analitik operasional, dan wawasan perbaikan berkelanjutan.</p></article>
</div></div></section>

<section id="ecosystem" className="soft"><div className="wrap"><div className="hd"><div><div className="no"><b>05</b> Existing ecosystem</div><h2>Berdiri di atas sistem yang sudah ada</h2></div><p>Menghubungkan dan memperluas ekosistem teknologi organisasi, tanpa mengganti database atau aplikasi inti.</p></div>
<div className="row c3 eco">
<article className="card"><span className="ico"><svg className="i"><use href="#db"/></svg></span><h3>Database</h3><p>Akses data operasional dan referensi sesuai hak akses dan kebutuhan proses.</p><div className="ex">Oracle · SQL Server · PostgreSQL · MySQL · dll.</div></article>
<article className="card"><span className="ico"><svg className="i"><use href="#app"/></svg></span><h3>Aplikasi Internal</h3><p>Integrasi proses dengan aplikasi bisnis yang telah digunakan organisasi.</p><div className="ex">ERP · CRM · Core Applications · Internal Portals</div></article>
<article className="card"><span className="ico"><svg className="i"><use href="#swap"/></svg></span><h3>Layanan Eksternal</h3><p>Konektivitas dengan partner, platform eksternal, dan layanan pihak ketiga.</p><div className="ex">API · Host to Host Partner · External Services</div></article>
</div>
<div className="claim"><strong>Technical value:</strong> mempercepat otomasi dan integrasi dengan memanfaatkan investasi teknologi yang ada—dengan kontrol identitas, kebijakan akses, audit, dan observability.</div></div></section>

<section id="cta"><div className="wrap"><div className="cta"><div><h2>Mulai dari satu use case. Kembangkan menjadi ekosistem otomasi.</h2><p>Identifikasi proses prioritas, kanal, sumber data, dan sistem yang terlibat untuk menentukan konfigurasi solusi yang paling tepat.</p></div><a className="btn" href="kontak.html">Diskusikan kebutuhan <svg className="i"><use href="#ne"/></svg></a></div></div></section>
</main>
<footer className="foot"><div className="wrap footin"><div><strong>Ogya.</strong> Intelligent Automation Platform<br/>PT Ogya Tekno Nusantara</div><div className="footlinks"><a href="produk.html">Produk</a><a href="solusi.html">Solusi</a><a href="arsitektur-kapabilitas.html">Arsitektur &amp; Kapabilitas</a><a href="kontak.html">Kontak</a></div><div>© 2026 Ogya</div></div></footer>
<button className="back-top" id="backTop" aria-label="Kembali ke atas" title="Kembali ke atas"><svg className="i"><use href="#up"/></svg></button>
<Behavior/>
</>)}

