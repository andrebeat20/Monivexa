import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent text-on-surface font-body-md min-h-screen flex flex-col relative w-full">
      <Navbar />

      {/* Main Content Canvas */}
      <main className="flex-grow pt-24 pb-xl">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-gutter py-xl relative">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none rounded-xl overflow-hidden">
            <img 
              alt="Infrastructure Background" 
              className="w-full h-full object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSbiMvpLCH-xYYQSn8CWrZ2OfeKoFpv4zldig9LN6TMABN5UuLxRvaYRNjSrYI0B-RxwcYPaZPYr_W91bHP11wSmvIXif2zpdJD9EbVy1EjoSHLIF8jkiHzMDmLqDM7dWDFwNkPJ43YK1qP_EFBrnkhwOSXH2Mxl7JCCjd6WdXu2llCYD4Zie3e0CcVEUBYg7QIpzKjTLj-oN8SOik7MgiTY7HfwC3s7TMTy5xA3sv_kpyWujWpko1rrXqZP3E2JTrniaX1cDj2C4" 
            />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-block px-3 py-1 mb-6 rounded-sm bg-primary-fixed/10 border border-primary-fixed/30 text-primary-fixed font-label-caps text-[10px] tracking-widest uppercase font-bold">
              Inti Infrastruktur v2
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-primary mb-6 tracking-tighter leading-tight">
              Operasi Terpadu untuk <br/>
              <span className="text-primary-fixed">Jaringan Modern.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed opacity-90">
              Monivexa menghadirkan rangkaian yang sangat terintegrasi yang dirancang khusus untuk ISP perusahaan. Dari analisis sinyal real-time di ODP hingga realisasi pendapatan otomatis.
            </p>
          </div>
        </section>

        {/* Services Bento Layout */}
        <section className="max-w-container-max mx-auto px-gutter py-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Pillar 3: OLT & Network Monitoring (Featured/Wide) */}
            <div className="md:col-span-12 lg:col-span-8 glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-primary-fixed/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/5 blur-[100px] rounded-full pointer-events-none"></div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary-fixed/50 transition-colors">
                  <span className="material-symbols-outlined text-primary-fixed text-[28px]">router</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-5">Pemantauan OLT & Jaringan</h2>
                <p className="font-body-md text-on-surface-variant mb-8 max-w-xl leading-relaxed">
                  Dapatkan visibilitas yang belum pernah ada sebelumnya ke lapisan fisik Anda. Lacak topologi real-time, pantau status ODP, dan lakukan analisis sinyal mendalam di seluruh jejak fiber Anda untuk memprediksi pemadaman sebelum berdampak pada pelanggan.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Topologi Real-time', 'Pelacakan ODP', 'Diagnostik Sinyal'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-on-surface text-[11px] border border-white/10 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 1: Billing & Revenue */}
            <div className="md:col-span-6 lg:col-span-4 glass-card rounded-2xl p-8 flex flex-col justify-between hover:border-primary-fixed/20 transition-all duration-500 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary-fixed group-hover:border-primary-fixed/50 transition-colors">
                  <span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Penagihan & Pendapatan</h3>
                <p className="text-body-sm text-on-surface-variant mb-8 leading-relaxed">
                  Otomatiskan alur keuangan Anda. Dari pembuatan faktur berulang hingga pelacakan pembayaran yang kompleks dan penghitungan pajak dinamis.
                </p>
              </div>
              <div className="border-t border-white/5 pt-6 mt-auto">
                <a className="text-[11px] font-bold uppercase tracking-widest text-primary-fixed hover:opacity-80 flex items-center gap-2 cursor-pointer transition-opacity">
                  Jelajahi Billing <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Pillar 2: Stock & Inventory */}
            <div className="md:col-span-6 lg:col-span-4 glass-card rounded-2xl p-8 flex flex-col justify-between hover:border-primary-fixed/20 transition-all duration-500 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary-fixed group-hover:border-primary-fixed/50 transition-colors">
                  <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Stok & Inventaris</h3>
                <p className="text-body-sm text-on-surface-variant mb-8 leading-relaxed">
                  Pertahankan kendali mutlak atas aset fisik Anda. Lacak router, ONT, dan kabel di beberapa gudang hingga ke alamat MAC.
                </p>
              </div>
              <div className="border-t border-white/5 pt-6 mt-auto">
                <a className="text-[11px] font-bold uppercase tracking-widest text-primary-fixed hover:opacity-80 flex items-center gap-2 cursor-pointer transition-opacity">
                  Jelajahi Inventaris <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Additional Metric Card */}
            <div className="md:col-span-12 lg:col-span-8 bg-[#1a211f]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-fixed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="text-center relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-primary-fixed mb-3 tracking-tighter">99.999%</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant opacity-60">SLA Platform Global</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-xl bg-transparent border-t border-white/5">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4 tracking-tight">Monivexa</div>
            <p className="text-body-sm text-on-surface-variant max-w-sm mb-6">© 2024 Monivexa Infrastructure Suite. Hak cipta dilindungi undang-undang.</p>
          </div>
          <div className="col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-6">Hukum</h4>
            <ul className="space-y-3 text-body-sm text-on-surface-variant">
              <li><a className="hover:text-primary-fixed transition-colors cursor-pointer">Kebijakan Privasi</a></li>
              <li><a className="hover:text-primary-fixed transition-colors cursor-pointer">Ketentuan Layanan</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-6">Sumber Daya</h4>
            <ul className="space-y-3 text-body-sm text-on-surface-variant">
              <li><a className="hover:text-primary-fixed transition-colors cursor-pointer">Status Jaringan</a></li>
              <li><a className="hover:text-primary-fixed transition-colors cursor-pointer">Dukungan</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
