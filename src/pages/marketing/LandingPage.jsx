import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent text-on-surface font-body-md min-h-screen flex flex-col relative w-full">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-lg">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-gutter py-xl relative">
          <div className="absolute inset-0 z-0 overflow-hidden rounded-xl opacity-20">
            <img 
              alt="Server room" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgkw3kAlzcQLjqv6zlpDCshkCbZown6nQuU2zV7VSqm1mYSiKpijX3GcCNIK87O4v-CETtzKIPoSfuIcnk52KQ_j361PmCtLadMeeRMbewaHuINnGwqICmd86FE9Ium8fphXG79Cv4F90u7CnuyG6o30TFUj22CSs3HMepyTdhj4Oq-WL4njZOSY7pvvOiE_vSIYTQf6PN-3x1mIyRnPgpZy05FZMem5mgQ4SN7cYGhJgbPcvLpG_s6wWkBtH_CErrk5T3K8Nvtyo" 
            />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-lg items-center min-h-[614px]">
            <div className="space-y-md">
              <h1 className="text-4xl md:text-7xl font-extrabold text-primary tracking-tighter leading-[1.1]">
                Solusi Infrastruktur <br/>
                <span className="text-primary-fixed">Internet Terpadu</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed opacity-90">
                Tingkatkan efisiensi ISP Anda dengan ekosistem terintegrasi Monivexa. Kelola Billing, lacak Stok, dan pantau ODP secara real-time dari satu dashboard berkinerja tinggi.
              </p>
              <div className="flex gap-sm pt-sm">
                <a href="https://wa.me/6285753327872?text=Halo%20Monivexa,%20saya%20ingin%20konsultasi%20mengenai%20infrastruktur%20ISP." target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 rounded-lg font-label-caps text-label-caps text-center cursor-pointer">Konsultasi Gratis</a>
                <Link to="/services" className="btn-secondary px-6 py-3 rounded-lg font-label-caps text-label-caps text-center cursor-pointer">Pelajari Lebih Lanjut</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights (The Core 3) - Bento Grid */}
        <section className="max-w-container-max mx-auto px-gutter py-xl space-y-lg">
          <div className="text-center space-y-sm max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary">Tiga Pilar Infrastruktur Anda</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Modul inti yang dirancang untuk presisi teknis dan stabilitas operasional ISP modern.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Sistem Billing */}
            <div className="glass-card rounded-xl p-md flex flex-col space-y-md">
              <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant">
                <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-xs">Sistem Billing</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Otomatisasi siklus penagihan ISP dan manajemen keanggotaan. Tangani faktur kompleks dengan akurasi tinggi dan pastikan arus kas jaringan Anda tetap stabil.</p>
              </div>
              <div className="mt-auto pt-sm border-t border-outline-variant/50">
                <span className="inline-block px-2 py-1 bg-surface-variant text-primary-fixed font-label-caps text-label-caps rounded-sm">Automated</span>
              </div>
            </div>
            {/* Manajemen Stok */}
            <div className="glass-card rounded-xl p-md flex flex-col space-y-md">
              <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant">
                <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-xs">Manajemen Stok</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Lacak pergerakan aset fisik secara presisi. Kontrol inventaris kabel fiber optik, kotak ODP, dan perangkat ONT melintasi berbagai node jaringan.</p>
              </div>
              <div className="mt-auto pt-sm border-t border-outline-variant/50">
                <span className="inline-block px-2 py-1 bg-surface-variant text-primary-fixed font-label-caps text-label-caps rounded-sm">Real-time Asset Tracking</span>
              </div>
            </div>
            {/* Monitoring ODP */}
            <div className="glass-card rounded-xl p-md flex flex-col space-y-md">
              <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant">
                <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-xs">Monitoring ODP</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Dashboard visual untuk visibilitas instan. Pantau status Optical Distribution Point (ODP), deteksi anomali sinyal, dan minimalisir downtime jaringan.</p>
              </div>
              <div className="mt-auto pt-sm border-t border-outline-variant/50">
                <span className="inline-block px-2 py-1 bg-inverse-primary/20 text-primary-fixed font-label-caps text-label-caps rounded-sm border border-primary-fixed/30">Live Status: Online</span>
              </div>
            </div>
          </div>
        </section>

        {/* 'Satu Set Fitur' Section */}
        <section className="max-w-container-max mx-auto px-gutter py-xl">
          <div className="glass-card rounded-xl p-lg grid md:grid-cols-2 gap-lg items-center">
            <div className="space-y-md">
              <h2 className="font-headline-lg text-headline-lg text-primary">Satu Set Fitur, Kontrol Penuh</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mengapa menggunakan sistem terpisah ketika Anda bisa mengintegrasikan semuanya? Suite Monivexa menghilangkan silo data, memungkinkan tim teknis dan finansial Anda bekerja dari satu sumber kebenaran yang direkayasa untuk kecepatan dan keandalan tingkat enterprise.
              </p>
              <ul className="space-y-sm pt-sm">
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Data Tersinkronisasi Instan</span>
                </li>
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Keamanan Enkripsi Lanjutan</span>
                </li>
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Pelaporan Analitik Mendalam</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden border border-outline-variant">
              <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm z-10 flex items-center justify-center">
                <img 
                  alt="Dashboard visualization" 
                  className="w-full h-full object-cover opacity-60" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKIadnwkqDCNLryP69-KAXlnfwGYodRwEieDuti7u3lykkcHnBNBVI3IkXH6bEL3wZTjDJPVTcG3cAhHm3YExb4BCZyxBioYVf1JC0UqJW3Rhbe0G-QoGkykCvGbq4fFHIxErN4KE3ectqqlp_nzX_-7OXD4NH5IX9zX96D_tcYPwaMzBVAtysKtrv8dWRNfa6GxCGVcjyN-n4r42gqgRgfNiejedK_Z0E8Co7fAjlYWb2WFkk-VQs1fqRIcajavX1nJ1bd2XDv3g" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="max-w-container-max mx-auto px-gutter py-xl border-t border-outline-variant/20">
          <p className="font-label-caps text-label-caps text-on-surface-variant text-center mb-md">DIPERCAYA OLEH PENYEDIA INFRASTRUKTUR TERKEMUKA</p>
          <div className="flex flex-wrap justify-center gap-lg opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="w-32 h-12 bg-surface-variant rounded flex items-center justify-center text-on-surface font-headline-sm">Logo 1</div>
            <div className="w-32 h-12 bg-surface-variant rounded flex items-center justify-center text-on-surface font-headline-sm">Logo 2</div>
            <div className="w-32 h-12 bg-surface-variant rounded flex items-center justify-center text-on-surface font-headline-sm">Logo 3</div>
            <div className="w-32 h-12 bg-surface-variant rounded flex items-center justify-center text-on-surface font-headline-sm">Logo 4</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest w-full py-lg border-t border-outline-variant/20 text-primary font-body-sm text-body-sm">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="space-y-sm md:col-span-1">
            <div className="text-headline-sm font-headline-sm font-bold text-primary">Monivexa</div>
            <p className="text-on-surface-variant text-body-sm">Engineered for high-performance connectivity.</p>
          </div>
          <div className="space-y-sm">
            <h4 className="font-label-caps text-label-caps text-on-surface-variant">Products</h4>
            <ul className="space-y-xs flex flex-col gap-1">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary-fixed" href="#">Billing System</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary-fixed" href="#">Stock Management</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary-fixed" href="#">ODP Monitoring</a></li>
            </ul>
          </div>
          <div className="space-y-sm">
            <h4 className="font-label-caps text-label-caps text-on-surface-variant">Company</h4>
            <ul className="space-y-xs flex flex-col gap-1">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary-fixed" href="#">Service Areas</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary-fixed" href="#">Privacy Policy</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary-fixed" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter mt-lg pt-sm border-t border-outline-variant/20">
          <p className="text-on-surface-variant text-center font-body-sm text-body-sm">© 2024 Monivexa Internet Infrastructure. Engineered for high-performance connectivity.</p>
        </div>
      </footer>
    </div>
  );
}
