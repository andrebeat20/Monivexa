🚀 PRODUCT REQUIREMENTS DOCUMENT (PRD): MONIVEXA
1. INFORMASI PROYEK & VISI

Nama Proyek: MONIVEXA.


Naungan: VisiTek Solution.


Owner: Andreawan Budiarto.


Visi: Membangun ekosistem PWA yang menghubungkan database inventaris real-time dengan peta GIS interaktif, di mana setiap kabel dropcore dijahit secara digital dari ODP ke ONT pelanggan untuk efisiensi operasional tanpa batas.

2. ALUR KERJA SISTEM (WORKFLOW)
Alur navigasi dirancang agar pengguna dapat berpindah antar modul dengan cepat melalui pusat kendali.


Fase 1: Website Utama: Landing page informasi Layanan, Pricing, dan Profil VisiTek Solution.


Fase 2: Client Portal: Login Mitra dengan deteksi partner_id otomatis untuk isolasi data.


Fase 3: Modul Selection HUB: Gerbang utama untuk memilih salah satu dari 3 Modul.


Fase 4: Dashboard Operasional: Setiap dashboard memiliki tombol "Back to HUB" untuk kembali ke menu seleksi modul kapan saja.

3. TIGA MODUL UTAMA (CORE MODULES)
1. Dashboard Billing (Standard Billingkita)
Sistem penagihan otomatis untuk menjaga kesehatan arus kas mitra.


Automated Lifecycle: Mengelola siklus pendaftaran, pembuatan invoice otomatis, hingga penagihan rutin.


WhatsApp Gateway: Mengirim notifikasi tagihan, pengingat jatuh tempo, dan bukti bayar otomatis ke nomor pelanggan.


Auto-Isolation: Integrasi dengan Mikrotik untuk isolir otomatis pelanggan yang menunggak.


Role Kolektor: Fitur untuk petugas lapangan menagih di tempat dan mencetak struk via Bluetooth Printer.

2. Dashboard Stock Inventaris
Manajemen terpadu untuk aset kantor dan material teknik.


Technical Inventory: Pelacakan material (Modem/ONT, Kabel, ODP) menggunakan sistem Scan QR Code.


Office Stock Tracking: Manajemen barang kantor (Laptop, Meja, Kursi) yang terpisah dari stok lapangan.


Material Analytics: Otomatisasi perhitungan sisa kabel di gudang berdasarkan data tarikan kabel di peta GIS.

3. Dashboard OLT & Networking Monitoring (Including GIS Mapping)
Pusat kendali infrastruktur yang menggabungkan monitoring perangkat dengan visualisasi peta interaktif.


Visualisasi Topologi (Stitch): Menggambar garis kabel secara otomatis dari Server/OLT ke ODP, hingga ke ONT di rumah pelanggan.


Hierarki Warna Jalur: Biru untuk Feeder (OLT-ODP), Hijau untuk Dropcore aktif, dan Merah untuk status gangguan/LOS.


SNMP Integration: Memantau redaman (dBm) dan status Online/Offline perangkat secara real-time langsung dari dashboard.


Visual Alerts: Garis kabel di peta otomatis berubah warna menjadi merah jika sistem mendeteksi gangguan pada titik pelanggan tersebut.

4. SPESIFIKASI TEKNIS (INPUT ANTIGRAVITY)

Frontend: React.js + Tailwind CSS + Vite dengan tema Ultra-modern Dark Mode.


PWA Features: Mendukung mode offline (caching peta) dan fitur "Add to Home Screen".


Map Engine: Mapbox GL JS untuk merender ribuan jalur kabel dengan lancar.


Backend & DB: Laravel + Supabase (PostgreSQL + PostGIS) untuk akurasi lokasi kabel hingga hitungan centimeter.


Navigasi: React Router untuk transisi instan antar modul dan HUB tanpa reload.

Dengan menggabungkan GIS Mapping ke dalam modul Monitoring, admin kini memiliki 'mata digital' yang lengkap. Begitu muncul notifikasi redaman tinggi (dBm), admin bisa langsung melihat jalur kabel yang bermasalah di map tanpa harus berpindah modul lagi!