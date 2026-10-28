# DESIGN.md: arah desain Ogya AI Platform

Arah desain ini bukan karangan agen. Seluruh nilainya ditranskrip dari rancangan
awal pemilik di `03_Website_Produk/project/` (canvas "Website Produk Ogya AI
Platform", 22 Oktober 2026). Agen hanya merapikan, tidak menambah selera.

## Identitas

Platform agentic AI untuk operasi layanan, dijual ke pembeli korporat dan
lembaga publik di Indonesia: asuransi, reasuransi, energi, distribusi FMCG,
rumah sakit, dan instansi pemerintah.

Pemilik: PT Ogya Teknologi Nusantara.

Pembacanya bukan pengunjung yang lewat. Mereka kepala IT, kepala operasi, dan
tim pengadaan yang sedang membandingkan vendor, dan yang mereka cari adalah
jawaban atas pertanyaan teknis: terhubung ke sistem apa, biayanya dihitung dari
apa, datanya diproses di mana.

## Karakter

Tenang, padat, dan bisa dibuktikan. Situs ini menang karena isinya lengkap dan
jujur, bukan karena tampilannya ramai. Setiap klaim di halaman punya penjelasan
mekanismenya di bawahnya.

Tidak ada foto stok dan tidak ada statistik. Pemilik tidak menyertakan satu pun
di rancangan awal, dan itu konsisten: produknya belum punya angka publik yang
bisa dikutip, dan belum punya tangkapan layar produk yang jujur untuk dipajang.

Gambar yang dipakai hanya yang isinya memang ada di teks: ikon yang menerangkan
fungsi sebuah lapisan atau industri, dan satu jalur yang menggambarkan urutan
langkah. Keduanya tidak menambah klaim apa pun.

## Palet

Dua warna inti, satu aksen, sisanya netral. Diambil dari frekuensi pemakaian di
keempat board.

| Peran | Nilai | Dipakai untuk |
|---|---|---|
| Inti, gelap | `#0B1B3A` navy | Teks utama, dan latar blok penuh yang memotong halaman |
| Inti, terang | `#FFFFFF` | Latar dasar halaman |
| Aksen | `#C2410C` oranye bata | Nomor urut, eyebrow, tautan solusi, fokus di latar terang |
| Aksen di gelap | `#F0A480` | Versi terang aksen, untuk semua permukaan navy. `#C2410C` di atas navy hanya 3.29, dan di atas `--navy-2` 2.72, gagal bahkan ambang grafis 3:1 |
| Netral | `#F5F7FB` | Latar section lunak |
| Netral | `#DCE3EF`, `#ECF0F7` | Garis batas di latar terang |
| Netral | `#7E92C6` | Batas kontrol di latar gelap: border tombol garis dan input |
| Netral | `#4A5872` | Teks sekunder di latar terang |
| Netral | `#C8D6EE`, `#9FB6DC` | Teks sekunder di latar navy |

Aksen oranye muncul sedikit dan di tempat yang sama setiap kali: penanda urutan
dan penanda tujuan. Ia tidak pernah jadi latar, tidak pernah jadi tombol utama.

## Tema

Terang, tetap, tanpa tombol ganti gelap.

Alasannya bukan malas: bahasa visual situs ini adalah halaman putih yang dipotong
blok navy penuh pada momen-momen penting (hero, arsitektur, routing, kontak).
Blok itu bekerja karena ada terang di sekitarnya. Membalik seluruh halaman jadi
gelap menghapus kontras yang jadi identitasnya, bukan menambah pilihan.

## Tipografi

- Judul: Space Grotesk, 700, `letter-spacing: -0.02em`
- Teks: Inter, 400 sampai 600

Dipilih pemilik di rancangan awal. Space Grotesk punya potongan huruf yang agak
mekanis pada angka dan huruf besar, dan halaman ini penuh angka urut (01 sampai
06, Tahap 1 sampai 4, Langkah 1 sampai 5), jadi nomor jadi elemen visual, bukan
sekadar label. Inter dipakai untuk badan teks karena halaman ini panjang dan
padat, dan Inter terbaca pada ukuran 15 sampai 17px tanpa melelahkan.

## Bentuk

Radius dipakai sebagai tingkat, bukan dekorasi. Tiga nilai saja:

- `8px` kontrol: tombol, input
- `12px` permukaan kecil: kartu di dalam section, catatan, panel samping
- `16px` permukaan besar: kartu utama, tabel, panel hero

Tidak ada bentuk kapsul penuh. Bayangan hanya pada satu elemen yang benar-benar
melayang di atas halaman, yaitu menu dropdown navigasi. Sisanya rata.

## Motif identitas

Nomor urut besar berwarna aksen, di kiri, dengan teks mengalir di sebelah
kanannya. Pola itu sudah ada di rancangan awal pada enam building block, dan
dipakai ulang secara konsisten di tahapan penerapan dan langkah jalur permintaan.
Ikon lapisan duduk tepat di atas nomornya, di kolom aksen yang sama, sehingga
nomor dan ikon terbaca sebagai satu penanda, bukan dua hiasan terpisah.
Itu gestur yang membuat halaman ini terasa milik Ogya: dokumentasi teknis yang
diberi nomor, bukan brosur.

## Ikon

Digambar sendiri di grid 24 piksel, satu tebal garis (1.6), ujung membulat,
mewarisi warna teks induknya. Bukan impor dari pustaka ikon, karena satu pustaka
yang sama dipakai hampir semua situs dan membuat ikonnya berhenti bercerita apa
pun tentang produknya.

**Satu sumbu per kelompok.** Dalam satu deret ikon, semuanya harus menjawab
pertanyaan yang sama. Enam ikon industri menjawab "sektor apa", enam ikon
lapisan menjawab "lapisan ini mengerjakan apa". Set yang mencampur keduanya
terbaca kacau meski tiap ikonnya masuk akal sendiri-sendiri: mata menebak
sumbunya dari ikon pertama, lalu tersandung di ikon yang memakai sumbu lain.

Sumbu ditentukan oleh teks yang paling dekat dengan ikon. Di kartu solusi, ikon
duduk tepat di atas nama industri, jadi sumbunya industri.

**Kenal dari siluet, maksimal empat bentuk.** Di 24 piksel, gambar yang detail
berubah jadi bubur. Ikon yang harus ditebak lebih buruk daripada tidak ada ikon
sama sekali. Kalau sebuah bagian tidak punya bentuk yang benar-benar mewakilinya
dalam empat goresan, bagian itu tidak diberi ikon.

Palang kesehatan menandai sektornya, bukan menjanjikan layanan medis. Batas itu
sudah ditegaskan teks kartunya, dan ikon tidak perlu ikut menanggungnya.

Dilarang: percik, bintang, kilat, berlian, robot, dan bola cahaya. Semuanya
kosakata umum "produk AI" yang tidak menerangkan apa pun.

## Dial

```
ENERGY 2 / RHYTHM 2 / MOTION 1
```

- **ENERGY 2.** Blok navy penuh dan judul 58px adalah sapaan yang jelas, bukan
  halaman instansi yang datar. Tapi tidak ada gradien, kilau, atau tekstur, jadi
  bukan 3.
- **RHYTHM 2.** Komposisi section harus berbeda-beda, bukan satu template yang
  diulang dengan latar bergantian. Dasarnya konsisten, variasinya disengaja pada
  section yang isinya memang berbeda bentuk: tabel, daftar bernomor, dua kolom
  pembanding.
- **MOTION 1.** Hanya keadaan hover dan fokus. Rancangan awal tidak punya animasi
  sama sekali, dan halaman setebal ini tidak butuh elemen yang bergerak sendiri
  saat dibaca.

## Yang ditolak arah ini

Gradien biru ke ungu, kaca buram, kilau, latar bergaris atau bertitik, ikon
percik dan kilat, lencana kapsul "AI Powered", bentuk kapsul di atas judul utama,
dan angka yang tidak ada sumbernya. Tidak satu pun ada di rancangan awal, dan
tidak satu pun boleh masuk belakangan.

Satu pengecualian, diminta pemilik: **bento grid di section Biaya.** R-05
melarang mosaik bento sebagai layout bawaan, dan larangan itu tetap berlaku di
section lain. Yang membuatnya sah di sini hanya satu hal, dan kalau hal itu
hilang maka bento-nya ikut dicabut: ukuran selnya mengikuti perbedaan yang nyata
ada di isinya, yaitu sebaran sifat 1 banding 4. Satu biaya sekali bayar dapat
sel dua kolom dua baris, empat biaya berulang mengisi sisanya, dan grid 4x2 itu
terisi penuh tanpa petak kosong.

Yang **tidak** boleh jadi dasar ukurannya: panjang teks atau jumlah penentu
skala. Keduanya cuma berkisar 3 sampai 5 di data sekarang, terlalu mirip, dan
bento atas dasar itu jadi hiasan. Aturannya ditegakkan di kode: `COST_CELLS`
hanya memberi kelas `is-utama` pada sifat yang isinya tunggal, jadi kalau
sebarannya berubah, selnya rata sendiri dan bukan jadi mosaik tanpa alasan.
