import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent text-on-surface font-body-md min-h-screen flex flex-col relative w-full">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-xl pb-xl">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-gutter pt-24 pb-lg text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold text-primary mb-6 tracking-tighter leading-tight">
            Merekayasa Konektivitas <br/>
            <span className="text-primary-fixed">Performa Tinggi.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-lg leading-relaxed opacity-90">
            Kami membangun infrastruktur dasar yang menggerakkan internet modern. Misi kami adalah untuk memberikan stabilitas jaringan yang tak tertandingi, latensi sangat rendah, dan solusi yang sangat terukur untuk ISP dan operasi perusahaan secara global.
          </p>
        </section>

        {/* Vision & Why Monivexa */}
        <section className="max-w-container-max mx-auto px-gutter py-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Vision Panel */}
            <div className="glass-card rounded-xl p-lg md:col-span-2 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_4px_20px_rgba(95,251,214,0.1)]">
              <div>
                <div className="flex items-center mb-md">
                  <span className="material-symbols-outlined text-primary-fixed mr-sm" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                  <h2 className="text-headline-md font-bold text-primary">Visi Kami</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                  Memberdayakan ISP dengan ekosistem terintegrasi. Kami membayangkan masa depan di mana operasi jaringan mulus, otomatis, dan dapat diskalakan tanpa batas. Dengan mengabstraksi kompleksitas manajemen perangkat keras dan kecerdasan perutean, kami memungkinkan penyedia layanan untuk fokus memberikan pengalaman superior kepada pengguna akhir mereka.
                </p>
                <div className="mt-md p-6 bg-white/5 rounded-xl border border-white/5">
                  <h3 className="text-body-lg font-bold text-primary mb-3">Kepemimpinan</h3>
                  <p className="font-body-md text-on-surface-variant mb-3"><strong>VISITEK SOLUTION</strong> (Monivexa berada di bawah naungan VISITEK SOLUTION)</p>
                  <p className="font-body-sm text-on-surface"><strong>Andreawan Budiarto</strong> (Owner)<br/><strong>M Yadi Rahmat Riten</strong> (Support)</p>
                </div>
              </div>
              <div className="mt-lg rounded-xl overflow-hidden border border-white/10 h-48">
                <img 
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" 
                  alt="Server Rack"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF9TJ8mnWOsmpWh0-0cUFQjncoacK-LFAjcV6FMXEzKBnmtsFWCbcYPKB53vGkKrgtJeRGFugLLnCN1BwzQrLe1yt4oqfthb9UWrEdB8C3UbuxLCpbo3E9876mhvwK4ivLCXEjVh2tF_IzyFVOGb7jM2Lzs5PvMHB1YkQhN1MGXSZGU7RZ0AlZlvbou5663a18-3W-ByJ3OhTeTMB3i1RJ9QujgP3nzoStvT4nWi2wxPMxEk20RWQDsiChD2H8z4PsYKHjxK1BLvY" 
                />
              </div>
            </div>

            {/* Why Monivexa Panels */}
            <div className="flex flex-col gap-md">
              <div className="glass-card rounded-xl p-md flex-1 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(95,251,214,0.1)]">
                <span className="material-symbols-outlined text-primary-fixed mb-sm" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                <h3 className="text-body-lg font-bold text-primary mb-2">Perutean Presisi</h3>
                <p className="font-body-sm text-on-surface-variant">Optimalisasi latensi mikrodetik di seluruh tulang punggung global kami, memastikan paket data mengambil jalur yang paling efisien.</p>
              </div>
              <div className="glass-card rounded-xl p-md flex-1 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(95,251,214,0.1)]">
                <span className="material-symbols-outlined text-primary-fixed mb-sm" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                <h3 className="text-body-lg font-bold text-primary mb-2">Stabilitas Absolut</h3>
                <p className="font-body-sm text-on-surface-variant">Arsitektur redundan n+2 menjamin waktu operasi 99,999%, dibangun untuk beban kerja perusahaan yang sangat penting.</p>
              </div>
              <div className="glass-card rounded-xl p-md flex-1 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(95,251,214,0.1)]">
                <span className="material-symbols-outlined text-primary-fixed mb-sm" style={{ fontVariationSettings: "'FILL' 1" }}>dns</span>
                <h3 className="text-body-lg font-bold text-primary mb-2">Skala Masif</h3>
                <p className="font-body-sm text-on-surface-variant">Penyediaan kapasitas elastis memungkinkan jaringan Anda menyerap lonjakan lalu lintas yang masif tanpa degradasi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="max-w-container-max mx-auto px-gutter py-xl">
          <div className="glass-card rounded-xl p-lg relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCj938pKSV4ZJ-3cZ7isPDTkMAN2TSGLf4BgSq710uITPQBrWQ2WYK8khmE4V4RCqe4cI0esMU1nOm3wW1RdlZiSEzhycQFcm6dZxk8ILptvO8KXkXQTZPA1t4_wXcVNBgllh3G3shEVfhc6RSW80d_xtBw1uQ_wOLmSmZSfgEQpOxL6zO3m9B5wOc14eVFXwhxfdCSbigS2MuMGlFDcr1BUZIkv7WitZvYVzW-2bWqXBvIWmEtBzy9C2pPT6DGTmekfuPyn5BGXEE')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
              <div>
                <h2 className="text-headline-lg font-bold text-primary mb-md">Jangkauan Global, Kehadiran Lokal.</h2>
                <p className="font-body-md text-on-surface-variant mb-lg">PoP (Points of Presence) strategis kami berlokasi di fasilitas netral operator utama di seluruh dunia. Kami melakukan peering secara langsung dengan jaringan tier-1 utama dan pertukaran regional untuk menjaga lalu lintas tetap terlokalisasi dan cepat.</p>
                <div className="flex flex-wrap gap-sm">
                  <span className="bg-primary-fixed/10 text-primary-fixed border border-primary-fixed/30 px-3 py-1 rounded-sm font-label-caps text-[10px] tracking-widest uppercase">AMERIKA UTARA: 14 PoP</span>
                  <span className="bg-primary-fixed/10 text-primary-fixed border border-primary-fixed/30 px-3 py-1 rounded-sm font-label-caps text-[10px] tracking-widest uppercase">EROPA: 22 PoP</span>
                  <span className="bg-primary-fixed/10 text-primary-fixed border border-primary-fixed/30 px-3 py-1 rounded-sm font-label-caps text-[10px] tracking-widest uppercase">APAC: 18 PoP</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-md">
                <div className="bg-[#0e1512]/60 backdrop-blur-md p-md rounded-xl border border-white/5 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">12Tbps+</div>
                  <div className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest">Kapasitas Jaringan</div>
                </div>
                <div className="bg-[#0e1512]/60 backdrop-blur-md p-md rounded-xl border border-white/5 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">&lt;5ms</div>
                  <div className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest">Latensi Metro</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-transparent w-full py-xl border-t border-white/5 mt-auto">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="col-span-1 md:col-span-2">
            <div className="text-headline-sm font-bold text-primary mb-sm">Monivexa</div>
            <p className="text-body-sm text-on-surface-variant mb-md">© 2024 Monivexa Infrastructure Suite di bawah naungan VISITEK SOLUTION. Semua hak dilindungi undang-undang.</p>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-wrap gap-md justify-start md:justify-end">
            <a className="text-body-sm text-on-surface-variant hover:text-primary-fixed transition-all cursor-pointer">Kebijakan Privasi</a>
            <a className="text-body-sm text-on-surface-variant hover:text-primary-fixed transition-all cursor-pointer">Ketentuan Layanan</a>
            <a className="text-body-sm text-on-surface-variant hover:text-primary-fixed transition-all cursor-pointer">Status Jaringan</a>
            <a className="text-body-sm text-on-surface-variant hover:text-primary-fixed transition-all cursor-pointer">Dukungan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
