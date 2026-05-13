import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Network, 
  Database, 
  Cloud, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Automated Billing Engine",
      subtitle: "Finansial & Penagihan",
      desc: "Sistem penagihan otomatis yang menangani siklus invoicing, integrasi payment gateway, dan laporan keuangan real-time untuk ISP skala besar.",
      icon: <BarChart3 size={32} />,
      features: ["Otomatisasi Invoice", "Multi-payment Gateway", "Laporan Piutang", "Manajemen Diskon"],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Smart Inventory Suite",
      subtitle: "Stok & Logistik",
      desc: "Kelola aset fisik dengan presisi tinggi. Lacak pergerakan perangkat dari gudang hingga ke tangan pelanggan dengan sistem serial tracking.",
      icon: <Database size={32} />,
      features: ["Serial Number Tracking", "Multi-Warehouse", "Stock Alert System", "Logistics Monitoring"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Network Intelligence",
      subtitle: "Monitoring & Ops",
      desc: "Visibilitas total terhadap infrastruktur jaringan Anda. Pantau status OLT dan ODP secara real-time untuk meminimalisir downtime.",
      icon: <Network size={32} />,
      features: ["OLT/ODP Monitoring", "Signal Analytics", "Fault Detection", "Topology Mapping"],
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <div className="bg-[#0a0f0d] text-white min-h-screen selection:bg-primary-fixed/30 selection:text-primary-fixed overflow-x-hidden">
      <Navbar />
      
      {/* Services Hero */}
      <section className="relative pt-40 pb-24 px-gutter overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-fixed/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[100px] rounded-full"></div>
        
        <div className="max-w-container-max mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-fixed">Our Capabilities</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase italic"
          >
            CORE <span className="text-primary-fixed not-italic font-sans">SERVICES</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-70 leading-relaxed"
          >
            Kami menyediakan solusi infrastruktur digital ujung-ke-ujung yang dirancang khusus untuk memenuhi kebutuhan operasional ISP modern.
          </motion.p>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="py-24 px-gutter relative">
        <div className="max-w-container-max mx-auto space-y-32">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-fixed">{service.subtitle}</span>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">{service.title}</h2>
                </div>
                <p className="text-on-surface-variant text-xl font-medium leading-relaxed opacity-80">
                  {service.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/60">
                      <ShieldCheck className="text-primary-fixed" size={16} />
                      {f}
                    </div>
                  ))}
                </div>
                <button onClick={() => navigate('/register')} className="inline-flex items-center gap-3 text-primary-fixed font-black text-xs tracking-widest uppercase group">
                  Dapatkan Akses Sekarang <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              
              <div className="flex-1 relative">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                  className={`glass-card p-2 rounded-[3rem] border border-white/10 relative z-10 overflow-hidden group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="bg-[#0e1512] rounded-[2.5rem] p-16 flex items-center justify-center text-primary-fixed relative z-10 border border-white/5">
                    <div className="p-10 rounded-full bg-white/5 border border-white/10 shadow-2xl group-hover:scale-125 transition-transform duration-700">
                      {service.icon}
                    </div>
                  </div>
                </motion.div>
                {/* Background Decoration */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-fixed/20 blur-[80px] rounded-full -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Secondary Services */}
      <section className="py-32 px-gutter bg-white/[0.02] border-y border-white/5">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">Ecosystem Support Features</h2>
            <p className="text-on-surface-variant font-medium opacity-60">Teknologi pendukung yang memastikan sistem Anda berjalan tanpa hambatan.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Cpu />, title: "High-Performance Core", desc: "Arsitektur sistem yang dioptimalkan untuk menangani jutaan baris data per detik." },
              { icon: <Cloud />, title: "Real-time Sync", desc: "Sinkronisasi data instan di seluruh node jaringan tanpa latensi." },
              { icon: <ShieldCheck />, title: "Enterprise Security", desc: "Enkripsi tingkat lanjut dan protokol akses aman berlapis." },
              { icon: <ChevronRight />, title: "Developer API", desc: "Integrasikan Monivexa dengan sistem yang sudah Anda miliki dengan mudah." }
            ].map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-3xl border border-white/5 hover:border-primary-fixed/30 transition-all"
              >
                <div className="text-primary-fixed mb-6">{s.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">{s.title}</h4>
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed opacity-60">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Simplified from Landing) */}
      <footer className="py-20 px-gutter border-t border-white/5">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/logo_monivexa.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-2xl font-black tracking-tighter uppercase text-white">Monivexa</span>
          </div>
          <div className="flex gap-10">
            {['Home', 'Pricing', 'About Us'].map(l => (
              <a key={l} href="#" onClick={(e) => { e.preventDefault(); navigate(l === 'Home' ? '/' : `/${l.toLowerCase().replace(' ', '-')}`); }} className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">© 2024 Monivexa Technical Group</p>
        </div>
      </footer>
    </div>
  );
}
