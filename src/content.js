export const KONTAK = {
  perusahaan: 'PT Ogya Teknologi Nusantara',
  alamat: 'EightyEight@Kasablanka Office Tower, Jl. Raya Casablanca No.88 Lt.3 Unit A, RT.16/RW.5, Menteng Dalam, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870',
  telepon: '(021) 21283096',
  email: '[email]',
}

export const kontakSiap = () => !KONTAK.email.startsWith('[')

export const SOLUTIONS = [
  {
    kicker: 'Reinsurance & Life Insurance',
    icon: 'umbrella',
    title: 'Email intelligence untuk identifikasi pembayaran dan auto invoice',
    desc: 'Email masuk dibaca, lampirannya diekstraksi, lalu dicocokkan dengan sumber data resmi. Yang cocok diteruskan ke pembukuan, yang meragukan masuk antrean verifikasi manusia.',
    bullets: [
      'Ekstraksi dokumen: PDF, spreadsheet, gambar, arsip',
      'Pencocokan terhadap register piutang dan utang',
      'Rekap selisih dan tindak lanjutnya',
    ],
    to: null,
  },
  {
    kicker: 'Property & Automotive Insurance',
    icon: 'propertyAuto',
    title: 'Contact center AI untuk appraisal dan klaim',
    desc: 'Pelaporan klaim dilakukan lewat percakapan: foto kerusakan dan dokumen diperiksa kelengkapannya, nilai awal dihitung dengan aturan perusahaan, persetujuan berjenjang berjalan di satu alur.',
    bullets: [
      'Pemeriksaan foto dan dokumen klaim',
      'Aturan bisnis dan pemeriksaan identitas',
      'Approval bertingkat dengan jejak audit',
    ],
    to: null,
  },
  {
    kicker: 'Energy & Electrical Services',
    icon: 'grid',
    title: 'Chatbot AI surveillance untuk pemeliharaan aset dan K3',
    desc: 'Laporan lapangan dan hasil pemantauan visual masuk melalui kanal yang sama, dikenali jenis temuannya, lalu menjadi perintah kerja dengan prioritas dan lokasi yang jelas.',
    bullets: [
      'Analisis citra untuk temuan aset',
      'Data lokasi dan pemetaan area kerja',
      'Tindak lanjut keselamatan kerja terjadwal',
    ],
    to: null,
  },
  {
    kicker: 'FMCG & Distribusi',
    icon: 'shipment',
    title: 'Contact center AI supply chain untuk mitra bisnis',
    desc: 'Mitra retail menanyakan status pesanan, melaporkan keluhan, dan mengajukan retur atau klaim dari satu percakapan, dengan data yang diambil langsung dari sistem logistik dan inventori.',
    bullets: [
      'Pelacakan pengiriman secara real-time',
      'Penanganan komplain dengan SLA terukur',
      'Pengajuan retur, refund, dan klaim kredit',
    ],
    to: '/solusi/supplychain',
  },
  {
    kicker: 'Health Care',
    icon: 'health',
    title: 'Contact center AI untuk layanan pasien',
    desc: 'Pendaftaran, jadwal, tagihan, dan permintaan dokumen hasil pemeriksaan dilayani dari kanal yang dipakai pasien, dengan batas yang tegas: tidak ada saran medis, dan perpindahan ke petugas berlangsung mulus.',
    bullets: [
      'Registrasi, jadwal temu, dan pengingat',
      'Pembayaran dan pertanyaan tagihan',
      'Layanan purna pemeriksaan dan dokumen',
    ],
    to: '/solusi/healthcare',
  },
  {
    kicker: 'Government & Lembaga Publik',
    icon: 'institution',
    title: 'Contact center AI untuk layanan masyarakat dan petugas internal',
    desc: 'Satu platform melayani dua jenis pengguna: masyarakat yang menanyakan prosedur dan status layanan, serta petugas internal yang membutuhkan data, verifikasi, dan pelaporan.',
    bullets: [
      'Jawaban dari dokumen dan aturan resmi',
      'Akses data lewat lapisan semantik',
      'Otomasi verifikasi dan pelaporan petugas',
    ],
    to: null,
  },
]

export const PAINS = [
  {
    title: 'Pekerjaan manual antar sistem',
    text: 'Operator berpindah antar aplikasi untuk satu permintaan: membaca pesan, membuka sistem, memeriksa dokumen, mencatat tiket, lalu membalas.',
  },
  {
    title: 'Layanan 24 jam yang mahal',
    text: 'Pelanggan menuntut respons di luar jam kerja, sementara menambah agen manusia menaikkan biaya secara linier.',
  },
  {
    title: 'SLA yang sulit dibuktikan',
    text: 'Tanpa satu sistem terpusat, eskalasi bergantung pada ingatan orang dan performa tidak terlacak secara konsisten.',
  },
  {
    title: 'Sistem terpisah-pisah',
    text: 'Informasi berpindah melalui banyak aplikasi, spreadsheet, email, dan tim. Orchestration menyatukan langkah itu dalam alur yang terukur.',
  },
  {
    title: 'Kanal pelanggan tersebar',
    text: 'WhatsApp, web, email, portal, dan call center berjalan sendiri-sendiri, sehingga konteks pelanggan terputus di setiap perpindahan.',
  },
  {
    title: 'Hasil sulit diukur',
    text: 'Tanpa data terpusat, tim sulit melihat bottleneck, exception, dan dampak otomasi terhadap SLA.',
  },
]

export const VALUE_PROPS = [
  { icon: 'message', title: 'Omnichannel engagement' },
  { icon: 'workflow', title: 'Workflow orchestration' },
  { icon: 'brain', title: 'AI dan business rules' },
  { icon: 'network', title: 'Integrasi lintas sistem' },
]

export const PLATFORM_MODES = [
  {
    icon: 'message',
    tag: 'Engagement',
    title: 'Omnichannel customer engagement',
    text: 'Satukan WhatsApp, web, email, portal, dan call center. Tangani pertanyaan, status layanan, serta eskalasi dengan konteks yang konsisten.',
  },
  {
    icon: 'document',
    tag: 'Document AI',
    title: 'Intelligent document processing',
    text: 'Ekstrak informasi dari formulir, PDF, email, dan gambar; validasi kelengkapan serta konsistensi; teruskan pengecualian ke petugas.',
  },
  {
    icon: 'workflow',
    tag: 'Operations',
    title: 'Workflow dan approval automation',
    text: 'Orkestrasi SOP, routing berbasis kondisi, SLA, eskalasi, dan human-in-the-loop dari satu alur yang dapat dikonfigurasi.',
  },
  {
    icon: 'brain',
    tag: 'Risk dan decision',
    title: 'AI-assisted risk dan decisioning',
    text: 'Kombinasikan data, business rules, model ML, dan peninjauan manusia untuk membantu scoring, rekomendasi, serta keputusan yang dapat ditelusuri.',
  },
  {
    icon: 'network',
    tag: 'Integration',
    title: 'Enterprise integration dan API',
    text: 'Hubungkan aplikasi lama dan baru, database, layanan eksternal, serta perangkat IoT melalui konektor dan API yang terkelola.',
  },
  {
    icon: 'chart',
    tag: 'Insight',
    title: 'Operational intelligence',
    text: 'Pantau status workflow, SLA, exception, beban kerja, dan metrik operasional untuk mendukung evaluasi serta perbaikan berkelanjutan.',
  },
]

export const SECURITY_CONTROLS = [
  'Role-based access',
  'Audit trail',
  'Data masking',
  'Hybrid AI routing',
  'Human approval',
  'Model governance',
]

export const SECURITY_POINTS = [
  {
    icon: 'shield',
    title: 'Security dan governance',
    text: 'Akses berbasis peran, enkripsi, pembatasan akses, serta pencatatan aktivitas dapat dirancang sesuai kebutuhan implementasi.',
  },
  {
    icon: 'network',
    title: 'Open integration',
    text: 'Terhubung dengan aplikasi, API, database, dan layanan eksternal tanpa mengharuskan semua sistem diganti.',
  },
  {
    icon: 'chart',
    title: 'Biaya dan performa terukur',
    text: 'Atur pemilihan model, caching, dan jalur eksekusi berdasarkan kebutuhan kualitas, latency, serta biaya.',
  },
]

export const ADOPTION_STEPS = [
  { title: 'Pilih pain point', text: 'Tentukan proses yang lambat, repetitif, mahal, atau sulit dipantau.' },
  { title: 'Hubungkan kanal dan data', text: 'Integrasikan input dan sumber data yang relevan dengan akses terkontrol.' },
  { title: 'Otomasi proses', text: 'Mulai dengan workflow dan rule deterministik; tambahkan AI sesuai kebutuhan.' },
  { title: 'Libatkan manusia', text: 'Atur approval dan eskalasi untuk pengecualian atau keputusan berisiko.' },
  { title: 'Ukur dan kembangkan', text: 'Evaluasi SLA, kualitas, biaya, dan exception sebelum memperluas cakupan.' },
]

export const DIFFERENTIATORS = [
  { title: 'Agent dipakai ulang', text: 'Yang dikustomisasi hanya pengetahuan, aturan, dan konektor domain Anda.' },
  { title: 'Terhubung ke sistem apa pun', text: 'ERP, core system, database, email, dan layanan pihak ketiga lewat satu lapisan integrasi.' },
  { title: 'Hemat dan terkendali', text: 'Model lokal dan cloud dipakai berdampingan; rute, cache, dan biaya diatur di gateway.' },
  { title: 'Dapat diaudit', text: 'Setiap jawaban, pemanggilan sistem, dan keputusan model terekam dan dapat dievaluasi.' },
]

export const BLOCKS = [
  {
    num: '01',
    icon: 'channels',
    name: 'Channels & Ingestion',
    desc: 'Menerima masukan omnichannel berupa teks, suara, gambar, dan dokumen; menormalkannya menjadi satu bentuk kerja; menjalankan pengenalan tulisan dan pembacaan citra; serta menetapkan identitas sesi dari sistem identitas resmi, bukan dari isi percakapan.',
    side: 'Kanal pesan resmi, SDK web dan mobile, email gateway, telepon dan IVR, pembacaan dokumen dan citra, normalisasi sesi.',
  },
  {
    num: '02',
    icon: 'governance',
    name: 'Agent Manager & Governance',
    desc: 'Bidang kendali platform: setiap agent memiliki identitas sendiri, kebijakan dan guardrail ditetapkan terpusat, anggaran token dibatasi per tim, siklus hidup agent dikelola, dan seluruh aktivitas dapat diaudit lintas unit.',
    chip: 'Titik keputusan: kontrak layanan dan kebijakan akses',
    side: 'Identitas agent, mesin kebijakan, registry kontrak berversi, batas anggaran, persetujuan manusia untuk aksi berisiko.',
  },
  {
    num: '03',
    icon: 'orchestration',
    name: 'Orchestration & Multi-Agent',
    desc: 'Menyimpan status percakapan, memutuskan langkah berikutnya, menjalankan koreksi berulang ketika hasil belum memenuhi syarat, menyerahkan ke manusia pada titik yang ditentukan, dan mengatur kolaborasi antar agent.',
    chip: 'Titik keputusan: maksud, pemilihan agent, fallback, eskalasi',
    side: 'Graf alur kerja dengan status, percabangan bersyarat, node evaluator, antrean penyerahan ke petugas, mesin alur kerja dan penghitung SLA.',
  },
  {
    num: '04',
    icon: 'knowledge',
    name: 'Knowledge & Tools',
    desc: 'Knowledge base deterministik yang hanya menjawab dari sumber yang disetujui, lapisan semantik untuk mengambil angka dari basis data secara konsisten, serta konektor aksi ke sistem internal dan layanan pihak ketiga.',
    chip: 'Titik keputusan: sumber mana yang berwenang menjawab',
    side: 'Penyimpanan vektor dan pencarian hibrida, lapisan semantik, katalog tools, konektor sistem perusahaan, sitasi pada setiap jawaban.',
  },
  {
    num: '05',
    icon: 'gateway',
    name: 'AI Gateway & Model Infrastructure',
    desc: 'Semua panggilan model lewat satu pintu: pemilihan model sesuai beban tugas, cache berbasis makna, failover antar penyedia, pembatasan kuota, kendali biaya, dan pengelolaan kunci akses.',
    chip: 'Titik keputusan: model yang proporsional dan kapan cache menjawab',
    side: 'Model lokal untuk tugas ringan dan data sensitif, model besar untuk penalaran rumit, model khusus citra dan dokumen, embedding dan reranker.',
  },
  {
    num: '06',
    icon: 'observability',
    name: 'Observability & Evaluation',
    desc: 'Jejak berlapis untuk setiap permintaan, penilaian kualitas jawaban secara berkala, pengelolaan dan pengujian prompt, serta pencatatan biaya per transaksi. Lapisan ini melintang di seluruh blok lain.',
    chip: 'Titik keputusan: jejak rute dan uji regresi tiap perubahan',
    side: 'Instrumentasi berbasis standar terbuka, dataset uji, penilaian otomatis dan anotasi manusia, dasbor biaya dan kualitas.',
  },
]

export const ROUTING_ROWS = [
  {
    decision: 'Kontrak dan kebijakan',
    owner: 'Agent Manager',
    guard: 'Siapa boleh mengakses apa, data mana yang tidak boleh keluar, aksi mana yang butuh persetujuan',
  },
  {
    decision: 'Maksud, agent, dan eskalasi',
    owner: 'Orchestration',
    guard: 'Permintaan sampai ke penangan yang tepat, dan naik ke manusia saat keyakinan rendah',
  },
  {
    decision: 'Sumber yang berwenang',
    owner: 'Knowledge & Tools',
    guard: 'Jawaban hanya dari sumber yang disetujui, dengan kesegaran data yang ditentukan',
  },
  {
    decision: 'Cache dan pemilihan model',
    owner: 'AI Gateway',
    guard: 'Biaya tetap proporsional tanpa melanggar batas kontrak dan peran',
  },
  {
    decision: 'Jejak rute dan evaluasi',
    owner: 'Observability',
    guard: 'Setiap keputusan dapat ditelusuri dan diuji ulang sebelum perubahan dirilis',
  },
]

export const STEPS = [
  { num: 'Langkah 1', title: 'Masuk dan dibaca', text: 'Kanal menerima pesan, gambar dibaca menjadi teks, identitas sesi ditetapkan.' },
  { num: 'Langkah 2', title: 'Diperiksa haknya', text: 'Kebijakan menentukan data apa yang boleh diakses dan ke mana boleh diproses.' },
  { gateway: true, num: 'Langkah 3', title: 'Dialirkan', text: 'Alur kerja membuat status, menilai kelengkapan, dan mengulang koreksi bila perlu.' },
  { gateway: true, num: 'Langkah 4', title: 'Dicari dan dieksekusi', text: 'Aturan diambil dari knowledge base, data dari lapisan semantik, aksi lewat konektor.' },
  { num: 'Langkah 5', title: 'Dicatat dan dinilai', text: 'Seluruh langkah terekam: rute, model, biaya, dan mutu jawaban.' },
]

export const CAPABILITIES = [
  {
    title: 'Omnichannel dan ruang kerja agen',
    text: 'Satu kotak masuk untuk semua kanal, tiket dan riwayat pelanggan menyatu, saran jawaban untuk agen, serta penyerahan dari AI ke manusia dengan konteks penuh.',
  },
  {
    title: 'Knowledge base sebagai produk',
    text: 'Versi, alur persetujuan, sitasi pada setiap jawaban, serta pemeriksaan rutin untuk menemukan konten usang, saling bertentangan, atau belum terjawab.',
  },
  {
    title: 'Workflow, SLA, dan eskalasi',
    text: 'Status tiket dipegang mesin alur kerja, bukan oleh model: penghitung SLA, eskalasi bertingkat, dan fallback bila unit tujuan tidak merespons.',
  },
  {
    title: 'Monitoring dan evaluasi AI',
    text: 'Jejak lengkap per percakapan, proporsi yang selesai tanpa manusia, alasan eskalasi, guardrail yang terpicu, dan biaya per percakapan.',
  },
  {
    title: 'Keamanan dan identitas',
    text: 'Peran dan hak akses, autentikasi bertingkat, enkripsi, penyamaran data pribadi, serta identitas tersendiri untuk setiap agent dengan jejak audit.',
  },
  {
    title: 'Skalabilitas dan kontinuitas',
    text: 'Multi-tenant, penskalaan otomatis, lingkungan uji terpisah, rencana pemulihan bencana, serta kepemilikan penuh atas data dan jalur keluar yang jelas.',
  },
  {
    title: 'Pemrosesan dokumen dan citra',
    text: 'OCR, NLP, dan vision mengubah formulir, PDF, email, serta gambar menjadi data terstruktur untuk validasi dan proses lanjutan.',
  },
  {
    title: 'Integrasi, API, dan RPA',
    text: 'Sistem modern terhubung lewat API; aplikasi yang belum punya antarmuka memadai diotomasi lewat RPA dengan kontrol yang sama.',
  },
]

export const ARCH_ENTRY_POINTS = [
  { icon: 'message', label: 'WhatsApp dan chat' },
  { icon: 'message', label: 'Web dan mobile' },
  { icon: 'document', label: 'Dokumen' },
  { icon: 'network', label: 'Partner API' },
  { icon: 'workflow', label: 'Aplikasi existing' },
]

export const ARCH_ROUTING_STEPS = [
  { num: '01', title: 'Pahami', text: 'Klasifikasikan intent, tugas, kanal, dan hasil yang diminta.' },
  { num: '02', title: 'Otorisasi', text: 'Verifikasi identitas, hak akses, tujuan penggunaan, dan batas data.' },
  { num: '03', title: 'Temukan konteks', text: 'Temukan sumber relevan: SQL, dokumen, vector, graph, atau API.' },
  { num: '04', title: 'Pilih rute', text: 'Pilih tool, model, workflow, dan urutan eksekusi sesuai kebijakan.' },
  { num: '05', title: 'Validasi', text: 'Periksa bukti, aturan bisnis, konsistensi, dan tingkat keyakinan.' },
  { num: '06', title: 'Respons atau tindakan', text: 'Kirim jawaban atau jalankan aksi; gunakan HITL untuk pengecualian.' },
]

export const ARCH_BLOCKS = [
  {
    num: '01',
    kicker: 'Interact',
    icon: 'message',
    name: 'Conversational AI',
    desc: 'Memahami pertanyaan dan konteks percakapan, menjaga konteks sesi, serta menyiapkan respons atau handoff ke proses berikutnya.',
    input: 'Chat, transkrip suara, konteks pengguna',
    output: 'Intent, respons, tindakan berikutnya',
  },
  {
    num: '02',
    kicker: 'Understand',
    icon: 'document',
    name: 'Document Intelligence',
    desc: 'OCR, ekstraksi, klasifikasi dokumen, validasi field, dan pengelolaan exception untuk data yang berasal dari dokumen.',
    input: 'PDF, gambar, formulir, email',
    output: 'Field terstruktur, penanda validasi',
  },
  {
    num: '03',
    kicker: 'Analyze',
    icon: 'chart',
    name: 'Auto Insight dan Reporting',
    desc: 'Mengubah data terverifikasi menjadi analisis, ringkasan, laporan, dan visualisasi dengan definisi metrik yang konsisten.',
    input: 'Dataset yang disetujui, metrik',
    output: 'Grafik, insight, laporan',
  },
  {
    num: '04',
    kicker: 'Execute',
    icon: 'workflow',
    name: 'Workflow Automation',
    desc: 'Mengatur urutan proses, branching, retry, SLA, approval, notifikasi, dan eskalasi sesuai SOP perusahaan.',
    input: 'Event, aturan, status tugas',
    output: 'Tugas selesai, status, audit',
  },
  {
    num: '05',
    kicker: 'Connect',
    icon: 'network',
    name: 'Data Integration',
    desc: 'Menghubungkan aplikasi internal, database, layanan eksternal, event, dan perangkat melalui API atau konektor terkontrol.',
    input: 'Query atau perintah yang diizinkan',
    output: 'Respons data, aksi sistem',
  },
  {
    num: '06',
    kicker: 'Direct',
    icon: 'route',
    name: 'Intelligent Routing',
    desc: 'Mengarahkan permintaan ke tim, queue, kanal, atau proses yang sesuai berdasarkan intent, prioritas, SLA, dan kebijakan.',
    input: 'Intent, prioritas, konteks',
    output: 'Rute, queue, eskalasi',
  },
]

export const ARCH_FABRIC = [
  { name: 'SQL dan semantic layer', text: 'Fakta terstruktur dan metrik' },
  { name: 'Vector dan knowledge graph', text: 'Retrieval semantik dan relasi' },
  { name: 'Dokumen dan search', text: 'Kebijakan dan bukti tidak terstruktur' },
  { name: 'API dan sistem bisnis', text: 'Transaksi dan tindakan' },
]

export const ARCH_OUTPUTS = [
  'Validasi bukti',
  'Respons atau eksekusi',
  'Audit dan pemantauan',
]

export const ARCH_SCENARIOS = [
  {
    icon: 'message',
    kicker: 'Skenario 01',
    title: 'Status klaim via WhatsApp',
    flow: ['WhatsApp', 'Pemeriksaan identitas', 'Claims API', 'Balasan'],
    text: 'Conversational AI memahami pertanyaan; routing memilih API transaksi sebagai sumber otoritatif. Workflow menangani eskalasi jika data tidak ditemukan. Vector search tidak diperlukan untuk lookup sederhana.',
  },
  {
    icon: 'document',
    kicker: 'Skenario 02',
    title: 'Verifikasi dokumen pengajuan',
    flow: ['Unggah', 'OCR', 'Cross-check', 'HITL'],
    text: 'Document Intelligence mengekstrak field; SQL atau API memeriksa data; rules mengevaluasi kelengkapan. Kontradiksi atau confidence rendah diarahkan ke petugas.',
  },
  {
    icon: 'chart',
    kicker: 'Skenario 03',
    title: 'Analisis penjualan eksekutif',
    flow: ['Portal', 'Semantic layer', 'SQL', 'Grafik'],
    text: 'Routing memeriksa akses dan definisi metrik, mengambil data terstruktur, lalu Auto Insight menyajikan grafik dan narasi dengan provenance. LLM membantu menjelaskan, bukan mengarang angka.',
  },
]

export const ARCH_LAYERS = [
  { num: '01', title: 'Channel dan intake', text: 'WhatsApp · Web · Mobile · Email · API · Kiosk' },
  { num: '02', title: 'Workflow dan orchestration', text: 'State · Routing · SLA · Retry · HITL · Notification' },
  { num: '03', title: 'Intelligence dan decisioning', text: 'AI agents · OCR/NLP · Rules · ML · RPA' },
  { num: '04', title: 'Integration, data, dan core systems', text: 'API gateway · Database · ERP/CRM/HIS · IoT · Partner systems' },
]

export const ARCH_CONTROLS = [
  'Identity dan RBAC',
  'Data minimization',
  'Audit dan provenance',
  'Tool allowlist',
  'Model dan rule versioning',
  'HITL dan fallback',
]

export const ARCH_PRINCIPLES = [
  {
    icon: 'database',
    title: 'Fakta terstruktur ke SQL atau API',
    text: 'Untuk transaksi, status, angka, dan data yang memiliki sumber otoritatif.',
  },
  {
    icon: 'document',
    title: 'Pengetahuan tidak terstruktur ke search atau RAG',
    text: 'Untuk dokumen, kebijakan, panduan, dan pengetahuan berbasis teks.',
  },
  {
    icon: 'workflow',
    title: 'Tindakan deterministik ke rules atau workflow',
    text: 'Untuk validasi, keputusan berbatas, proses yang dapat diaudit, dan aksi yang memerlukan otorisasi.',
  },
]

export const EFFICIENCY = [
  {
    title: 'Pemilihan model adaptif',
    text: 'Tugas ringan seperti klasifikasi dan ekstraksi ditangani model kecil; hanya penalaran rumit yang naik ke model besar.',
  },
  {
    title: 'Semantic cache dan efisiensi konteks',
    text: 'Pertanyaan berulang dijawab dari cache, dan konteks dipadatkan sebelum dikirim ke model.',
  },
  {
    title: 'Hybrid AI lokal dan cloud',
    text: 'Data sensitif diproses model lokal milik perusahaan; model cloud hanya menerima konteks yang sudah disamarkan.',
  },
  {
    title: 'Tanpa vendor lock-in',
    text: 'Model, penyedia, dan lokasi penempatan dapat diganti kapan saja; backbone berbasis komponen terbuka.',
  },
]

export const DEPLOYMENT = [
  {
    heading: 'Penempatan',
    items: [
      ['AI lokal di cloud Anda', ': model berjalan pada GPU di lingkungan milik perusahaan, biaya relatif tetap dan data tidak keluar.'],
      ['AI cloud API', ': tanpa penyiapan awal, cocok untuk tahap pembuktian atau volume yang belum stabil.'],
      ['On-premise penuh', ': untuk kebutuhan kedaulatan data dan kendali menyeluruh.'],
      ['Hybrid', ': model lokal untuk data sensitif, model cloud untuk penalaran berat.'],
    ],
  },
  {
    heading: 'Bentuk kerja sama',
    items: [
      ['Managed service', ': platform, operasi, dan dukungan 24/7 dengan SLA dan tingkat eskalasi yang disepakati.'],
      ['Project based', ': biaya kustomisasi dan integrasi, infrastruktur disediakan perusahaan.'],
      ['Buy as software', ': lisensi perpetual atau berlangganan, dipasang di lingkungan Anda sendiri.'],
      ['Semuanya dapat dimulai dari pembuktian konsep berjangka pendek sebelum komitmen penuh.', ''],
    ],
  },
]

export const COST_ROWS = [
  {
    component: 'Kustomisasi dan implementasi',
    sifat: 'Satu kali',
    scale: 'Jumlah jenis layanan, kerumitan alur proses, kesiapan antarmuka sistem existing, variasi dataset knowledge base',
  },
  {
    component: 'Layanan pihak ketiga dan lisensi',
    sifat: 'Berulang',
    scale: 'Volume percakapan kanal resmi, menit telepon, lisensi middleware, pemakaian model cloud',
  },
  {
    component: 'Infrastruktur',
    sifat: 'Berulang',
    scale: 'Percakapan harian dan beban puncak, jumlah pengguna, volume dan masa simpan data, target waktu respons, tingkat ketersediaan',
  },
  {
    component: 'Dukungan 24/7',
    sifat: 'Berulang',
    scale: 'Volume yang tidak tertangani AI, tingkat SLA dan eskalasi, jumlah tenaga dan pola shift, cakupan kurasi knowledge base',
  },
  {
    component: 'Keamanan dan kepatuhan',
    sifat: 'Berulang',
    scale: 'Lingkup pengujian keamanan, masa simpan jejak audit, kewajiban residensi data',
  },
]

export const HEALTHCARE_DAILY = [
  {
    title: 'Pertanyaan berulang selesai sendiri',
    text: 'Jam layanan, prosedur, persyaratan dokumen, dan status antrean dijawab langsung dari knowledge base yang disetujui, lengkap dengan rujukan sumbernya.',
  },
  {
    title: 'Transaksi berjalan di dalam percakapan',
    text: 'Membuat, mengubah, dan membatalkan jadwal temu, memeriksa tagihan, serta meminta dokumen hasil pemeriksaan. Semuanya menulis ke sistem resmi, bukan ke catatan terpisah.',
  },
  {
    title: 'Petugas menerima konteks, bukan percakapan mentah',
    text: 'Saat percakapan naik ke manusia, petugas menerima ringkasan, riwayat, dokumen yang sudah diperiksa, dan saran tindakan berikutnya.',
  },
  {
    title: 'SLA terukur dan dapat dibuktikan',
    text: 'Tiket, penghitung waktu, dan eskalasi bertingkat dipegang mesin alur kerja, sehingga laporan performa berasal dari data, bukan rekapitulasi manual.',
  },
]

export const HEALTHCARE_BOUNDS = [
  'Tidak memberi diagnosis, resep, atau saran terapi. Ini ditegakkan sebagai kebijakan di gateway, bukan sekadar instruksi pada prompt',
  'Data pribadi disamarkan sebelum meninggalkan lingkungan yang ditentukan',
  'Jawaban hanya dari sumber yang disetujui, dengan rujukan yang dapat diperiksa',
  'Setiap kebijakan yang terpicu tercatat dan dapat ditunjukkan saat audit',
]

export const COMP_PLATFORM = [
  'Agent percakapan berbasis knowledge base dengan sitasi',
  'Agent data terstruktur melalui lapisan semantik',
  'Agent transaksional untuk membuat dan mengubah janji temu',
  'Pembacaan dokumen dan citra untuk berkas rujukan',
  'Kotak masuk terpadu, tiket, dan ruang kerja petugas',
  'Monitoring, evaluasi, dan pelaporan biaya AI',
]

export const COMP_CUSTOM = [
  'Isi knowledge base: layanan, jadwal, tarif, prosedur, formulir',
  'Skema lapisan semantik ke basis data operasional',
  'Konektor ke sistem informasi, laboratorium, radiologi, farmasi, dan pembayaran',
  'Persona, bahasa, dan batas ruang lingkup jawaban',
  'Matriks routing dan eskalasi antar unit',
  'Kumpulan uji untuk pemeriksaan mutu sebelum rilis',
]

export const STAGES = [
  { kicker: 'Tahap 1', title: 'Pemetaan', text: 'Proses, sistem existing, sumber pengetahuan, serta aturan eskalasi dipetakan bersama tim Anda.' },
  { kicker: 'Tahap 2', title: 'Pembuktian konsep', text: 'Satu alur nyata dijalankan di lingkungan Anda untuk mengukur beban kerja dan mutu jawaban.' },
  { kicker: 'Tahap 3', title: 'Implementasi', text: 'Konektor, knowledge base, alur kerja, dan ruang kerja petugas disiapkan lalu diuji terima.' },
  { kicker: 'Tahap 4', title: 'Operasi', text: 'Dukungan bertingkat, kurasi knowledge base berkala, serta evaluasi mutu dan biaya.' },
]

export const BEFORE_AFTER = {
  before: {
    heading: 'Kondisi awal',
    items: [
      ['Lambat', ': waktu respons bergantung pada kecepatan operator berpindah antar aplikasi'],
      ['Rawan salah', ': pengecekan dan pencatatan manual menaikkan risiko kesalahan data'],
      ['Sulit diukur', ': tanpa satu sistem terpusat, SLA dan performa tidak terlacak konsisten'],
    ],
  },
  after: {
    heading: 'Setelah diotomasi',
    items: [
      ['Lapisan pendukung', ': bukan mengganti sistem yang ada, melainkan menghubungkannya lewat integrasi'],
      ['Antarmuka tunggal', ': mitra cukup memakai satu kanal pesan untuk semua keperluan'],
      ['Terukur', ': tiket, penghitung SLA, dan dasbor berjalan di atas data yang sama'],
    ],
  },
}

export const PROCESSES = [
  {
    kicker: 'Proses A',
    title: 'Penanganan komplain',
    desc: 'Keluhan soal kualitas produk, kerusakan, salah kirim, keterlambatan, atau tagihan masuk lewat kanal pesan. AI mengklasifikasi jenis keluhan dan mengekstrak entitas pentingnya, lalu tiket masuk antrean petugas dengan prioritas yang sudah terisi.',
    note: 'Penugasan dan penutupan tiket mengikuti SLA yang disepakati, bukan ingatan petugas.',
  },
  {
    kicker: 'Proses B',
    title: 'Pelacakan pengiriman',
    desc: 'Mitra atau tim lapangan menanyakan status pesanan tanpa menghubungi operator. Nomor pesanan dikenali otomatis dari percakapan, status dan perkiraan tiba diambil langsung dari sistem logistik, lalu dikirim kembali beserta tautan pelacakan.',
    note: 'Layanan mandiri 24 jam dengan respons seketika.',
  },
  {
    kicker: 'Proses C',
    title: 'Refund dan klaim',
    desc: 'Pengajuan pengembalian dana atau klaim kredit atas barang yang tidak sesuai, rusak, atau tidak terkirim. Dokumen diperiksa kelengkapannya oleh AI, petugas memverifikasi dan mengisi nilai, lalu supervisor menyetujui atau menolak.',
    note: 'Transparan, terukur, dan dapat dilacak di setiap tahap.',
  },
]

export const EXPERIENCES = [
  { title: 'Dikenali otomatis', text: 'Mitra dikenali dari nomor terdaftar, tanpa perlu mengetik nomor resi atau nomor pesanan secara manual.' },
  { title: 'Transaksi aktif ditampilkan', text: 'Bila ada beberapa pesanan berjalan, semuanya ditampilkan agar mitra tinggal memilih yang ingin dilacak.' },
  { title: 'Memahami lampiran', text: 'Foto barang, dokumen pengiriman, dan berkas pendukung dibaca langsung di dalam percakapan.' },
]

export const INTEGRATIONS = [
  { title: 'Sistem logistik', text: 'Status pengiriman dan posisi armada secara real-time untuk menjawab pertanyaan pelacakan.' },
  { title: 'Sistem inventori', text: 'Rincian spesifikasi barang berdasarkan pesanan atau pengiriman untuk memverifikasi komplain.' },
  { title: 'Sistem keuangan dan penagihan', text: 'Nilai tagihan, nota kredit, dan status pembayaran untuk memproses refund serta klaim.' },
]

export const PORTAL_ITEMS = [
  'Antrean tiket, penugasan, dan penyelesaian',
  'Verifikasi dokumen dan pengisian nilai refund',
  'Persetujuan supervisor dengan jejak audit',
  'Dasbor volume, SLA, dan jenis keluhan',
  'Pemantauan biaya AI per periode',
]

export const NEED_FACTORS = [
  { title: 'Volume pesan harian', text: 'Rata-rata dan beban puncak menentukan ukuran infrastruktur.' },
  { title: 'Jumlah mitra aktif', text: 'Banyaknya pengguna yang berinteraksi secara rutin di kanal pesan.' },
  { title: 'Kesiapan integrasi', text: 'Ketersediaan antarmuka pada sistem logistik, inventori, dan keuangan.' },
  { title: 'Masa simpan data', text: 'Lama penyimpanan percakapan, dokumen, dan jejak audit.' },
]

export const INFRA_OPTIONS = [
  {
    opsi: 'AI lokal, GPU sewa',
    model: 'Model terbuka di GPU sewaan',
    token: 'Tidak ada',
    cocok: 'Privasi kuat tanpa belanja modal di muka',
  },
  {
    opsi: 'AI cloud API',
    model: 'Layanan model pihak ketiga',
    token: 'Per pemakaian',
    cocok: 'Tahap pembuktian konsep dan volume yang belum stabil',
  },
  {
    opsi: 'On-premise penuh',
    model: 'Model terbuka di server sendiri',
    token: 'Tidak ada',
    cocok: 'Volume besar jangka panjang dengan tim IT yang siap',
  },
  {
    opsi: 'AI lokal di cloud perusahaan',
    model: 'Model terbuka di GPU milik perusahaan',
    token: 'Tidak ada',
    cocok: 'Satu platform, satu tagihan, biaya yang dapat diprediksi',
  },
]
