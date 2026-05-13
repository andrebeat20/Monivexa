# Monivexa - Integrated ISP Infrastructure PWA

![Monivexa Banner](https://img.shields.io/badge/Monivexa-Infrastruktur_Terpadu-0ef?style=for-the-badge&logo=react&logoColor=5ffbd6)
![Tech Stack](https://img.shields.io/badge/Stack-React_|_Node.js_|_Tailwind-5ffbd6?style=for-the-badge)

**Monivexa** adalah platform Progressive Web App (PWA) kelas industri yang dirancang khusus untuk mengelola seluruh ekosistem Internet Service Provider (ISP). Aplikasi ini menyatukan manajemen penagihan, inventaris pergudangan, dan monitoring infrastruktur jaringan dalam satu dashboard yang cepat, aman, dan responsif.

---

## 🚀 Key Modules

### 1. 💳 Billing Module
Sistem otomatisasi penagihan dan manajemen pelanggan yang presisi.
- **Invoice Automation**: Pembuatan faktur massal secara otomatis.
- **Payment Tracking**: Monitoring status pembayaran lunas/belum lunas secara real-time.
- **Cash Flow Analytics**: Visualisasi arus kas bulanan untuk transparansi finansial.
- **Customer Portal**: Manajemen basis data pelanggan dan riwayat layanan.

### 2. 📦 Stock & Logistics Module
Manajemen aset fisik dan inventaris perangkat jaringan.
- **Multi-Warehouse Support**: Kelola stok di berbagai lokasi gudang.
- **Logistics Tracking**: Pencatatan mutasi barang (Barang Masuk, Keluar, & Transfer).
- **Asset Reports**: Visualisasi nilai aset dan perputaran stok.
- **SKU Management**: Pelacakan perangkat (ONT, ODP, Kabel FO) berdasarkan kategori.

### 3. 🌐 Network & Infrastructure Module
Monitoring real-time untuk keandalan jaringan.
- **OLT Status Monitoring**: Pantau kesehatan perangkat OLT (Suhu, CPU, ONU Active).
- **ODP Management**: Manajemen kapasitas port ODP dan pemetaan distribusi.
- **Network Support**: Command center untuk diagnostik teknis (Optical Power, Loss).
- **System Logs**: Event feed untuk pelacakan anomali dan kejadian sistem secara mendalam.

---

## 🏗️ Architecture & Clean Code

Proyek ini dibangun dengan standar **Software Engineering** profesional:
- **Feature-Based Folder Structure**: Kode dipisahkan berdasarkan modul untuk kemudahan pemeliharaan.
- **Atomic Shared Components**: UI konsisten menggunakan komponen *glassmorphism* yang dapat digunakan kembali.
- **Centralized Data Management**: Pemisahan lapisan data (*mock/API*) dari logika UI.
- **Responsive Design**: Pengalaman premium di perangkat mobile maupun desktop.

### Folder Structure
```text
src/
├── components/       # Shared UI Components (GlassCard, StatCard, etc.)
├── constants/        # Centralized Constants & Mock Data
├── layouts/          # Global Dashboard Layouts
├── pages/            # Feature-based pages
│   ├── auth/         # Login, Register, Forgot Password
│   ├── billing/      # Billing dashboard & management
│   ├── stock/        # Inventory & Warehouse management
│   ├── network/      # OLT, ODP, Logs & Support
│   └── marketing/    # Public facing pages
└── main.jsx          # Entry point
```

---

## 🛠️ Tech Stack
- **Frontend**: [React.js](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Chart.js](https://www.chartjs.org/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/andrebeat20/Monivexa.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run Development Server:
   ```bash
   npm run dev
   ```
4. Build for Production:
   ```bash
   npm run build
   ```

---

## 📄 License
© 2024 **Monivexa Technical Team**. All rights reserved. Built for high-performance connectivity.

---

Developed with ❤️ by **AndreBeat & Monivexa Engineering Team**
